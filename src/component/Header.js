import React from 'react'
import {Link} from 'react-router-dom';

const Header = () => {
  return (
  <header>
  <div className="container">
    <div className="inner-content">
      <div className="brand">
        <Link to="/watchlist">
          WatchList
        </Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/Watchlist">
              Watch List
            </Link>
          </li>
          <li>
            <Link to="/Favourite">
             Favourite
            </Link>
          </li>
          <li>
            <Link to="/Watched">
              Watched
            </Link>
          </li>
          <li>
            <Link to="/add" className='btn'>
              +Add
            </Link>
          </li>
        
        
        </ul>

    </div>
  </div>
  </header>
    
  )
}

export default Header;