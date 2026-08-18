import React from "react";
import {
  MdArrowForward,
  MdCheck,
  MdCode,
  MdPlayArrow,
} from "react-icons/md";
import { Link } from "react-router-dom";

const mernRoadmap = [
  {
    number: "01",
    title: "Web Fundamentals",
    topics: ["HTML5", "CSS3", "Responsive Design", "Git & GitHub"],
    link:'https://youtu.be/Zb_-6SttO3M?si=EcweYOq9UQWyY59y'
  },
  {
    number: "02",
    title: "JavaScript",
    topics: ["ES6+", "DOM", "Promises", "Async/Await", "Fetch API"],
    link:'https://youtu.be/moRFcW7xayc?si=X0LeQstqJMupGE_E'
  },
  {
    number: "03",
    title: "React.js",
    topics: ["Components", "Props", "State", "Hooks", "React Router"],
    link:'https://youtu.be/cHIn7PUAxlg?si=wN_7GWWLiidnrakd'
  },
  {
    number: "04",
    title: "Node.js",
    topics: ["Node Fundamentals", "npm", "Modules", "Events", "Streams"],
    link:'https://youtu.be/pdk60AyhMNM?si=npY59ZNXpCCHfJlA'
  },
  {
    number: "05",
    title: "Express.js",
    topics: ["Routing", "Middleware", "REST APIs", "Controllers"],
    
  },
  {
    number: "06",
    title: "MongoDB",
    topics: ["CRUD", "Queries", "Aggregation", "Indexes", "Atlas"],
  },
  {
    number: "08",
    title: "Deployment",
    topics: ["Docker", "Nginx", "SSL", "CI/CD", "Cloud Deployment"],
  },
  
];

const meanRoadmap = [
  {
    number: "01",
    title: "Web Fundamentals",
    topics: ["HTML5", "CSS3", "Responsive Design", "Git & GitHub"],
  },
  {
    number: "02",
    title: "JavaScript",
    topics: ["ES6+", "DOM", "Promises", "Async/Await", "Fetch API"],
  },
  {
    number: "03",
    title: "TypeScript",
    topics: ["Types", "Interfaces", "Generics", "Classes", "Utility Types"],
  },
  {
    number: "04",
    title: "Angular",
    topics: ["Components", "Services", "Routing", "Forms", "RxJS"],
  },
  {
    number: "05",
    title: "Node.js",
    topics: ["Node Fundamentals", "npm", "Modules", "Events", "Async"],
  },
  {
    number: "06",
    title: "Express.js",
    topics: ["Routing", "Middleware", "REST APIs", "Authentication"],
  },
  {
    number: "07",
    title: "MongoDB",
    topics: ["CRUD", "Queries", "Aggregation", "Indexes", "Atlas"],
  },
];

