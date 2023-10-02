import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Pages from "../util/Pages";
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

function Search() {
  const { title } = useParams();

  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const submit = (e) => {
    e.preventDefault();
    navigate(`/search/${search}`);
  };
  return (
    <>
      <motion.section
        variants={containerVar}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="bg_color h-full w-full"
      >
        <div className="flex items-center justify-center">
          <form onSubmit={submit}>
            <input
              onChange={(e) => setSearch(e.target.value)}
              disabled={!setSearch}
              className="mt-5 w-[600px] lg:w-[500px] md:w-[300px] sm:w-[300px] rounded h-12 p-5 focus:outline-none bg-[#14213d] placeholder:text-white placeholder:brightness-75 text-white"
              placeholder="Search Movie"
              type="text"
            />
          </form>
        </div>
        <div>
          <Pages title={title} page="search"></Pages>
        </div>
      </motion.section>
    </>
  );
}

export default Search;
