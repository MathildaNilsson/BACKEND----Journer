import { useState } from "react";
import { Table, Button, Offcanvas, Modal } from "react-bootstrap";
import Backpack from "./Backpack";
import React, { Component } from "react";

class DisplayPlayer extends Component {
  render() {
    const { players: player } = this.state;

    const DisplayPlayer = () => {
      const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
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
                  <td>{player.name}</td>
                  <td>{player.money}:-</td>
                  <td>{player.energy}</td>
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

    return <DisplayPlayer />;
  }

  constructor(props) {
    super(props);
    this.state = { players: [] };
  }

  componentDidMount() {
    fetch("/game/getplayer/")
      .then((response) => response.json())
      .then((player) => this.setState({ players: player }));
  }
}
export default DisplayPlayer;
