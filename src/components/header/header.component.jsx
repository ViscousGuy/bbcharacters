import React from "react";

import { Link } from "react-router-dom";
import "./header.component.styles.css";
import { ReactComponent as Logo } from "../../assets/main.svg";

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
  </div>
);

export default Header;
