import { ThemeContext } from "../../contexts/ThemeContext";
import React, { useContext } from "react";
import "./toolbar.scss";

const Toolbar = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  const getSwithTheme = () => (theme === "light" ? "dark" : "light");

  return (
    <header className="header container">
      <nav className="nav-bar display-flex flex-justify-end pd-y-2">
        <button
          className="btn btn-pink"
          onClick={() => {
            setTheme(getSwithTheme());
          }}
        >
          {getSwithTheme()} theme
        </button>
      </nav>
    </header>
  );
};

export default Toolbar;
