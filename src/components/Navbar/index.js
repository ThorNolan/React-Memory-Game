import React from "react";
import "./style.css";

const Navbar = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="brand mx-auto">
          <p className="animated heartBeat title"><a href="/">{props.title}</a></p>
      </div>
    </nav>
  );
}

export default Navbar;
