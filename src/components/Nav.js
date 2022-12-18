import React from "react";
import { NavLink } from "react-router-dom";
import { BsFillCartCheckFill } from "react-icons/bs";
function Nav() {
  return (
    <div>
      <nav class='navbar navbar-expand-lg bg-light'>
        <div class='collapse navbar-collapse' id='navbarNav'>
          <ul class='navbar-nav'>
            <li class='nav-item'>
              <NavLink to='/' style={{ marginLeft: "20px" }}>
                Home
              </NavLink>
            </li>
            <li class='nav-item'>
              <NavLink to='/about' style={{ marginLeft: "20px" }}>
                About
              </NavLink>
            </li>
            <li class='nav-item'>
              <NavLink to='/products' style={{ marginLeft: "20px" }}>
                Products
              </NavLink>
            </li>
            <li class='nav-item'>
              <NavLink to='/contact' style={{ marginLeft: "20px" }}>
                Contact
              </NavLink>
            </li>
            <li class='nav-item'>
              <NavLink to='/cart' style={{ marginLeft: "20px" }}>
                <BsFillCartCheckFill />
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
