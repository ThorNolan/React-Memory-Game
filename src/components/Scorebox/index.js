import React from "react";
import "./style.css";

const Scorebox = props => {
  return (
    <div>
        <h3>Click the colors, but only once! Click the same color twice and your score will reset.</h3>

        <ul>
            <li>Current Score: {props.currentScore}</li>

            <li>High Score: {props.highScore}</li>
        </ul>
    </div>
  );  
};

export default Scorebox;