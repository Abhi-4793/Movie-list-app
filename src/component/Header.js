import React, { useState } from "react";
import { Link } from "react-router-dom";

import { BiSearchAlt } from "react-icons/bi";
// import { useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { MdMovie } from "react-icons/md";

const Header = () => {
  let Links = [
    {
      name: "Trending",
      link: "/trending",
    },
    {
      name: "Watchlist",
      link: "/Watchlist",
    },
    {
      name: "Favourite",
      link: "/Favourite",
    },
    {
      name: "Watched",
      link: "/Watched",
    },
    {
      name: <BiSearchAlt size={25} className="searchicon" />,
      link: "/add",
    },
  ];
  const [clicklink, setClicklink] = useState(false);
  const [nav, setNav] = useState(false);

  const controlNav = () => {
    setNav(!nav);
  };
  return (
    <div className="shadow-xl w-full sticky top-0 left-0 z-10 ">
      <div className="md:flex bg-[#006a69] items-center justify-between py-4 md:px-8 px-6">
        <div className=" mx-2 font-bold text-2xl cursor-pointer flex items-center font-serif text-white">
          <Link to="/trending">
            <span>
              Watchlist <MdMovie size={20} />
            </span>
          </Link>
        </div>
        <div
          onClick={controlNav}
          className=" text-white text-3xl md:hidden absolute right-8 top-8 cursor-pointer"
        >
          {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#006a69] md:z-auto z-[10] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-300 ease-in ${
            nav ? "top-20" : "top-[-490px]"
          }
          `}
        >
          {Links.map((link) => (
            <li key={link.name} className=" md:ml-8 text-xl mx-1 md:my-0 my-7 ">
              <Link
                onClick={() => setClicklink(!clicklink)}
                className="text-white hover:text-white/60"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
