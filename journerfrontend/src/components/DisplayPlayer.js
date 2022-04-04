import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const DisplayPlayer = () => {
  let [player, setPlayer] = useState(null);
  // Use effect to get player from database for display on screen
  useEffect(() => {
    fetch("http://localhost:8080/game/getplayer")
      .then((response) => response.json())
      .then((player) => setPlayer(player));
  }, {});
  return(
    <>
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
    </>
  )
}
export default DisplayPlayer;