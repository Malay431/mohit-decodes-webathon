import React from "react";
import { MdArrowOutward, MdAccessTime, MdCode } from "react-icons/md";
import blogs from "../JSON Data/blogsData";

const Blogs = () => {
  const featuredBlog = blogs.find((blog) => blog.featured);
  const otherBlogs = blogs.filter((blog) => !blog.featured);

  return (
    <main className="min-h-screen bg-[#050505] px-5 pb-24 pt-28 text-white md:px-10 lg:px-20">
      {/* Header */}
      <section className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-2xl">
          <div className="mb-4 flex items-center gap-2 text-sm font-medium text-cyan-400">
            <MdCode size={20} />
            <span>DEVELOPER BLOG</span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Learn. Build . Level Up
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-zinc-400 md:text-lg">
            Practical articles about React, JavaScript, backend development, and
            everything you need to become a better developer.
          </p>
        </div>

        {/* Latest Articles */}
        <div className="mb-6 flex items-end justify-between">
          <div>
            <p className="text-sm font-medium text-zinc-500">MORE ARTICLES</p>
            <h2 className="mt-1 text-2xl font-bold md:text-3xl">
              Latest from the blog
            </h2>
          </div>

          <span className="hidden text-sm text-zinc-500 md:block">
            {otherBlogs.length} articles
          </span>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {otherBlogs.map((blog) => (
            <article
              key={blog.id}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${blog.gradient} bg-zinc-950 transition-all duration-300 hover:-translate-y-1 hover:border-white/20`}
            >
              {/* Fake thumbnail */}
              <div className="relative h-48 overflow-hidden border-b border-white/5 bg-[#090909]">
                <div className="absolute inset-0 opacity-50">
                  <div className="absolute left-10 top-8 h-24 w-24 rounded-full bg-white/[0.03] blur-2xl" />
                  <div className="absolute bottom-0 right-10 h-20 w-20 rounded-full bg-white/[0.04] blur-2xl" />
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-mono text-5xl font-bold text-white/[0.06]">
                    {"< />"}
                  </span>
                </div>

                <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-xs text-zinc-300 backdrop-blur-md">
                  {blog.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-3 flex items-center gap-2 text-xs text-zinc-600">
                  <span>{blog.date}</span>
                  <span>•</span>
                  <span>{blog.readTime}</span>
                </div>

                <h3 className="text-xl font-semibold leading-snug transition-colors group-hover:text-cyan-300">
                  {blog.title}
                </h3>

                <p className="mt-3 line-clamp-3 text-sm leading-6 text-zinc-500">
                  {blog.description}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm font-medium text-zinc-400">
                    Read article
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition-all group-hover:border-white/30 group-hover:bg-white group-hover:text-black">
                    <MdArrowOutward size={17} />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Blogs;
