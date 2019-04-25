import React from "react";
import "./style.css";

// Each color tile is imbued with a click handler and a unique color that's passed down as a prop taken from colors.json
const ColorTile = props => {
  return (
    <div
      className="card hvr-radial-out"
      value={props.id}
      onClick={() => props.handleClick(props.id)}
      style={{backgroundColor: props.bg}}
    />
  );  
};

export default ColorTile;