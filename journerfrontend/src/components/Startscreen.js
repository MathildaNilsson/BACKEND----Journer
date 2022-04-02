import { useEffect, useState } from "react";

const Startscreen = () => {
  let [player, setplayer] = useState(null);
  let [name, setname] = useState({name: ""});

  const submitHandler = (e) => {
    e.preventDefault();
  }

  function handleChange(name){
   setname(name);
  }
  /*<input onChange={(e) => setname({ ...name, name: e.target.value })}
            value={name}>Write name</input>
  }*/

  useEffect(() => {
    fetch(`http://localhost:8080/game/getplayer/`)
      .then((response) => response.json())
      .then((player) => setplayer(player));
  }, {});

  return(
    <>
     <input
            type="name"
            name="name"
            placeholder="name"
            onChange={(e) => setname({ ...name, name: e.target.value })}
            value={name.name}
          ></input>
    <button id = "new-game" onClick={(e) => {e.preventDefault(); window.location.href = `/quiz`;}}>New Game</button>
    <button>HighScore</button>
    </>
  )
 }

export default Startscreen;
