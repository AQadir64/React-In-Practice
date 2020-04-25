import React from "react";
import "../App.css";
import { Link, NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav className="menu" role="navigation">
      <ol>
        <li className="menu-item">
          <NavLink activeClassName={"menu-item-active"} to="/" exact>
            Home
          </NavLink>
        </li>
        <li className="menu-item">
          <Link to="/about">About</Link>
        </li>
        <li className="menu-item" aria-haspopup="true">
          <Link to="/props">Prop Viewer</Link>
          <ol className="sub-menu" aria-label="submenu">
            <li className="menu-item">
              <a href="#0">Big Widgets</a>
            </li>
            <li className="menu-item">
              <a href="#0">Bigger Widgets</a>
            </li>
            <li className="menu-item">
              <a href="#0">Huge Widgets</a>
            </li>
          </ol>
        </li>
        <li className="menu-item" aria-haspopup="true">
          <NavLink activeClassName={"menu-item-active"} to="/kabobs">
            Kabobs
          </NavLink>
          <ol className="sub-menu" aria-label="submenu">
            <li className="menu-item">
              <NavLink
                activeClassName={"menu-item-active"}
                to="/kabobs/Shishkabobs"
              >
                Shishkabobs
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                activeClassName={"menu-item-active"}
                to="/kabobs/BBQkabobs"
              >
                BBQ kabobs
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                activeClassName={"menu-item-active"}
                to="/kabobs/Summerkabobs"
              >
                Summer kabobs
              </NavLink>
            </li>
          </ol>
        </li>
        <li className="menu-item">
          <Link to="/color">Color</Link>
        </li>
        <li className="menu-item">
          <Link to="/signup">SignUp</Link>
        </li>
      </ol>
    </nav>
  );
}

export default Navbar;
