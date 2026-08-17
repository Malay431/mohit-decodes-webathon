import React from "react";
import { Link } from "react-router-dom";

const course = [
  {
    img: "./mern.jpg",
    title: "MERN Stack Full Course",
    desc: "A structured learning path designed to help you become a professional Full Stack Developer from beginner to advanced. Learn with practical examples, hands-on coding, real-world projects, and interview-focused concepts.",
    views: "200K",
    videos: "9",
    link: "https://www.youtube.com/playlist?list=PLRZ6VeEliFnI",
  },
  {
    img: "./dsa.jpg",
    title: "DSA Complete Course",
    desc: "Learn Data Structures & Algorithms from scratch in this beginner-to-interview level course. Build strong DSA fundamentals with clear logic and a problem-solving mindset.",
    views: "500K",
    videos: "63",
    link: "https://www.youtube.com/playlist?list=PLsjpRo2EZP1LKQePmuWv8jppLddppmGkn",
  },
  {
    img: "./mean.jpg",
    title: "MEAN Stack Complete Course",
    desc: "Structured learning path designed to help you become a professional Full Stack Developer from beginner to advanced. Every tutorial is explained step by step with practical examples, hands-on coding, real-world projects, and interview-focused concepts.",
    views: "80K",
    videos: "24",
    link: "https://www.youtube.com/playlist?list=PLTXzNb1c0NSQ",
  },
];

const Courses = () => {
  return (
    <section className="min-h-screen bg-black px-5 py-12 md:px-10 lg:px-16">
      {/* Heading */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white md:text-4xl">
          Featured Courses
        </h1>

        <p className="mt-2 text-slate-400">
          Explore our most popular courses and start learning today.
        </p>
      </div>

      {/* Course Cards */}
      <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
        {course.map((cour, index) => (
          <Link
            to={cour.link}
            target="_blank"
            key={index}
            className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-lg transition duration-300 hover:border-slate-700 hover:shadow-2xl"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={cour.img}
                alt={cour.title}
                className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
              />

              {/* Video badge */}
              <div className="absolute bottom-3 right-3 rounded-lg bg-black/80 px-3 py-1 text-sm font-medium text-white">
                {cour.videos} Videos
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h2 className="mb-3 text-xl font-bold text-white transition group-hover:text-blue-400">
                {cour.title}
              </h2>

              <p className="mb-6 line-clamp-3 text-sm leading-6 text-slate-400">
                {cour.desc}
              </p>

              {/* Bottom */}
              <div className="flex items-center justify-between border-t border-slate-800 pt-4">
                <span className="text-sm text-slate-400">
                  👁 {cour.views} views
                </span>

                <Link
                  to={cour.link}
                  target="_blank"
                  className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-500"
                >
                  View Course
                </Link>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Courses;
