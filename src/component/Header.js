import React from "react";
import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import { MdMovie } from "react-icons/md";
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="text-3xl text-white font-extrabold leading-relaxed tracking-wide ">
            <Link to="/trending">
              Watchlist <MdMovie size={20} />
            </Link>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/Trending">Trendings</Link>
            </li>
            <li>
              <Link to="/Watchlist">Watch List</Link>
            </li>
            <li>
              <Link to="/Favourite">Favourite</Link>
            </li>
            <li>
              <Link to="/Watched">Watched</Link>
            </li>
            <li>
              <Link to="/add">
                <BiSearchAlt size={25} className="searchicon" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
