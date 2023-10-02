import React from "react";
import { useGetSearchMovieQuery } from "../../app/moviApi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Pages({ title }) {
  const data = useGetSearchMovieQuery(title);
  return (
    <div className="text_color grid w-11/12 m-auto pb-10 bg_color items-center mt-10 justify-center grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xsm:grid-cols-1 gap-10">
      {data.data?.results &&
        data.data?.results?.map((searchMovies) => (
          <Link
            to={`/search/${searchMovies.title}/details/${searchMovies.id}`}
            key={searchMovies.id}
          >
            <motion.div
              initial={{ y: "100vh" }}
              animate={{ y: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
              key={searchMovies.id}
              className=" hover:brightness-75 cursor-pointer"
            >
              {" "}
              <div>
                {" "}
                <img
                  className="w-[30vh] h-auto object-cover rounded-t-lg "
                  src={`https://image.tmdb.org/t/p/original/${searchMovies.poster_path}`}
                  alt=""
                />
              </div>
              <div className="bg-[#27272a] max-w-[30vh] p-5 hover:text-white/60 duration-200 rounded-b-lg">
                <h1>{searchMovies.title}</h1>
                <p>Date - {searchMovies.release_date}</p>
              </div>
            </motion.div>
          </Link>
        ))}
    </div>
  );
}

export default Pages;
