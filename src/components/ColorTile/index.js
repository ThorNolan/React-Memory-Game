import React from "react";
import "./style.css";

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