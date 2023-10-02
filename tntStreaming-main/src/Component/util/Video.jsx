import React from "react";
import { useGetMovieVideoQuery } from "../../app/moviApi";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";

function Video() {
  const { id } = useParams();
  const { data } = useGetMovieVideoQuery(id);
  const options = {
    height: 290,
    width: 440,
  };

  return (
    <section className="bg_color w-full h-full">
      <h1 className="text_color text-center text-3xl font-bold">
        Every video about this movie
      </h1>
      <div className="grid movieContainer m-auto grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mt-5 text_color">
        {data?.results.map((video) => (
          <section
            key={video.id}
            className="bg-white text-black p-3 w-[60vh] lg:w-auto lg:h-auto rounded-lg"
          >
            <div className="grid items-center justify-items-center">
              <YouTube videoId={video.key} opts={options} className="" />

              <h1 className="text-lg mt-2 font-black">{video.name}</h1>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}

export default Video;
