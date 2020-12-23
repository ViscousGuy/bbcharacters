import React from "react";

import "./search-box.styles.css";

export const SearchBox = (props) => (
  <div>
    <input
      className="search-box"
      type="search"
      placeholder="search characters"
      onChange={props.onSearchChange}
    />
  </div>
);
