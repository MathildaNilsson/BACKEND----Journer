import React, { Component } from "react";
import { Button, Offcanvas, Container, Table } from "react-bootstrap";
import { useState } from "react";

class Startscreen extends Component {
  async handleSubmit(event) {
    await fetch("game/createplayer/" + event, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
  }

  render() {
    const { highscores: highscore } = this.state;
    const Startscreen = () => {
      const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

      return (
        <div className="container-bg">
          <Container fluid>
            <form>
              <input type="text" placeholder="name" id="input-name"></input>
              <Button
                className="btn btn-secondary btn-lg"
                variant="primary"
                id="new-game"
                onClick={(e) => {
                  this.handleSubmit(
                    document.getElementById("input-name").value
                  );

                  window.location.href = `/newgamescreen`;
                }}
              >
                New Game
              </Button>{" "}
              <Button
                variant="primary"
                className="btn btn-secondary btn-lg"
                onClick={handleShow}
              >
                Highscore
              </Button>
            </form>
          </Container>

          <Offcanvas
            className="container-bg"
            placement="top"
            show={show}
            onHide={handleClose}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Highscore</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Namn</th>
                    <th>Pengar</th>
                    <th>Klarade städer</th>
                  </tr>
                </thead>
                <tbody>
                  {highscore?.map((player) => (
                    <tr>
                      <td>{player.name}</td>
                      <td>{player.money}</td>
                      <td>{player.completedCities}</td>
                      </tr>
                  ))}

                  <tr>
                    <td>test</td>
                    <td>test</td>
                  </tr>
                </tbody>
              </Table>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      );
    };

    return <Startscreen />;
  }

  constructor(props) {
    super(props);
    this.state = { highscores: [] };
  }

  componentDidMount() {
    fetch("/highscore")
      .then((response) => response.json())
      .then((highscore) => this.setState({ highscores: highscore }));
  }
}
export default Startscreen;
