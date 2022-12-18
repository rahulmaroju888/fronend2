import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "./Nav";

function Header() {
  return (
    <>
      <NavLink to='/'>
        <img src='./images/store.png' alt='my logo ing' />
      </NavLink>
      <Nav />
    </>
  );
}

export default Header;
