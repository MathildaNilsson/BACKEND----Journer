import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { useState } from "react";

class NewGameScreen extends Component {
  render() {
    const { players: player } = this.state;
    const { cities: randomCity } = this.state;

    const NewGameScreen = () => {
      const removeMoney = (money) => {
        fetch(`http://localhost:8080/game/removemoney/${money}`, {
          method: "POST",
        }).then((response) => response.json());
      };

      let randomMoney = () => {
        let money = Math.floor(Math.random() * 6) + 6;
        return (money *= 1000);
      };
      let [money, setMoney] = useState(randomMoney());

      const showDestinations = () => {
        return (
          <span>
            <h3>Pris: {money}:-</h3>
            <br />
            {randomCity?.map((city) => (
              <div key={Math.random()}>
                <Button
                  onClick={() => {
                    this.handleSubmit(`${city.name}`);
                  }}
                >
                  {city.name}
                </Button>
                
                <br />
              </div>
            ))}
          </span>
        );
      };

      return (
        <div className="container">
          <div className="div1">
            <h1>Välkommen till Journer</h1>
            <h3>
              Ditt mål är att besöka så många städer som möjligt, du börjar med
              15.000:- i reskassa
            </h3>
          </div>
          <div className="div5">
            <h4>Välj din första destination:</h4>
            {showDestinations()}

            <Button
            variant="success"
              onClick={(e) => {
                removeMoney(money);
                window.location.href = `/City`;
              }}
            >
              Res
            </Button>
            <br />
            <Button
              variant="danger"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = `/`;
              }}
            >
              Tillbaka
            </Button>
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
    fetch(`/city/random/cities`)
      .then((response) => response.json())
      .then((randomCity) => this.setState({ cities: randomCity }));
  }
}
export default NewGameScreen;
