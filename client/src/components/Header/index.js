import React, { useEffect, useState, useContext } from "react";
import { useHistory } from 'react-router-dom';
import Auth from "../../utils/Auth";
import { Link } from "react-router-dom";
import { UserContext } from "../../utils/UserContext";
import "./Header.css"
import logo from "../../logo2b.png"

function Header() {

  const [user, dispatch] = useContext(UserContext);
  const history = useHistory();

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
          <img src={logo} />

        </div>

        <div className="user">
          {
            Auth.isAuthenticated ? (
              <div>
                <Link to={"/profile/" + user.username}>My Dashboard</Link>
                <Link className="btn btn-danger"
                  onClick={() => {
                    Auth.signout(() => history.push('/login'))
                    dispatch({
                      type: "GET_USER",
                      payload: {}
                    })
                    window.location.reload();
                  }}>
                  Logout
              </Link>
              </div>
            ) : (
              <div>
                <Link to="/login">Login</Link>
                <Link to="/register">Sign Up</Link>
              </div>
            )
          }
          {/* <Link to="/login">Login</Link>
          <Link to="/register">Sign Up</Link> */}
        </div>
      </div>
    </div>
  )
}

export default Header
