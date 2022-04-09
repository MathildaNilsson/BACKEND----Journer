import { useEffect, useState } from "react";
import { Table, Button, Offcanvas } from "react-bootstrap";
import Backpack from "./Backpack";
import React, { Component } from 'react';

class DisplayPlayer extends Component {

  render() {
    
    const {players: player} = this.state;
    
    
      const DisplayPlayer = () => {
      const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
      return(
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
                 <Button class="btn btn-secondary btn-lg" variant="primary" onClick={handleShow}>
                  Backpack
                </Button> 
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    

    <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Backpack</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Backpack />
      </Offcanvas.Body>
    </Offcanvas>
        </div>


      )}
    
    return (

      <DisplayPlayer/>
      
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