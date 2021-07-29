import React from 'react'
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar">
            <h1>UC-CITCS Cloud</h1>
          <div className="links">

            <Link to="/">Home</Link>
            <Link to="/create">Create new blog</Link>

          </div>
        </nav>
    )
}

export default NavBar
