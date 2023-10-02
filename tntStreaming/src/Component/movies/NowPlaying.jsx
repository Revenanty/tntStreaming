import React, { useState } from "react";
import { useGetNowPlayingQuery } from "../../app/moviApi";
import { HiChevronUp, HiChevronDown } from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function PopularTv() {
  const { data } = useGetNowPlayingQuery();
  const [open, setOpen] = useState("");

  return (
    <section className="py-5 bg_color text_color">
      <h1 className="text-white text-3xl lg:text-3xl md:text-3xl sm:text-x mb-3 xsm:text-xl font-bold text-center ">
        Now Playing Movie in <span className="text-red-500">TNT</span>
      </h1>
      <div>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          loop={true}
          breakpoints={{
            375: {
              slidesPerView: 2.5,
              spaceBetween: 13,
            },
            550: {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4.5,
              spaceBetween: 23,
            },
            991: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
            1200: {
              slidesPerView: 5.5,
              spaceBetween: 40,
            },
            1640: {
              slidesPerView: 7,
              spaceBetween: 40,
            },
          }}
        >
          {data?.results.map((movie) => (
            <SwiperSlide key={movie.id}>
              <div className=" text_color">
                <div>
                  <img
                    className="w-[35vh] h-auto"
                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                    alt=""
                  />
                  <HiChevronUp
                    onClick={() => setOpen(movie.id)}
                    className="absolute right-3 top-3 sm:ring-1 sm:top-1 bg-black rounded cursor-pointer active:scale-105 "
                    size={23}
                  />
                </div>
              </div>
              <div
                className={
                  open === movie.id
                    ? "bg-black/40 absolute w-full h-screen top-0 translate-y-0 transition-all ease-in-out duration-500"
                    : "bg-black/40 absolute w-full h-screen top-0 translate-y-40 transition-all ease-in-out duration-500"
                }
              >
                <HiChevronDown
                  onClick={() => setOpen("")}
                  size={23}
                  className="absolute right-3 sm:ring-1 sm:top-1 bg-black text-white rounded cursor-pointer active:scale-105 top-3"
                />
                <div className="p-3">
                  <h1 className="text-sm md:text-xs sm:text-xs">
                    {movie.title}
                  </h1>
                  <p className="text-sm md:text-xs sm:text-xs">
                    Release Date - {movie.release_date}
                  </p>
                  <Link to={`/details/${movie.id}`}>
                    {" "}
                    <button className="bg-red-500 mt-1 active:scale-90 rounded px-2 text-sm py-1 hover:bg-sky-900 duration-300">
                      See more
                    </button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default PopularTv;
