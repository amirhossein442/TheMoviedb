import { Menu } from "./menuLink";
import React, { useRef, useState } from "react";

import Logo from "../../img/header-logo.svg";
import { FaSearch, FaTimes } from "react-icons/fa";

export const Header1 = () => {
  const [searchValue, setSearchValue] = useState("");
  const searchInputRef = useRef(null);

  const handleSearchClick = () => {
    searchInputRef.current.focus();
  };
  const handelClear = () => {
    setSearchValue("");
    searchInputRef.current.focus();
  };

  return (
    <div className="header">
      <div className="navbar">
        <div className="navbar-left">
            <img src={Logo} alt="Logo" />
            <Menu />
        </div>
        <div className="navbar-right">
          <button>EN</button>
          <a href="#">Login</a>
          <a href="#">Join up</a>
          <a href="#" onClick={handleSearchClick}>
            <FaSearch />
          </a>
        </div>
      </div>
      <div className="navbar-search">
        <button className="navbar-button">{<FaSearch />}</button>
        <input
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
          ref={searchInputRef}
          type="text"
          placeholder="Search for a movie, tv show, person..."
        />
        <button className="navbar-button" onClick={handelClear}>
          {<FaTimes />}
        </button>
      </div>
    </div>
  );
};
