import { useEffect, useState } from "react";
import { Table, Button, Offcanvas } from "react-bootstrap";
import Backpack from "./Backpack";

const DisplayPlayer = () => {
  let [player, setPlayer] = useState(null);

  //Offcanvas variables
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    fetch("http://localhost:8080/game/getplayer")
      .then((response) => response.json())
      .then((player) => setPlayer(player));
  },[]);
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
                <Button class="btn btn-secondary btn-lg" variant="primary" onClick={handleShow}>
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
            <Backpack />
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
  
};

export default DisplayPlayer;
