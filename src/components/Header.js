import React from "react";

export default function Header() {
  return (
    <header className="header">
      <img
        src={require("../img/logo.png")}
        alt="logo"
        className="header--logo"
      />
      <h1 className="header--title">my travel journal.</h1>
    </header>
  );
}
