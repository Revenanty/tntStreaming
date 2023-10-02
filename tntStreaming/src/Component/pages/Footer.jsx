import React from "react";
import footer from "../assets/footer.png";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import {
  BiLogoTwitter,
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoYoutube,
} from "react-icons/bi";

function Footer() {
  return (
    <>
      <section className="bg_color text_color w-full h-auto p-10 md:textce">
        <div className="flex md:flex-col sm:flex-col justify-between sm:gap-y-5">
          <div className="grid grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-x-16 md:gap-y-5 sm:gap-y-5">
            <div>
              <img src={footer} className="w-32" alt="" />
            </div>
            <ul>
              <li className="text-lg font-bold">Programs</li>
              <li className="hover:text-red-500 duration-300 cursor-pointer">
                YC Program
              </li>
              <li className="hover:text-red-500 duration-300 cursor-pointer">
                Startup
              </li>
              <li className="hover:text-red-500 duration-300 cursor-pointer">
                Work at a Startup
              </li>
              <li className="hover:text-red-500 duration-300 cursor-pointer">
                Co-Fouonder Matching
              </li>
            </ul>
            <ul>
              <li className="text-lg font-bold">Company</li>
              <li className="hover:text-red-500 duration-300 cursor-pointer">
                YC blog
              </li>
              <li className="hover:text-red-500 duration-300 cursor-pointer">
                Press
              </li>
              <li className="hover:text-red-500 duration-300 cursor-pointer">
                People
              </li>
              <li className="hover:text-red-500 duration-300 cursor-pointer">
                Careers
              </li>
              <li className="hover:text-red-500 duration-300 cursor-pointer">
                Pricacy Policy
              </li>
              <li className="hover:text-red-500 duration-300 cursor-pointer">
                Security
              </li>
              <li className="hover:text-red-500 duration-300 cursor-pointer">
                Trems of Use
              </li>
            </ul>
            <ul>
              <li className="text-lg font-bold">Resources</li>
              <li className="hover:text-red-500 duration-300 cursor-pointer">
                Startup Directory
              </li>
              <li className="hover:text-red-500 duration-300 cursor-pointer">
                Startup Libary
              </li>
              <li className="hover:text-red-500 duration-300 cursor-pointer">
                Investores
              </li>
              <li className="hover:text-red-500 duration-300 cursor-pointer">
                Safe
              </li>
              <li className="hover:text-red-500 duration-300 cursor-pointer">
                Hacker News
              </li>
              <li className="hover:text-red-500 duration-300 cursor-pointer">
                Launch YC
              </li>
              <li className="hover:text-red-500 duration-300 cursor-pointer">
                YC Deals
              </li>
            </ul>
          </div>
          <div>
            <h1>Show what people want to watch</h1>
          </div>
        </div>
        <div className="flex md:flex-col md:gap-y-5 sm:gap-y-5 items-center justify-between mt-5">
          <div className="flex items-center">
            <AiOutlineCopyrightCircle size={20} />
            2023 Combinator
          </div>
          <div className="flex gap-x-5">
            <BiLogoTwitter size={20} />
            <BiLogoFacebook size={20} />
            <BiLogoInstagram size={20} />
            <BiLogoLinkedin size={20} />
            <BiLogoYoutube size={20} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
