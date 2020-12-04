import React from "react";
import "./toolbar.scss";

const Toolbar = () => {
  return (
    <header className="header container">
      <nav className="nav-bar display-flex flex-justify-end pd-y-2">
        <button className="btn btn-pink">light theme</button>
      </nav>
    </header>
  );
};

export default Toolbar;
