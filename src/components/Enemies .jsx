import React from "react";
import "./component.css";
function Enemies() {
  return (
    <div className="enemyUI">
      <div className="name">rayquaza&nbsp; Lvl.100</div>
      <hr width="80%;" color="green" size="5"></hr>

      <img
        className="image"
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/384.png"
        alt="rayquaza"
      />
    </div>
  );
}

export default Enemies;
