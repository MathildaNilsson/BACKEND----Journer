import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const Startscreen = ({ Name }) => {
  let [player, setplayer] = useState(null);
  let [name, setname] = useState("");

  const getInputValue = () => {
    var inputVal = document.getElementById("input-name").value;
    fetch(`http://localhost:8080/game/createplayer/${inputVal}`, {
      // Adding method type
      method: "POST",
    })
      // Converting to JSON
      .then((response) => response.json());
  };

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="name"
          id="input-name"
        ></input>
        <Button
          variant="primary"
          id="new-game"
          onClick={(e) => {
            getInputValue();
            e.preventDefault();
            window.location.href = `/newgamescreen`;
          }}
        >
          New Game
        </Button>{" "}
        <Button variant="primary">HighScore</Button>
      </form>

      <div id="temp">
        <button
          id="new-game"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = `/accomondations`;
          }}
        >
          Accomondations
        </button>
        <button
          id="new-game"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = `/attraction`;
          }}
        >
          Attraction
        </button>
        <button
          id="new-game"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = `/city`;
          }}
        >
          City
        </button>
        <button
          id="new-game"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = `/transportation`;
          }}
        >
          Transportation
        </button>
      </div>
    </>
  );
};
export default Startscreen;
