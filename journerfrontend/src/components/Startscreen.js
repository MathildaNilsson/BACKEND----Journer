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



    <div id ="temp">
    <button id = "new-game" onClick={(e) => {e.preventDefault(); window.location.href = `/accomondations`;}}>Accomondations</button>
    <button id = "new-game" onClick={(e) => {e.preventDefault(); window.location.href = `/attraction`;}}>Attraction</button>
    <button id = "new-game" onClick={(e) => {e.preventDefault(); window.location.href = `/backpack`;}}>Backpack</button>
    <button id = "new-game" onClick={(e) => {e.preventDefault(); window.location.href = `/city`;}}>City</button>
    <button id = "new-game" onClick={(e) => {e.preventDefault(); window.location.href = `/shop`;}}>Shop</button>
    <button id = "new-game" onClick={(e) => {e.preventDefault(); window.location.href = `/transportation`;}}>Transportation</button>
    </div>
        </>
  )
 }

export default Startscreen;
