import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-scroll";
import { SIDE_NAV_DATA } from "../data/data";
import { MdOutlineChangeCircle } from "react-icons/md";

const Navbar = ({background, setBackground}) => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div class="text-3xl font-bold animate-pulse">
        {
          "Saurav Semwal"?.split("")?.map((ch)=>{
            return (<span class="inline-block text-transparent bg-gradient-to-r from-[#00b8f5] to-[#00b888] bg-clip-text shadow-lg animate-gradient-x whitespace-pre-wrap">
              {ch}
            </span>)
          })
        }
      </div>

      <ul className="hidden md:flex md:w-[330px] md:gap-4 md:hover:cursor-pointer">
        <li className="hover:text-pink-500">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="hover:text-pink-500">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="hover:text-pink-500">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="hover:text-pink-500">
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="hover:text-pink-500">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <li>
        <MdOutlineChangeCircle size={30} className="rounded-full bg-[#012a72] cursor-pointer hover:text-pink-500"  onClick={()=>{setBackground((prev)=>!prev); console.log("clicked ",background, !background)}}>Change Background</MdOutlineChangeCircle>
        </li>
      </ul>

      <div onClick={handleClick} className="z-10 md:hidden">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      <div className="flex fixed md:flex-col md:top-[35%] top-[10%] left-3">
        <ul className="flex gap-2 md:flex-col">
          {
            SIDE_NAV_DATA?.map((ele)=>{
            return (
              <li className={`w-[140px] px-2 h-[40px] md:h-[60px] flex justify-between items-center md:ml-[-100px] hover:ml-[-10px] duration-300`} style={{backgroundColor:ele?.color}}>
                <a
                  className="flex items-center justify-between w-full font-bold text-gray-300"
                  href={ele?.link}
                  target="_blank"
                  re = "noreferrer"
                >
                  {ele?.title} {ele?.icon}
                </a>
              </li>
            )})
          }
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
