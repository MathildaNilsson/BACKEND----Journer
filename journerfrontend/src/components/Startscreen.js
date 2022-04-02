import { useEffect, useState } from "react";

const Startscreen = ({Name}) => {
  let [player, setplayer] = useState(null);
  let [name, setname] = useState({name: ""});

  const submitHandler = (e) => {
    e.preventDefault();
    Name(name);
  }


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
    <button id = "new-game" onSubmit={submitHandler} onClick={(e) => {e.preventDefault(); window.location.href = `/quiz`;}}>New Game</button>
    <button>HighScore</button>
    </>
  )
 }

export default Startscreen;
