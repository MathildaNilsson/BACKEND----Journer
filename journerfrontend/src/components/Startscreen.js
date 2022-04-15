import React, { Component } from "react";
import { Button, Container, Table } from "react-bootstrap";
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
            </form>
          </Container>

          
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Namn</th>
                    <th>Completed cities</th>
                    <th>Money</th>
                  </tr>
                </thead>
                <tbody>
                  {highscore?.slice(0,5).map((player) => (
                    <tr>
                      <td>{player.name}</td>
                      <td>{player.completedCities}</td>
                      <td>{player.money}</td>
                      </tr>
                  ))}
                </tbody>
              </Table>
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
