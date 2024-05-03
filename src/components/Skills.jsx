import React from "react";
import "./component.css";
function Skills(props) {
  return (
    <div className="moveset">
      <p className="skill">{props.first}</p>

      <p className="skill">{props.second}</p>

      <p className="skill">{props.third}</p>

      <p className="skill">{props.fourth}</p>
    </div>
  );
}

export default Skills;
