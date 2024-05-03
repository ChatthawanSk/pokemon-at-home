import { useEffect, useState } from "react";
import Friendly from "./components/Friendly";
import Enemies from "./components/Enemies ";
import "./App.css";
import axios from "axios";
import Skills from "./components/Skills";

function App() {
  const [Pokename, setPokename] = useState("pikachu");
  const [PokeID, setPokeID] = useState("");
  const [Moves, setMoves] = useState([]);

  let moveset = [];

  URL = `https://pokeapi.co/api/v2/pokemon/${Pokename}`;
  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        setPokename(res.data.name);
        setPokeID(res.data.id);
        setMoves(res.data.moves);
      })
      .catch((err) => {
        window.alert(err);
      });
  }, [Pokename]);

  return (
    <>
      {Moves
        ? Moves.map((value, key) => {
            let temp = "";
            if (Math.random() * (100 - 0) + 0 >= 90) {
              temp = value.move.name;
              if (moveset.length < 4) {
                moveset.push(temp);
              } else {
                return;
              }
            }
          })
        : ""}
      <div className="dropdown">
        <select
          className="dropdown_text"
          value={Pokename}
          onChange={(e) => {
            setPokename(e.target.value);
          }}
        >
          <option value="pikachu">Pikachu</option>
          <option value="zubat">Zubat</option>
          <option value="gloom">Gloom</option>
          <option value="abra">Abra</option>
          <option value="machop">Machop</option>
          <option value="muk">Muk</option>
          <option value="flaaffy">Flaaffy</option>
          <option value="jynx">Jynx</option>
          <option value="mew">Mew</option>
        </select>
      </div>

      <div className="Background">
        <Enemies />
        <Friendly Pokename={Pokename} id={PokeID} />
        <Skills
          first={moveset[0]}
          second={moveset[1]}
          third={moveset[2]}
          fourth={moveset[3]}
        />
      </div>
    </>
  );
}

export default App;
