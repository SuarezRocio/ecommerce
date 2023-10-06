import React from "react";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import "./Nav.css";

function Nav({ query, handleInputChange , handleSearch}) {
  return (
    <nav>
      <div className="nav-container">
        <input
          type="text"
          className="search-input"
          placeholder="Enter your search"
          value={query}
          onChange={handleInputChange}
        />
        {/* Add a button for search */}
        <button className="search-button" onClick={() => handleSearch(query)}>
          Search
        </button>
      </div>

      <div className="profile-container">
        <a href="#">
          <FiHeart className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </nav>
  );
}

export default Nav;



{/*import {ApiOutlineShoppingCart, AiOutlineUserAdd, AiOutlineShoppingCart} from "react-icons/ai"
import {FiHeart} from "react-icons/fi"
import "./Nav.css"

function Nav () {
  return (
    <nav>
      <div className="nav-container">
        <input type="text"
        className="search-input"
        placeholder="Enter your search"/>

      </div>

      <div className="profile-container">
        <a href="#">
        <FiHeart className="nav-icons"/>
        </a>
        <a href="#">
         <AiOutlineShoppingCart className="nav-icons"/> 
        </a>
        <a href="#">
         <AiOutlineUserAdd className="nav-icons"/> 
        </a>
      </div>
    </nav>
  )
}

export default Nav*/}