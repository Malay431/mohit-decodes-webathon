import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-blue-200/20">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <img
              src="./mdicon.jpg"
              className="rounded-md"
              alt="Mohit Decodes"
            />

            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
              Learn, build and grow with practical resources, courses, roadmaps and the latest tech updates.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Learn
            </h3>

            <div className="flex flex-col gap-3 text-sm">
              <Link
                to="/videos"
                className="transition-colors hover:text-indigo-400"
              >
                Videos
              </Link>
              <Link
                to="/courses"
                className="transition-colors hover:text-indigo-400"
              >
                Courses
              </Link>
              <Link
                to="/roadmaps"
                className="transition-colors hover:text-indigo-400"
              >
                Roadmaps
              </Link>
              <Link
                to="/blogs"
                className="transition-colors hover:text-indigo-400"
              >
                Blogs
              </Link>
            </div>
          </div>

          {/* Socials Media */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Socials
            </h3>

            <div className="flex flex-col gap-3 text-sm">
              <Link
                to="https://www.linkedin.com/in/mohitdecodes/"
                target='_blank'
                className="flex items-center gap-3 transition-colors hover:text-indigo-400"
              >
                <FaLinkedin className="text-lg" />
                LinkedIn
              </Link>
              <Link
                to="https://www.instagram.com/mohitdecodes/"
                target='_blank'
                className="flex items-center gap-3 transition-colors hover:text-pink-400"
              >
                <FaInstagram className="text-lg" />
                Instagram
              </Link>
              <Link
                to="https://github.com/mohitdjcet"
                target='_blank'
                className="flex items-center gap-3 transition-colors hover:text-white"
              >
                <FaGithub className="text-lg" />
                Github
              </Link>
              <Link
                to="https://youtube.com/@mohitdecodes"
                target='_blank'
                className="flex items-center gap-3 transition-colors hover:text-red-400"
              >
                <FaYoutube className="text-lg" />
                Youtube
              </Link>
            </div>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-lg font-bold text-white">
              Subscribe to Newsletter
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Get the latest updates, job postings, tech news and course
              discounts directly in your inbox.
            </p>

            <form className="mt-5 flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-lg border bg-slate-900 px-4 py-2.5 text-sm text-white outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              />

              <button
                type="submit"
                className="rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-500 active:scale-[0.98]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-slate-800 pt-6">
          <div className="flex flex-col items-center justify-center gap-3 text-sm text-slate-500 sm:flex-row">
            <p>© 2026 Mohit Decodes. All rights reserved.</p>
            <p>|</p>
            <p>
              Built with <span className="text-indigo-400">💝</span> for
              developers.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;