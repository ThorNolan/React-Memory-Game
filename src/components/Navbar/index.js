import React from "react";
import "./style.css";

const Navbar = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="brand">
          <p className="animated heartBeat">{props.title}</p>
      </div>
    </nav>
  );
}

export default Navbar;
