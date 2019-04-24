import React from "react";
import "./ColorTile.css";

const ColorTile = props => {
    <div
    className="card"
    value={props.id}
    onClick={() => props.HandleClick(props.id)}
    >
      <div className="tile-container">
        
      </div>  
    </div>
};

export default ColorTile;