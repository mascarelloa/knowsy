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
          <Link to="/allquizzes">All Quizzes</Link>
          
          <div className="dropdown">
          <Link className="dropbtn" to="/">All Categories</Link>
          
          <div class="dropdown-content">
    {/* Currently all of the Links below are hardcoded based on the image name. */}
    {/* Not sure how to make them dynamic but they work for now. */}    
    <Link to="/categories/math">Math</Link>
    <Link to="/categories/science">Science</Link>
    <Link to="/categories/geography">Geography</Link>
    <Link to="/categories/history">History</Link>
    <Link to="/categories/entertainment">Entertainment</Link>
    <Link to="/categories/sports">Sports</Link>
    <Link to="/categories/fun">Just for Fun</Link>
  
  
          </div>
        </div>
       <Link to="/create" id="create">
            Create <FaPlus className="plus" />
          </Link>
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
