import React from "react";
import anime1 from "../assets/anime1.png";
import anime2 from "../assets/anime2.jpg";
import anime3 from "../assets/anime3.webp";
import anime4 from "../assets/anime4.webp";
import anime5 from "../assets/anime5.jpg";
import anime6 from "../assets/anime6.jpg";
import anime7 from "../assets/anime7.jpg";
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

function Home() {
  return (
    <>
      <motion.section
        variants={containerVar}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="bg_color w-full h-full text_color"
      >
        <div className="flex items-center justify-evenly w-10/12 m-auto">
          <motion.div
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 120 }}
            className="lg:mt-12 md:mt-6 sm:mt-4"
          >
            <h1 className="text-5xl lg:text-4xl sm:text-2xl xsm:text-xl">
              Welcome from <span className="text-red-600">TNT</span> Streaming
            </h1>
            <p className="text-2xl lg:text-xl sm:text-lg xsm:text-xs leading-7 mt-5 max-w-4xl">
              TNT is a streaming service that provides you with the best quality
              of movies and series. TNT was launched two years ago and is the
              best streaming service in the world for all your streaming needs.
              We have a wide variety of movies and series. Famous movie like
              <span>The Godfather</span>, <span> The Shawshank Redemption</span>
              .Famous tv shows like
              <span>The Walking Dead</span>, <span>Breaking Bad</span> etc. Stay
              up to date with us, there are so much more to come.
            </p>
          </motion.div>

          <div>
            <img
              className="w-96 lg:w-auto md:hidden sm:hidden"
              src={anime1}
              alt=""
            />
          </div>
        </div>
        <div className="mt-5 relative">
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="flex items-center blurBack mb-5"
          >
            <div>
              <h1 className="text-2xl text-sky-300 mb-2">
                If you like Disney , we have{" "}
              </h1>
              <p className="leading-5 max-w-sm">
                Aladdin is a lovable street urchin who meets Princess Jasmine,
                the beautiful daughter of the sultan of Agrabah. While visiting
                her exotic palace, Aladdin stumbles upon a magic oil lamp
                that...
              </p>
            </div>
            <div>
              <img
                src={anime2}
                alt=""
                className="w-80 lg:w-auto md:hidden sm:hidden ml-9"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="flex items-center blurBack  mb-5 relative left-[54%]"
          >
            <div>
              <h1 className="text-2xl text-sky-300 mb-2 ">
                If you like Marvel , we have{" "}
              </h1>
              <p className="leading-5 max-w-sm">
                Adrift in space with no food or water, Tony Stark sends a
                message to Pepper Potts as his oxygen supply starts to dwindle.
                Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain
              </p>
            </div>
            <div>
              <img
                src={anime3}
                alt=""
                className="w-80 lg:w-auto md:hidden sm:hidden ml-9"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="flex items-center blurBack  mb-5"
          >
            <div>
              <h1 className="text-2xl text-sky-300 mb-2">
                If you like Romance , we have{" "}
              </h1>
              <p className="leading-5 max-w-sm">
                Nothing seems to go right for young Kate, a frustrated Londoner
                who works as an elf in a year-round Christmas shop. But things
                soon take a turn for the better when she meets Tom -- a
                handsome..
              </p>
            </div>
            <div>
              <img
                src={anime4}
                alt=""
                className="w-80 lg:w-auto md:hidden sm:hidden ml-9"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="flex items-center blurBack  mb-5  relative left-[54%]"
          >
            <div>
              <h1 className="text-2xl text-sky-300 mb-2 ">
                If you like Horror , we have{" "}
              </h1>
              <p className="leading-5 max-w-sm">
                Twenty-five years after a streak of brutal murders shocked the
                quiet town of Woodsboro, Calif., a new killer dons the Ghostface
                mask and begins targeting a group of teenagers to resurrect
                secrets from the town's deadly past.
              </p>
            </div>
            <div>
              <img
                src={anime5}
                alt=""
                className="w-80 lg:w-auto md:hidden sm:hidden ml-9"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="flex items-center blurBack mb-5"
          >
            <div>
              <h1 className="text-2xl text-sky-300 mb-2">
                If you like Action , we have{" "}
              </h1>
              <p className="leading-5 max-w-sm">
                Legendary assassin John Wick (Keanu Reeves) retired from his
                violent career after marrying the love of his life. Her sudden
                death leaves John in deep mourning. When sadistic mobster
                Iosef...
              </p>
            </div>
            <div>
              <img
                src={anime6}
                alt=""
                className="w-80 lg:w-auto md:hidden sm:hidden ml-9"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="flex items-center blurBack  relative left-[54%]"
          >
            <div>
              <h1 className="text-2xl text-sky-300 mb-2 ">
                If you like Star war , we have{" "}
              </h1>
              <p className="leading-5 max-w-sm">
                The Imperial Forces -- under orders from cruel Darth Vader
                (David Prowse) -- hold Princess Leia (Carrie Fisher) hostage, in
                their efforts to quell the rebellion against the Galactic
                Empire. Luke Skywalker (Mark Hamill) and Han Solo (Harrison
              </p>
            </div>
            <div>
              <img
                src={anime7}
                alt=""
                className="w-80 lg:w-auto md:hidden sm:hidden ml-9"
              />
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}

export default Home;
