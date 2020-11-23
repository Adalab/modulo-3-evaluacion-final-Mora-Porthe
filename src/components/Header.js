import React from "react";
import logoHeader from "../images/logoRM.png";
import "../stylesheets/layout/_header.scss";

const Header = () => {
  return (
    <header className="header" role="banner">
      <img
        className="header__logo"
        src={logoHeader}
        alt="Rick and Morty Logo"
        title="Rick and Morty search your character"
      />
    </header>
  );
};

export default Header;
