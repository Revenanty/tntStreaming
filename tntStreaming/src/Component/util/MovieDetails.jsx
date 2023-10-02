import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetMovieDetialQuery } from "../../app/moviApi";
import { BsDot } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";

import { AiOutlineHeart, AiOutlineTag, AiOutlineStar } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";

function MovieDetails() {
  const { id } = useParams();
  const { data } = useGetMovieDetialQuery(id);

  return (
    <section className="relative ">
      <div>
        <img
          className="w-full h-[90vh] lg:h-[87vh] md:h-auto sm:h-auto object-cover blur-lg"
          src={`https://image.tmdb.org/t/p/original/${data?.poster_path}`}
          alt=""
        />
      </div>
      <div className="absolute top-16 lg:top-10 left-[18%] flex items-center blurDetail p-10">
        <div>
          <img
            className="w-[40vh] h-auto rounded-lg"
            src={`https://image.tmdb.org/t/p/w780/${data?.poster_path}`}
            alt=""
          />
        </div>
        <div className="absolute left-[35%] lg:left-[30%]">
          <h1 className="text-4xl lg:text-3xl md:text-2xl sm:text-xl font-bold">
            {data?.title}
          </h1>
          <div className="flex mt-2">
            <p className="bg_color rounded py-1 px-2 text_color text-sm">
              {data?.release_date}
            </p>
            <p className="grid items-center">
              <BsDot size={20} />
            </p>
            <section>
              {data?.genres.map((genre) => (
                <span
                  key={genre.id}
                  className="bg_color rounded py-1 px-2 mr-2 text_color text-sm"
                >
                  {genre.name}
                </span>
              ))}
            </section>
            <p className="gird items-center">
              <BsDot size={20} />
            </p>
            <p className="bg_color rounded py-1 px-2 text_color text-sm">
              {data?.runtime} min
            </p>
          </div>
          <div className="flex items-center mt-5 mb-4">
            <div className="flex items-center">
              <p className="bg_color rounded-full py-1 px-2 text_color text-sm">
                {data?.vote_average}
              </p>
              <span className="ml-5">
                User <br /> Score
              </span>
            </div>
            <div className="flex items-center ml-8 text_color">
              <RxHamburgerMenu
                size={50}
                className="bg_color text_color rounded-full cursor-pointer mr-5 p-3 active:scale-105"
              />
              <AiOutlineHeart
                size={50}
                className="bg_color text_color rounded-full cursor-pointer mr-5 p-3 active:scale-105"
              />
              <AiOutlineTag
                size={50}
                className="bg_color text_color rounded-full cursor-pointer mr-5 p-3 active:scale-105"
              />
              <AiOutlineStar
                size={50}
                className="bg_color text_color rounded-full cursor-pointer mr-5 p-3 active:scale-105"
              />
            </div>
            <Link to={`/video/${data?.id}`}>
              <button className="flex items-center hover:text-emerald-400 rounded py-1 px-2 text_color text-base active:scale-110 cursor-pointer duration-500 bg_color text-white">
                <BsFillPlayFill /> <span>Play Tralier</span>
              </button>
            </Link>
          </div>
          {data?.production_companies?.map((com) => (
            <span
              key={com.id}
              className="bg_color rounded py-1 px-2 mr-2 text_color text-sm"
            >
              {com.name}
            </span>
          ))}
          <p className="mt-3 text-xl text-black">{data?.tagline}</p>
          <div className="my-3">
            <h2 className="text-2xl font-bold">Overview</h2>
            <p className="max-w-2xl text-base">{data?.overview}</p>
          </div>
          <Link to={data?.homepage}>
            <button className="bg-sky-400 text-black hover:text-white hover:bg-black lg:text-base md:text-sm px-5 py-2 duration-300 rounded mt-2 ">
              Watch now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default MovieDetails;
