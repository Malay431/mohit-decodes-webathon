import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdLightMode, MdMenu } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Courses", path: "/courses" },
  { name: "Blogs", path: "/blogs" },
  { name: "Roadmaps", path: "/roadmaps" },
  { name: "Resources", path: "/resources" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Contact", path: "/contact" },
  { name: "About", path: "/about" },
];

const Navbar = () => {
  const [mode, setMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden md:flex lg:flex border sticky top-4 z-50  border-white/10 shadow-[0_0_30px_rgba(59,130,246,0.35)] backdrop-blur-xl items-center justify-between px-10 py-4 rounded-2xl mx-5">
        <div className="font-mono text-2xl">
          <Link to="/">
            Mohit <span className="text-blue-400">Decodes</span>
          </Link>
        </div>
        <div className="flex gap-5">
          {
            navLinks.map((item, index)=>{
              return(
                <Link key={index} to={item.path} className='hover:text-blue-600 hover:underline underline-offset-6 duration-500'>
                {item.name}
                </Link>
              )
            })
          }
        </div>
        <div className="flex gap-4">
          <Link
            target="_blank"
            to="https://topmate.io/mohitdecodes"
            className="border px-4 py-1 rounded-md border-orange-400 bg-amber-500/20 font-medium "
          >
            1:1 Mentorship
          </Link>
          <button
            className="text-2xl cursor-pointer"
            onClick={() => setMode(!mode)}
          >
            {mode ? <MdLightMode /> : <MdDarkMode />}
          </button>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="flex items-center justify-between md:hidden lg:hidden mt-5 mx-2">
        <div className="font-mono text-2xl">
          <h1>
            Mohit <span className="text-blue-400">Decodes</span>
          </h1>
        </div>
        <div className="text-3xl">
          <MdMenu onClick={() => setMenuOpen(!menuOpen)} />
        </div>
      </div>
      {menuOpen && (
        <div className="absolute md:hidden lg:hidden top-0 z-50 h-full backdrop-blur-xl bg-white/10 w-[80%] border-white/10">
          Hello
        </div>
      )}
    </>
  );
};

export default Navbar;
