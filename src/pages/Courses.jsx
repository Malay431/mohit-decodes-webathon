import React from "react";
import { Link } from "react-router-dom";

const mentorshipList = [
  {
    key: 1,
    img: "/md_package1.png",
    title: "3 Months Mentorship [Full Prep]",
    desc: "A dedicated 3-month mentorship program with 4 focused sessions. We’ll follow a fixed agenda designed around your goals and reviewed together to provide clear guidance, build confidence, and bring clarity to your career path.",
    link: "https://topmate.io/mohitdecodes/2101002?utm_source=public_profile&utm_campaign=mohitdecodes",
  },
  {
    key: 2,
    img: "/md_package2.png",
    title: "MERN Course Interview Preparation Handbook",
    desc: "This handbook is designed for freshers, and developers preparing for Frontend, Backend, or Full Stack Developer interviews. Instead of searching through hundreds of websites, you'll get everything organized in one place.",
    link: "https://topmate.io/mohitdecodes/2225780?utm_source=public_profile&utm_campaign=mohitdecodes",
  },
  {
    key: 3,
    img: "md_package3.png",
    title: "MEAN Course Interview Preparation Handbook",
    desc: "This handbook is specially designed for students, freshers, and experienced developers preparing for Frontend, Backend, or Full Stack Developer interviews using the MEAN Stack.",
    link: "https://topmate.io/mohitdecodes/2225792?utm_source=public_profile&utm_campaign=mohitdecodes",
  },
];

const Courses = () => {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8">
      {/* Mentorship Section */}
      <div className="mx-20 max-w-7xl">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">
            Mentorship Courses
          </h2>
          <p className="mt-2 text-gray-400 sm:text-lg">
            Get personalized guidance, structured preparation, and actionable
            advice to help you move forward with confidence.
          </p>
        </div>

        {/* Mentorship Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {mentorshipList.map((list) => (
            <Link
              key={list.key}
              to={list.link}
              target="_blank"
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
            >
              {/* Image */}
              <div className="overflow-hidden bg-gray-100">
                <img
                  src={list.img}
                  alt={list.title}
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col p-6">
                <h3 className="text-xl font-bold text-gray-900">
                  {list.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-6 text-gray-600">
                  {list.desc}
                </p>

                <div
                  href={list.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-blue-600"
                >
                  Get Full Details
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Free Courses Section */}
      <div className="mx-20 max-w-7xl mt-20">
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-gray-300 sm:text-4xl">
            Free Courses
          </h1>
          <p className="mt-2 text-gray-400 sm:text-lg">
            Detailed and Structured courses help you learn from basics to
            advance topics.
          </p>
        </div>
          {/* Courses Cards */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {mentorshipList.map((list) => (
              <Link
                key={list.key}
                to={list.link}
                target="_blank"
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
              >
                {/* Image */}
                <div className="overflow-hidden bg-gray-100">
                  <img
                    src={list.img}
                    alt={list.title}
                    className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col p-6">
                  <h3 className="text-xl font-bold text-gray-900">
                    {list.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-gray-600">
                    {list.desc}
                  </p>

                  <div
                    href={list.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-blue-600"
                  >
                    Get Full Details
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
    </section>
  );
};

export default Courses;
