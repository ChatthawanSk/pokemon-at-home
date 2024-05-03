import React from "react";
import Attacking from "./Attacking";
import "./component.css";
const Friendly = (props) => {
  return (
    <>
      <div className="friendlyUI">
        <div className="name">
          {props.Pokename}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lvl.100
          <hr className="hp" width="80%;" color="green" size="5"></hr>
        </div>
      </div>
      <Attacking id={props.id} />
    </>
  );
};

export default Friendly;
