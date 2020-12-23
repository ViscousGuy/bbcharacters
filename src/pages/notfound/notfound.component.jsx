import React from "react";
import { Link } from "react-router-dom";

import ErrorPage from "../../assets/fourofour.jpg";

export const NotFound = () => {
  return (
    <div>
      <img src={ErrorPage} alt="404error" />
      <Link to="/">
        <p>Send me to Home!</p>
      </Link>
    </div>
  );
};

export default NotFound;
