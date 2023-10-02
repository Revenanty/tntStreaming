import React from "react";
import Trending from "../tvshow/Trendingtv";
import PopularTv from "../tvshow/PopularTv";
import TopratedTv from "../tvshow/TopratedTv";
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

function Tvshow() {
  return (
    <>
      <motion.body
        variants={containerVar}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Trending></Trending>
        <PopularTv></PopularTv>
        <TopratedTv></TopratedTv>
      </motion.body>
    </>
  );
}

export default Tvshow;
