import React from "react";
import "./style.css";

const ColorTile = props => {
  return (
    <div
    className="card"
    value={props.id}
    onClick={() => props.handleClick(props.id)}
    >
      <div className="tile-container">
        
      </div>  
    </div>
  );  
};

export default ColorTile;