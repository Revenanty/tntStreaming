import Navbar from "./Component/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Search from "./Component/pages/Search";
import Movie from "./Component/pages/Movie";
import Tvshow from "./Component/pages/Tvshow";
import Home from "./Component/pages/Home";
import MovieDetails from "./Component/util/MovieDetails";
import TvshowDetail from "./Component/util/TvshowDetail";
import Video from "./Component/util/Video";
import VideoTv from "./Component/util/VideoTv";
import Footer from "./Component/pages/Footer";

function App() {
  const location = useLocation();
  return (
    <>
      <Navbar></Navbar>
      <section>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.key}>
            <Route path="/" index element={<Home></Home>}></Route>

            <Route path="/search" element={<Search></Search>}></Route>
            <Route path="/search/:title" element={<Search></Search>}></Route>
            <Route
              path="/search/:title/details/:id"
              element={<MovieDetails></MovieDetails>}
            ></Route>
            <Route path="/movie" element={<Movie></Movie>}></Route>
            <Route
              path="/details/:id"
              element={<MovieDetails></MovieDetails>}
            ></Route>
            <Route path="video/:id" element={<Video></Video>}></Route>
            <Route path="/tvshow" element={<Tvshow></Tvshow>}></Route>
            <Route
              path="/tvshow/details/:id"
              element={<TvshowDetail></TvshowDetail>}
            ></Route>
            <Route path="videoTv/:id" element={<VideoTv></VideoTv>}></Route>
          </Routes>
        </AnimatePresence>
      </section>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}

export default App;
