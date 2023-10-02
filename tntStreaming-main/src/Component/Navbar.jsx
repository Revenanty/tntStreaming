import React, { useState, useEffect } from "react";
import profile from "./assets/profile.jpg";
import { NavLink, Link } from "react-router-dom";
import { RaceBy } from "@uiball/loaders";
import { RxCross2 } from "react-icons/rx";

function Navbar() {
  const [open, setOpen] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className={`bg_color sticky top-0 z-50`}>
        <section className="text_color movieContainer m-auto p-5">
          <div className="flex items-center justify-between ">
            <div className="flex items-center">
              <h1 className="text-5xl lg:text-4xl md:text-3xl sm:text-2xl xsm:text-2xl font-bold">
                Streaming <span className="text-red-600">TNT</span>
              </h1>
              <ul className="flex md:hidden sm:hidden items-center justify-center">
                <NavLink
                  to={"/"}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-2xl lg:text-base sm:text-sm ml-8 text-orange-400 scale-105 cursor-pointer "
                      : "text-2xl lg:text-base sm:text-sm ml-8  cursor-pointer "
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to={"/search"}
                  className={({ isActive, isPending }) =>
                    isPending ? (
                      <RaceBy
                        size={80}
                        lineWeight={5}
                        speed={1.4}
                        color="black"
                      />
                    ) : isActive ? (
                      "text-2xl lg:text-base sm:text-sm ml-8 text-orange-400 scale-105 cursor-pointer "
                    ) : (
                      "text-2xl lg:text-base sm:text-sm ml-8  cursor-pointer "
                    )
                  }
                >
                  Search
                </NavLink>
                <NavLink
                  to={"/movie"}
                  className={({ isActive, isPending }) =>
                    isPending ? (
                      <RaceBy
                        size={80}
                        lineWeight={5}
                        speed={1.4}
                        color="black"
                      />
                    ) : isActive ? (
                      "text-2xl lg:text-base sm:text-sm ml-8 text-orange-400 scale-105 cursor-pointer "
                    ) : (
                      "text-2xl lg:text-base sm:text-sm ml-8  cursor-pointer "
                    )
                  }
                >
                  Movie
                </NavLink>
                <NavLink
                  to={"/tvshow"}
                  className={({ isActive, isPending }) =>
                    isPending ? (
                      <RaceBy
                        size={80}
                        lineWeight={5}
                        speed={1.4}
                        color="black"
                      />
                    ) : isActive ? (
                      "text-2xl lg:text-base sm:text-sm ml-8 text-orange-400 scale-105 cursor-pointer "
                    ) : (
                      "text-2xl lg:text-base sm:text-sm ml-8  cursor-pointer "
                    )
                  }
                >
                  TV shows
                </NavLink>
              </ul>
            </div>
            <div>
              <div className="relative inline-block text-left md:hidden sm:hidden">
                {" "}
                <p className="text-xs text-center text-gray-500">
                  Login / Singup
                </p>
                <button
                  type="button"
                  className="flex justify-center items-center px-4 py-1 text-sm font-medium  focus:outline-none "
                  onClick={toggleDropdown}
                >
                  <h3> My account</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-5 h-5 ml-2 transition-transform duration-200 transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {isOpen && (
                  <div className="origin-top-right absolute right-0 p-5 mt-2 max-w-5xl duration-300 rounded-md shadow-lg bg-gray-900 ring-1 ring-black ring-opacity-5">
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <a
                        href="#"
                        className="  min-h-[40rem] text-sm text-orange-500"
                        role="menuitem"
                      >
                        <h1 className="text-xl font-bold text-center">
                          {" "}
                          Login to my acoount
                        </h1>
                        <p className="text-sm text-center">
                          Enter your e-mail and password
                        </p>
                        <div className="flex flex-col items-center">
                          {" "}
                          <input
                            className="w-[250px] p-2 focus:outline-none my-3 text-black"
                            placeholder="E-mail"
                            type="email"
                          />
                          <input
                            type="password"
                            className="w-[250px] p-2 text-black focus:outline-none"
                            placeholder="Password"
                          />
                          <button className="w-[250px] p-2 focus:outline-none my-3 bg-black text-white hover:bg-orange-600 hover:text-black duration-500">
                            Login
                          </button>
                        </div>
                        <p className="text-center text-xs text-white">
                          New customer?{" "}
                          <Link to={`/signup`}>
                            {" "}
                            <a href="/" className="text-orange-500 underline ">
                              Create your account
                            </a>
                          </Link>
                        </p>
                        <p className="text-center text-xs text-white my-2">
                          Lost password?{" "}
                          <Link>
                            {" "}
                            <a href="/" className="text-orange-500 underline ">
                              Recover password
                            </a>
                          </Link>
                        </p>
                      </a>
                    </div>
                  </div>
                )}
              </div>
              <div
                onClick={() => setOpen(!open)}
                className="relative cursor-pointer hidden md:inline sm:inline z-[200]"
              >
                <div
                  className={
                    !open
                      ? "w-12 sm:w-10 h-1 my-2 xsm:my-1 rounded bg-white duration-300"
                      : "w-12  sm:w-10  h-1 my-2 xsm:my-1 rounded bg-white translate-y-3  rotate-45 duration-300"
                  }
                ></div>
                <div
                  className={
                    !open
                      ? "w-12 sm:w-10 h-1 my-2 xsm:my-1 rounded bg-white duration-300"
                      : "w-12 sm:w-10 h-1 my-2 xsm:my-1 rounded bg-white opacity-0 duration-300"
                  }
                ></div>
                <div
                  className={
                    !open
                      ? "w-12  sm:w-10 h-1 my-2 xsm:my-1 rounded bg-white duration-300"
                      : "w-12 sm:w-10 h-1 my-2 xsm:my-1 rounded bg-white -rotate-45 -translate-y-3  duration-300"
                  }
                ></div>
              </div>
              <div
                className={
                  !open
                    ? "bg-black/50 w-full h-screen absolute top-0 left-0 z-50 transition-all ease-in-out duration-300"
                    : " hidden transition-all ease-in-out duration-300"
                }
              >
                <div
                  className={
                    !open
                      ? "bg-blue-950 w-[300px] absolute top-0 left-0 h-full transition-all ease-in-out duration-300"
                      : "  left-[-100%]  transition-all ease-in-out duration-300"
                  }
                >
                  <div className="mt-8">
                    <RxCross2
                      onClick={() => setOpen(!open)}
                      className="absolute top-3 right-3 bg-black rounded active:scale-105 cursor-pointer"
                      size={25}
                    />
                    <div className="flex flex-col items-center justify-items-center">
                      <img
                        src={profile}
                        className="rounded-full w-16 h-auto active:scale-105 cursor-pointer"
                        alt="profile"
                      />
                      <h3 className={`mr-3 text-2xl mt-2`}>Profile</h3>
                    </div>
                    <ul className="flex flex-col items-center justify-items-center gap-y-9 mt-2">
                      {" "}
                      <NavLink
                        to={"/"}
                        className={({ isActive, isPending }) =>
                          isPending
                            ? "pending"
                            : isActive
                            ? "text-2xl lg:text-base sm:text-sm ml-8 text-orange-400 scale-105 cursor-pointer "
                            : "text-2xl lg:text-base sm:text-sm ml-8  cursor-pointer "
                        }
                      >
                        Home
                      </NavLink>
                      <NavLink
                        to={"/search"}
                        className={({ isActive, isPending }) =>
                          isPending ? (
                            <RaceBy
                              size={80}
                              lineWeight={5}
                              speed={1.4}
                              color="black"
                            />
                          ) : isActive ? (
                            "text-2xl lg:text-base sm:text-sm ml-8 text-orange-400 scale-105 cursor-pointer "
                          ) : (
                            "text-2xl lg:text-base sm:text-sm ml-8  cursor-pointer "
                          )
                        }
                      >
                        Search
                      </NavLink>
                      <NavLink
                        to={"/movie"}
                        className={({ isActive, isPending }) =>
                          isPending ? (
                            <RaceBy
                              size={80}
                              lineWeight={5}
                              speed={1.4}
                              color="black"
                            />
                          ) : isActive ? (
                            "text-2xl lg:text-base sm:text-sm ml-8 text-orange-400 scale-105 cursor-pointer "
                          ) : (
                            "text-2xl lg:text-base sm:text-sm ml-8  cursor-pointer "
                          )
                        }
                      >
                        Movie
                      </NavLink>
                      <NavLink
                        to={"/tvshow"}
                        className={({ isActive, isPending }) =>
                          isPending ? (
                            <RaceBy
                              size={80}
                              lineWeight={5}
                              speed={1.4}
                              color="black"
                            />
                          ) : isActive ? (
                            "text-2xl lg:text-base sm:text-sm ml-8 text-orange-400 scale-105 cursor-pointer "
                          ) : (
                            "text-2xl lg:text-base sm:text-sm ml-8  cursor-pointer "
                          )
                        }
                      >
                        TV shows
                      </NavLink>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
    </>
  );
}

export default Navbar;
