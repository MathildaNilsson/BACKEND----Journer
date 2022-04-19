import React, { Component } from "react";
import { Button } from "react-bootstrap";

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

      const showDestinations = () => {
        let money = randomMoney();
        return (
          <span>
            {randomCity?.map((city) => (
              <>
                <Button
                  onClick={() => {
                    removeMoney(money);
                    this.handleSubmit(`${city.name}`);
                  }}
                >
                  {city.name}
                </Button>
                {money}:-
                <br />
              </>
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
<<<<<<< HEAD
              15.000:- i reskassa
            </h3>
          </div>
          <div className="div5">
            <h4>Välj din första destination:</h4>
            {showDestinations()}

=======
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
>>>>>>> b994e5af83a8bd067d54c9e47fc81cf6b6f16763
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
    fetch(`/city/random/cities`)
      .then((response) => response.json())
      .then((randomCity) => this.setState({ cities: randomCity }));
  }
}
export default NewGameScreen;
