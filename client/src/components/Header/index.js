import React from 'react'
import "./style.css"
import logo from "../../logo2.png"

const Header = () => {
    return (
        <div>
            <div className="header">
                <div class="logo">
                    <img src={logo}/>
                </div>

                <div className="user">
          <a href="#">Login</a>
          <button>Sign Up</button>
        </div>
            </div>
        </div>
    )
}

export default Header
