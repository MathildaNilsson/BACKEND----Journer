import { useState, useEffect } from "react";
import { Table, Button, Offcanvas, Modal } from "react-bootstrap";
import Backpack from "./Backpack";

const DisplayPlayer = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let [player, setPlayer] = useState(null);

  useEffect(() => {
    fetch(`/game/getplayer/`)
      .then((response) => response.json())
      .then((player) => setPlayer(player));
  }, []);

  return (
    <div className="container-bg">
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
                <Button
                  className="btn btn-secondary btn-lg"
                  variant="primary"
                  onClick={handleShow}
                >
                  Backpack
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="container-bg">Ryggsäck</Modal.Title>
        </Modal.Header>
        <Modal.Body className="container-bg">
          <Backpack player={player} />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
};

export default DisplayPlayer;