import { Button } from "bootstrap";
import { Component } from "react";
class EndGameScreen extends Component {
  render() {
    const { players: player } = this.state;

    const test = () => {
      fetch(`/highscore`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },

        body: JSON.stringify({
          name: player.name,
          money: player.money,
          completedCities: player.completedCities,
        }),
      }).then((response) => response.json());
    };

    return (
      <div className="container">
        <h1>GAME OVER</h1>
        <h2>Namn: {player.name}</h2>
        <h2>Pengar: {player.money}</h2>
        <h2>Klarade städer: {player.completedCities}</h2>
        <div>
          {player.backpack?.map((item) => (
            <div>{item.name} </div>
          ))}
        </div>
        <button onClick={(e) => test()}> spara Highscore</button>
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = { players: [] };
  }

  componentDidMount() {
    fetch("/game/countcities/")
      .then((response) => response.json())
      .then((count) => this.setState({ counts: count }));
    fetch("/game/getplayer/")
      .then((response) => response.json())
      .then((player) => this.setState({ players: player }));
  }
}

export default EndGameScreen;
