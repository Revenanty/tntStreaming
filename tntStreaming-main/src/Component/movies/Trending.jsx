import React from "react";
import { useGetTrendingMovieQuery } from "../../app/moviApi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

function Trending() {
  const { data } = useGetTrendingMovieQuery();

  return (
    <>
      <section className="bg_color">
        <h1 className="text-white text-3xl lg:text-3xl md:text-3xl sm:text-xl xsm:text-xl font-bold text-center ">
          Trending Movie in <span className="text-red-500">TNT</span>
        </h1>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {data?.results.map((movie) => (
            <SwiperSlide key={movie.id}>
              <section className="relative text_color movieContainer m-auto mt-8">
                <div className="bg-gradient-to-r from-black/100 to-white/5">
                  <img
                    className="w-full h-[80vh] lg:h-auto md:h-auto sm:h-auto  object-cover mix-blend-overlay"
                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                    alt=""
                  />
                </div>
                <div className="absolute top-20 lg:top-16 md:top-12 sm:top-6 left-16 md:left-10 sm:left-5">
                  <h1 className="text-4xl md:text-2xl sm:text-xl">
                    {movie.title}
                  </h1>
                  <p className="max-w-2xl text-base md:text-sm sm:text-xs leading-5 mt-4">
                    {movie.overview}
                  </p>
                  <p className="mt-2 sm:text-xs">
                    Release Date - {movie.release_date}
                  </p>
                  <Link to={`/video/${movie.id}`}>
                    <button className="bg-red-500 text-white active:scale-105 px-4 py-2 rounded-md mt-4 hover:bg-sky-950 duration-300 md:text-sm sm:text-xs">
                      Watch Tralier
                    </button>
                  </Link>
                </div>
              </section>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}

export default Trending;
