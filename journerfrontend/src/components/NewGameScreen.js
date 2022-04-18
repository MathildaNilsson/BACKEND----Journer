import React, { Component } from "react";
import { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";

class NewGameScreen extends Component {
  render() {
    const { players: player } = this.state;

    const NewGameScreen = () => {
      const removeMoney = (money) => {
        fetch(`http://localhost:8080/game/removemoney/${money}`, {
          method: "POST",
        }).then((response) => response.json());
      };

      return (
        <div className="container">
          <div className="div5">
            <h1>Välkommen till Journer</h1>
            <p>
              Ditt mål är att besöka så många städer som möjligt, du börjar med
              15.000 i reskassa
            </p>
            <p>Välj din första destination:</p>
            <Button
              className ="btn btn-secondary btn-lg"
              onClick={() => {
                removeMoney(12000);
                //setCurrentCity("chicago");
                this.handleSubmit("chicago");
              }}
            >
              Chicago
            </Button>
            12000:-
            <br />
            <Button
              className ="btn btn-secondary btn-lg"
              onClick={(e) => {
                //setCurrentCity("bangalore");
                //removeMoney(10000);
                this.handleSubmit("bangalore");
              }}
            >
              Bangalore
            </Button>
            10000:-
            <br />
            <Button
              className ="btn btn-secondary btn-lg"
              onClick={(e) => {
                //removeMoney(15000);
                //setCurrentCity("tokyo");
                this.handleSubmit("tokyo");
              }}
            >
              Tokyo
            </Button>
            15000:-
            <br />
            <Button
              onClick={(e) => {
                window.location.href = `/City`;
              }}
            >
              Res
            </Button>
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
        </div>
      );
    };

    return <NewGameScreen />;
  }

  async handleSubmit(city) {
    await fetch("city/setcurrentcity/" + city, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
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
