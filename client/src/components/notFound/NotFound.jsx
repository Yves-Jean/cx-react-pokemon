import React from "react";
import "./notFound.scss";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-img"></div>
      <h1 className="not-found">Page not found.</h1>
      <Link className="no" to="/">
        Come back to the home page.
      </Link>
    </div>
  );
};

export default NotFound;
