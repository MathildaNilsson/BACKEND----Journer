import React, { Component } from "react";
import { Button } from "react-bootstrap";
import DisplayPlayer from "./DisplayPlayer";

class NewGameScreen extends Component {
  render() {
    const { players: player } = this.state;

    const NewGameScreen = () => {


      return (
        <div className="container-bg">
          <h1>New game screen</h1>
      <DisplayPlayer/>
      <Button
      class="btn btn-secondary btn-lg"
        onClick={(e) => {
          //removeMoney(12000);
          //setCurrentCity("chicago");
          this.handleSubmit();
          e.preventDefault();
          window.location.href = `/City`;
        }}
      >
        Chicago
      </Button>
      12000:-
      <br />
      <Button
      class="btn btn-secondary btn-lg"
        onClick={(e) => {
          //setCurrentCity("bangalore");
          //removeMoney(10000);
          e.preventDefault();
          window.location.href = `/City`;
        }}
      >
        Bangalore
      </Button>
      10000:-
      <br />
      <Button
      class="btn btn-secondary btn-lg"
        onClick={(e) => {
          //removeMoney(15000);
          //setCurrentCity("tokyo");
          e.preventDefault();
          window.location.href = `/City`;
        }}
      >
        Tokyo
      </Button>
      15000:-
      <br />
      <button
        id="new-game"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = `/`;
        }}
      >
        Return
      </button>
        </div>
      );
    };

    return <NewGameScreen />;
  }
  
  async handleSubmit() {

    await fetch('city/setcurrentcity/chicago', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    });
}

constructor(props) {
  super(props);
  this.state = {};

}

  componentDidMount() {
    fetch("/game/getplayer/")
      .then((response) => response.json())
      .then((player) => this.setState({ players: player }));
  }
  
}
export default NewGameScreen;

/* import { Button } from "react-bootstrap";
import DisplayPlayer from "./DisplayPlayer";

const NewGameScreen = () => {

  // Sets the current city in db with the incoming name cityName from button eventlistener. Copy and change fetch string to value you want to change
  const setCurrentCity = (cityName) => {
    fetch(`http://localhost:8080/city/setcurrentcity/${cityName}`, {
      method: "POST",
    }).then((response) => response.json());
  };
  

  const removeMoney = (money) =>{
    fetch(`http://localhost:8080/game/removemoney/${money}`, {
      method: "POST",
    }).then((response) => response.json());
  };

  return (
    
  );
};
export default NewGameScreen;
 */
