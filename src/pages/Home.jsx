import React from "react";
import {
  MdArrowBack,
  MdArrowRight,
  MdArrowRightAlt,
  MdMale,
  MdVideocam,
} from "react-icons/md";
import { FaEye, FaGraduationCap, FaYoutube } from "react-icons/fa";
import { BiSolidVideos } from "react-icons/bi";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiPython,
  SiTypescript,
  SiNextdotjs,
  SiGit,
} from "react-icons/si";
import Courses from "../components/Courses";
import { Link } from "react-router-dom";
import CompanyScroll from '../components/CompanyScroll'

const Home = () => {
  return (
    <>
      {/* HERO SECTION */}
      <div className="hidden md:flex flex-row bg-[url('./bg-stars.jpg')] bg-cover  justify-between min-h-screen border-b border-slate-200/20">
        {/* Left Side */}
        <div className="flex ml-20 justify-center flex-col w-1/2">
          <div className="flex flex-col gap-4">
            <p className="flex items-center gap-2 text-blue-400 border  border-blue-400/20 rounded-xl px-2 py-1 w-fit  shadow-[0_0_20px_rgba(96,165,250,0.3)]">
              <span>LEARN</span>
              <span>•</span> 
              <span>BUILD</span> 
              <span>•</span> 
              <span>GROW</span>
            </p>
            <h1 className="text-7xl font-bold tracking-tight">
              MOHIT <span className="text-blue-400">DECODES</span>
            </h1>
            <div className="border w-1/3 border-blue-600"></div>
            <p className="text-lg leading-relaxed text-gray-400">
              Helping developers master skills, build real-world projects
              <br />
              and grow their careers.
            </p>
          </div>

          <div className="flex flex-row gap-10 mt-10">
            <Link
              to="/courses"
              className="border bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-[0_0_25px_rgba(59,130,246,0.25)] transition-all duration-300 px-10 py-2 rounded-lg flex items-center gap-2 border-white/20 hover:bg-blue-700 cursor-pointer"
            >
              Explore Courses <MdArrowRightAlt className="text-2xl" />
            </Link>
            <div className="border border-white/15 bg-white/5 hover:bg-white/10 transition-all duration-300 px-10 py-2 rounded-lg flex items-center gap-2 hover:bg-orange-700/20 cursor-pointer">
              Watch Videos <MdVideocam className="text-2xl" />
            </div>
          </div>

          <div className="flex flex-row gap-8 px-8 py-4 w-fit border border-white/10 shadow-[0px_0px_20px_rgba(96,165,250,0.5)] bg-slate-950/60 backdrop-blur-xl rounded-2xl  mt-20">
            <div className="flex flex-row items-center justify-center gap-3 ">
              <div>
                <FaYoutube className="text-3xl text-red-600" />
              </div>
              <div className="flex flex-col items-center">
                <h1 className="text-xl font-bold text-white">20K+</h1>
                <p className="text-sm text-gray-400">Subscribers</p>
              </div>
            </div>
            <div className="border h-full border-blue-400"></div>
            <div className="flex flex-row items-center justify-center gap-3 ">
              <div>
                <BiSolidVideos className="text-3xl text-fuchsia-400" />
              </div>
              <div className="flex flex-col items-center">
                <h1 className="text-xl font-bold text-white">1k+</h1>
                <p className="text-sm text-gray-400">Videos</p>
              </div>
            </div>
            <div className="border h-full border-blue-400"></div>
            <div className="flex flex-row items-center justify-center gap-3 ">
              <div>
                <FaGraduationCap className="text-3xl text-orange-400" />
              </div>
              <div className="flex flex-col items-center">
                <h1 className="text-xl font-bold text-white">30+</h1>
                <p className="text-sm text-gray-400">Courses</p>
              </div>
            </div>
            <div className="border h-full border-blue-400"></div>
            <div className="flex flex-row items-center justify-center gap-3 ">
              <div>
                <FaEye className="text-3xl text-blue-300" />
              </div>
              <div className="flex flex-col items-center">
                <h1 className="text-xl font-bold text-white">3M+</h1>
                <p className="text-sm text-gray-400">Views</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CompanyScroll/>

      {/* Courses Section */}
      <Courses />

    </>
  );
};

export default Home;
