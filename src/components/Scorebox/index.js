import React from "react";
import "./style.css";

const Scorebox = props => {
  return (
    <div className="scorebox container mx-auto">
        <h3 className="text-center">Click the colors, but only once! Click the same color twice and your score will reset.</h3>

        <p className="text-center font-weight-bold">Current Score: {props.currentScore} | High Score: {props.highScore}</p>
    </div>
  );  
};

export default Scorebox;