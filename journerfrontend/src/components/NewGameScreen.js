import { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
const NewGameScreen = () => {
  let [player, setPlayer] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/game/getplayer")
      .then((response) => response.json())
      .then((player) => setPlayer(player));
  }, {});

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
              <td>{player.name}</td>
              <td>{player.money}:-</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <Button>Chicago</Button>
      <br/>
      <Button>Bangalore</Button>
      <br/>
      <Button>Tokyo</Button>
      <br/>
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
