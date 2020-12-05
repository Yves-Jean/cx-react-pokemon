import { ThemeContext } from "../../contexts/ThemeContext";
import React, { useContext } from "react";
import "./toolbar.scss";

const Toolbar = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  const getSwithThemeName = () => (theme === "light" ? "dark" : "light");
  const swithTheme = () => {
    const bodyClass = document.querySelector("body").classList;
    bodyClass.remove(`theme-${theme}`);
    bodyClass.add(`theme-${getSwithThemeName()}`);
    setTheme(getSwithThemeName());
  };

  return (
    <header className="header container">
      <nav className="nav-bar display-flex flex-justify-end pd-y-2">
        <button className="btn btn-pink" onClick={swithTheme}>
          {getSwithThemeName()} theme
        </button>
      </nav>
    </header>
  );
};

export default Toolbar;
