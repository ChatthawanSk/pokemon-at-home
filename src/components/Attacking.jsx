import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
function Attacking(props) {
  const [isClicked, setIsClicked] = useState();
  const audio = new Audio(
    "./Roblox Death Sound - OOF ｜ Sound Effect HD - HomeMadeSoundEffects.mp3"
  );
  const handleClick = () => {
    audio.play();
    setIsClicked(true);

    setTimeout(() => {
      setIsClicked(false);
    }, 200); // Delay in milliseconds before moving back
  };

  return (
    <div>
      <motion.img
        onClick={handleClick}
        className="pokeimage"
        initial={{ x: 0 }}
        animate={{ x: isClicked ? 200 : 0, y: isClicked ? -100 : 0 }}
        transition={{ duration: 0.2 }}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${props.id}.png`}
      />
    </div>
  );
}

export default Attacking;
