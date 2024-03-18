import React from 'react'
import { NavLink } from 'react-router-dom'
import Search from './Search';
import { FaShopify } from "react-icons/fa6";
import './Nav.css'

function Nav({ setQuery, cart, totalCount, totalprice }) {
  return (
    <nav>
      <span>
        <NavLink className="logo">E-Shop</NavLink>
      </span>
      <Search setQuery={setQuery} />
      <ul className="na">
        <NavLink className="menu" to={"/"}>
          Home
        </NavLink>

        <NavLink className="menu" to={"/Cart"}>
          <h1>
            <FaShopify />
          </h1>
        </NavLink>
        <NavLink
          className="notif"
          to={"/Cart"}
          style={{ height: "30%", width: "3vh" }}>
          <span>{totalCount}</span>
        </NavLink>
      </ul>
    </nav>
  );
}

export default Nav