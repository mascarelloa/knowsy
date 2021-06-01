import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
// import AuthButton from "../AuthButton";
import { UserContext } from "../../utils/UserContext";
import "./Navbar.css";
import { ImSearch } from "react-icons/im";
import { FaHome, FaPlus } from "react-icons/fa";

function Navbar() {

  const [user, dispatch] = useContext(UserContext);

  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = () => {
    if (open && width > 991) {
      setOpen(false);
    }
    setWidth(window.innerWidth)
  };

  // const toggleNav = () => {
  //   setOpen(!open);
  // };

  useEffect(() => {

    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    }
  }, [])

  return (
    <div>
      <div className="navbar">

        <div className="right">

          <Link to="/">
            <span>
              <FaHome className="icon" />
            </span>
            </Link>
          <Link to="/public">All Quizzes</Link>
          <Link to="/protected">Categories</Link>

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
