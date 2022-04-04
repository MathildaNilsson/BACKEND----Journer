import { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";

const NewGameScreen = () => {
  let [player, setPlayer] = useState(null);

  // Use effect to get player from database for display on screen
  useEffect(() => {
    fetch("http://localhost:8080/game/getplayer")
      .then((response) => response.json())
      .then((player) => setPlayer(player));
  }, {});

  // Sets the current city in db with the incoming name cityName from button eventlistener. Copy and change fetch string to value you want to change
  const setCurrentCity = (cityName) => {
    fetch(`http://localhost:8080/city/setcurrentcity/${cityName}`, {
      method: "POST",
    }).then((response) => response.json());
  };

  return (
    <>
      <h1>New game screen</h1>
      <div id="display-player-stats">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Money</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{player && player.name}</td>
              <td>{player && player.money}:-</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <Button
        onClick={(e) => {
          setCurrentCity("chicago");
          e.preventDefault();
          window.location.href = `/City`;
        }}
      >
        Chicago
      </Button>
      <br />
      <Button
        onClick={(e) => {
          setCurrentCity("bangalore");
          e.preventDefault();
          window.location.href = `/City`;
        }}
      >
        Bangalore
      </Button>
      <br />
      <Button
        onClick={(e) => {
          setCurrentCity("tokyo");
          e.preventDefault();
          window.location.href = `/City`;
        }}
      >
        Tokyo
      </Button>
      <br />
      <button
        id="new-game"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = `/`;
        }}
      >
        Return
      </button>
    </>
  );
};
export default NewGameScreen;
