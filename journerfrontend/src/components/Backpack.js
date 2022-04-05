import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
const Backpack = () => {
  let [player, setPlayer] = useState(null);
  useEffect(() => {
    fetch("http://localhost:8080/game/getplayer")
      .then((response) => response.json())
      .then((player) => setPlayer(player));
  }, {});
  return (
    <>
      <h1>backpack</h1>
      {player &&
        player.backpack.map((list) => (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Amount</th>
                <th>Name</th>
                <th>cost</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{}</td>
                <td>{list.name}</td>
                <td>{list.price}</td>
              </tr>
            </tbody>
          </Table>
        ))}
    </>
  );
};
export default Backpack;
