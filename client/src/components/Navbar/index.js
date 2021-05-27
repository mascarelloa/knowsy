import React from "react";
import "./style.css";
import { ImSearch } from 'react-icons/im';
import { FaHome } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="left-nav">
          
            
        <a href=""><span><FaHome /></span></a>
          <a href="">Browse</a>
          <a href="">Create</a>

          <form>
              <input type="text" placeholder="Find a quiz..." name="search" />
              <button type="submit">
              <ImSearch />
              </button>
            </form>


        </div>
        <div className="right-nav">
          <a href="#">Login</a>
          <button>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