const RoadmapSection = ({
  title,
  description,
  technologies,
  roadmap,
  accent = "cyan",
  link
}) => {
  return (
    <section className="mt-20">
      {/* Section Header */}
      <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div
              className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                accent === "cyan"
                  ? "bg-cyan-400/10 text-cyan-400"
                  : "bg-purple-400/10 text-purple-400"
              }`}
            >
              <MdCode size={23} />
            </div>

            <span className="text-xs font-semibold tracking-[0.2em] text-zinc-600">
              FULL STACK ROADMAP
            </span>
          </div>

          <h2 className="text-3xl font-bold md:text-4xl">
            {title}
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-500">
            {description}
          </p>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-400"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>

      {/* Roadmap */}
      <div className="relative">
        {/* Desktop connecting line */}
        <div className="absolute left-6 top-7 hidden h-[calc(100%-56px)] w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent md:block" />

        <div className="space-y-4">
          {roadmap.map((item, index) => (
            <div
              key={item.number}
              className="group relative flex gap-5"
            >
              {/* Number */}
              <div className="relative z-10 hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#050505] text-xs font-bold text-zinc-500 transition-all group-hover:border-white/30 group-hover:text-white md:flex">
                {item.number}
              </div>

              {/* Card */}
              <div className="w-full rounded-2xl border border-white/10 bg-zinc-950 p-5 transition-all duration-300 hover:border-white/20 hover:bg-zinc-900/60 md:p-6">
                <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-start gap-4">
                    {/* Mobile number */}
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.04] text-xs font-bold text-zinc-500 md:hidden">
                      {item.number}
                    </span>

                    <div>
                      <p
                        className={`text-xs font-medium ${
                          accent === "cyan"
                            ? "text-cyan-400"
                            : "text-purple-400"
                        }`}
                      >
                        STEP {item.number}
                      </p>

                      <h3 className="mt-1 text-lg font-semibold md:text-xl">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 md:max-w-[55%] md:justify-end">
                    {item.topics.map((topic) => (
                      <span
                        key={topic}
                        className="flex items-center gap-1.5 rounded-lg bg-white/[0.03] px-2.5 py-1.5 text-xs text-zinc-500"
                      >
                        <MdCheck
                          size={14}
                          className={
                            accent === "cyan"
                              ? "text-cyan-400"
                              : "text-purple-400"
                          }
                        />

                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-5 flex justify-end">
        <Link to={link} target='_blank'
          className={`flex items-center gap-2 text-sm font-medium transition-colors ${
            accent === "cyan"
              ? "text-cyan-400 hover:text-cyan-300"
              : "text-purple-400 hover:text-purple-300"
          }`}
        >
          Explore {title} Courses
          <MdArrowForward size={18} />
        </Link>
      </div>
    </section>
  );
};

const Roadmaps = () => {
  return (
    <main className="min-h-screen bg-[#050505] px-5 pb-24 pt-28 text-white md:px-10 lg:px-20">
      <div className="mx-auto max-w-6xl">

        {/* HERO */}
        <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950 px-6 py-16 md:px-12 md:py-20">
          {/* Glow */}
          <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full bg-cyan-400/10 blur-[120px]" />

          <div className="relative max-w-3xl">
            <div className="mb-5 flex items-center gap-2 text-xs font-medium tracking-widest text-cyan-400">
              <MdCode size={18} />
              DEVELOPER ROADMAPS
            </div>

            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              Learn the stack.
              <span className="block text-zinc-500">
                Build the future.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-500 md:text-base">
              Structured learning paths to help you go from the fundamentals
              to building production-ready full-stack applications.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-400">
                Beginner friendly
              </span>

              <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-400">
                Project based
              </span>

              <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-400">
                Industry focused
              </span>
            </div>
          </div>
        </section>

        {/* MERN */}
        <RoadmapSection
          title="MERN Stack"
          description="Master MongoDB, Express, React and Node.js to build modern full-stack JavaScript applications."
          technologies={["MongoDB", "Express", "React", "Node.js"]}
          roadmap={mernRoadmap}
          accent="cyan"
          link='https://www.youtube.com/playlist?list=PLRZ6VeEliFnI'
        />

        {/* Divider */}
        <div className="mt-24 border-t border-white/5" />

        {/* MEAN */}
        <RoadmapSection
          title="MEAN Stack"
          description="Learn Angular with MongoDB, Express and Node.js to build scalable full-stack applications."
          technologies={["MongoDB", "Express", "Angular", "Node.js"]}
          roadmap={meanRoadmap}
          accent="purple"
          link='https://www.youtube.com/playlist?list=PLYkAWD7juJ4g'
        />

        {/* Bottom CTA */}
        <section className="mt-24 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-8 text-center md:p-12">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white text-black">
            <MdPlayArrow size={25} />
          </div>

          <h2 className="mt-5 text-2xl font-bold md:text-3xl">
            Ready to start learning?
          </h2>

          <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-zinc-500">
            Pick a roadmap, follow the lessons, and build projects along
            the way.
          </p>

          <Link to='/courses' className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200">
            Explore Courses
            <MdArrowForward size={18} />
          </Link>
        </section>
      </div>
    </main>
  );
};

export default Roadmaps;