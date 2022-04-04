import { useEffect, useState } from "react";
import { Table, Button, Offcanvas } from "react-bootstrap";

const DisplayPlayer = () => {
  let [player, setPlayer] = useState(null);

  //Offcanvas variables
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Use effect to get player from database for display on screen
  useEffect(() => {
    fetch("http://localhost:8080/game/getplayer")
      .then((response) => response.json())
      .then((player) => setPlayer(player));
  }, {});
  return (
    <>
      <div id="display-player-stats">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Money</th>
              <th>Energy</th>
              <th>Backpack</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{player && player.name}</td>
              <td>{player && player.money}:-</td>
              <td>{player && player.energy}</td>
              <td>
                <Button variant="primary" onClick={handleShow}>
                  Backpack
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Backpack</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
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
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
};
export default DisplayPlayer;
