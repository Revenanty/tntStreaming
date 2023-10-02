import React from "react";
import Trending from "../movies/Trending";
import NowPlaying from "../movies/NowPlaying";
import Toprated from "../movies/Toprated";
import { motion } from "framer-motion";

const containerVar = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

function Movie() {
  return (
    <>
      <motion.body
        variants={containerVar}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Trending></Trending>
        <NowPlaying></NowPlaying>
        <Toprated></Toprated>
      </motion.body>
    </>
  );
}

export default Movie;
