import { useEffect, useState } from "react";

const Startscreen = ({Name}) => {
  let [player, setplayer] = useState(null);
  let [name, setname] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    this.setname({value: e.target.value})
  }

  useEffect(() => {
    fetch(`http://localhost:8080/game/getplayer/`)
      .then((response) => response.json())
      .then((player) => setplayer(player));
  }, {});

  return(
    <>
    <form>
     <input
            type="text"
            name="name"
            placeholder="name"
            onChange={(e) => setname(e.target.value)}
            value={name}
          ></input>
    <button id = "new-game" onSubmit={submitHandler} onClick={(e) => {e.preventDefault(); window.location.href = `/newgamescreen`;}}>New Game</button>
    <button>HighScore</button>

    </form>

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
