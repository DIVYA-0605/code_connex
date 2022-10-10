import React from "react";
import "./Header.css";
import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";
function Header() {
  return (
    <div className="header">
      {/* left*/}
      <div className="header__left">
        <img
          src="delivery.png"
          alt="Delivery_App"
        />
        <h1>Delivery</h1>
      </div>
      {/* middle */}
      <div className="header__middle">
        <input type="search" name="search" placeholder="Search...." />
        <SearchIcon />
      </div>
      {/* right */}
      <div className="header_right">
        <Avatar alt="John" src="/static/images/avatar/1.jpg" />
        <h3>John</h3>
      </div>
    </div>
  );
}

export default Header;
