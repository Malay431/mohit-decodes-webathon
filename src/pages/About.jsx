import React from "react";
import { BiStar } from "react-icons/bi";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FiUsers, FiExternalLink } from "react-icons/fi";
import { MdAnalytics } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const About = () => {
  return (
    <section className="min-h-screen  px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Main Card */}
        <div className="overflow-hidden rounded-3xl bg-gray-100 shadow-[0_10px_30px_rgba(59,130,246,0.35)]">
          <div className="grid md:grid-cols-2">
            {/* Profile */}
            <div className="flex flex-col items-center justify-center bg-slate-950 px-8 py-12 text-center text-white">
              <div className="relative">
                <div className="h-36 w-36 overflow-hidden rounded-full border-4 border-white/20 shadow-xl">
                  <img
                    src="https://topmate.io/cdn-cgi/image/width=640,quality=90/https://static.topmate.io/4j9nPPyEZPuyV1RDBgrWGz.JPG"
                    alt="Mohit Kumar"
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className="absolute bottom-2 right-1 h-5 w-5 rounded-full border-4 border-slate-950 bg-green-400" />
              </div>

              <h2 className="mt-6 text-2xl font-bold">Mohit Kumar</h2>

              <p className="mt-2 max-w-xs text-sm leading-6 text-slate-400">
                Engineering Manager at{" "}
                <span className="font-semibold text-white">Paytm</span>
                <br />
                13+ Years of Industry Experience
              </p>

              <div className="grid grid-cols-3 gap-3">
                <a
                  href="https://www.youtube.com/@MohitDecodes"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700"
                >
                  <FaYoutube className="text-lg" />
                  YouTube
                  <FiExternalLink />
                </a>
                <a
                  href="https://www.linkedin.com/in/mohitdecodes/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  <FaLinkedin className="text-lg" />
                  LinkedIn
                  <FiExternalLink />
                </a>
                <a
                  href="https://www.instagram.com/mohitdecodes/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-white/40"
                >
                  <FaInstagram className="text-lg" />
                  Instagram
                  <FiExternalLink />
                </a>
              </div>
            </div>

            {/* Content */}
            <div className="p-7 sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                Mohit Decodes
              </p>

              <h3 className="mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
                Making complex coding concepts simple.
              </h3>

              <p className="mt-5 text-base leading-7 text-slate-600">
                Mohit Decodes is my way of teaching coding in a simple and fast
                way. I share the coding tricks and techniques that took me years
                to learn, but in a way that saves you time.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Tutorials are short, clear, and focused on practical examples.
                You’ll get quick demos along with the resources you need to
                apply what you learn.
              </p>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                    <FiUsers className="text-xl" />
                  </div>

                  <h4 className="text-2xl font-bold text-slate-900">800+</h4>
                  <p className="mt-1 text-sm text-slate-500">
                    Students Mentored
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-500">
                    <BiStar className="text-2xl" />
                  </div>

                  <div className="flex items-center gap-1">
                    <h4 className="text-2xl font-bold text-slate-900">4.5</h4>
                  </div>

                  <p className="mt-1 text-sm text-slate-500">Topmate Rating</p>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-4 border-t border-slate-100 pt-7 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-semibold text-slate-900">My Mentorship</p>
                  <p className="mt-1 text-sm text-slate-500">
                    Find Courses and resources on Mohit Decodes Topmate.
                  </p>
                </div>
                <a
                  href="https://topmate.io/mohitdecodes"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
                >
                  Mentorship
                  <FiExternalLink />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
