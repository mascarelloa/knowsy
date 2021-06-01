import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../utils/UserContext";
import "./Header.css"
import logo from "../../logo2.png"

function Header() {

    const [user, dispatch] = useContext(UserContext);

    const [open, setOpen] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
  
    const updateWidth = () => {
      if (open && width > 991) {
        setOpen(false);
      }
      setWidth(window.innerWidth)
    };
  
    useEffect(() => {
  
      window.addEventListener("resize", updateWidth);
  
      return () => {
        window.removeEventListener("resize", updateWidth);
      }
    }, [])

    return (
        <div>
            <div className="header">
                <div className="logo">
                    <img src={logo}/>

                </div>

                <div className="user">
          <Link to="/login">Login</Link>
          <Link to="/register">Sign Up</Link>
        </div>
            </div>
        </div>
    )
}

export default Header
