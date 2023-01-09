import React from "react";
import { useState } from "react";

export default function Header(props) {
  const [darkMode, setMode] = useState(props.darkMode);

  function onClickHandler() {
    setMode((darkMode) => !darkMode);
  }

  return (
    <header className={`header ${darkMode ? "darkMode" : ""}`}>
      <img
        src={require("../img/logo.png")}
        alt="logo"
        className="header--logo"
      />
      <h1 className="header--title">my travel journal.</h1>
      <button onClick={onClickHandler} className="mode-btn">
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
}
