import { useEffect, useState } from "react";
import { Table, Button, Offcanvas } from "react-bootstrap";
import Backpack from "./Backpack";
import React, { Component } from 'react';

class DisplayPlayer extends Component {

  render() {
    
    const {players: player, isLoading} = this.state;
    if (isLoading) {
        return <p>Loading...</p>;
    }
/* 
    const questionList = questions.map(question => {
      return(<div>{question.question}</div>)
      
    }); */

    return (
        <div className="container-bg">
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
              <td>{player.name}</td>
              <td>{player.money}:-</td>
              <td>{player.energy}</td>
              <td>
{/*                 <Button class="btn btn-secondary btn-lg" variant="primary" onClick={handleShow}>
                  Backpack
                </Button> */}
              </td>
            </tr>
          </tbody>
        </Table>
{/*         <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Backpack</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Backpack />
          </Offcanvas.Body>
        </Offcanvas> */}
      </div>
    </>
        </div>
    );
}

    constructor(props) {
        super(props);
        this.state = {players: []};
    }

    componentDidMount() {
        fetch('/game/getplayer/')
            .then(response => response.json())
            .then(player => this.setState({players: player}));
    }
}
 export default DisplayPlayer;