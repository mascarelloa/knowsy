import React from 'react'
import "./style.css"

const Header = () => {
    return (
        <div>
            <div className="header">
                <div class="logo">
                    <img src="https://tinyurl.com/jrhrwj6d"/>
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
