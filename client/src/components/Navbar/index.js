import React from "react";
import "./style.css";
import { ImSearch } from "react-icons/im";
import { FaHome, FaPlus } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">

        <div className="right">
        <a href="">
          <span>
            <FaHome className="icon" />
          </span>
        </a>
        <a href="">All Quizzes</a>
        <a href="">All Categories</a>

        <button id="create">
          Create <FaPlus className="plus" />
        </button>
</div>

        <form>
          <input type="text" placeholder="Find a quiz..." name="search" />
          <button class="icon" id="search" type="submit">
            <ImSearch />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Navbar;
