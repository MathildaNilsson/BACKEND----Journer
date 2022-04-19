import { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";

const Accomondations = () => {
  let [accommodation, setAccommodation] = useState("");
  let [playerEnergy, setPlayerEnergy] = useState("");
  let [playerMoney, setPlayerMoney] = useState("");

  useEffect(() => {
    fetch(`/game/accommodation`)
      .then((response) => response.json())
      .then((accommodation) => setAccommodation(accommodation));
  }, []);

  useEffect(() => {
    fetch(`/game/displayenergy`)
      .then((response) => response.json())
      .then((playerEnergy) => setPlayerEnergy(playerEnergy));
  }, []);

  useEffect(() => {
    fetch(`/game/displaymoney`)
      .then((response) => response.json())
      .then((playerMoney) => setPlayerMoney(playerMoney));
  }, []);


  const addEnergy = (energyToAdd) => {
    fetch(`/game/addenergy/${energyToAdd}`, {
      method: "POST",
    }).then((response) => response.json());
  };

  const removeMoney = (moneyToRemove) => {
    fetch(`/game/removemoney/${moneyToRemove}`, {
      method: "POST",
    }).then((response) => response.json());
  };

  const checkMoney = (energy, money) => {
    if (money > playerMoney) {
      alert("För lite pengar mannen");
    } else if (energy +++ playerEnergy > 100) {
      let energyToFill = 100 - playerEnergy;
      addEnergy(energyToFill);
      removeMoney(money);
      window.location.reload(false);
      alert(`Hoppas du sovit gott, du har nu fått ${energy -1} extra energi!` );
    } else {
      addEnergy(energy - 1);
      removeMoney(money);
      window.location.reload(false);
      alert(`Hoppas du sovit gott, du har nu fått ${energy -1} extra energi!` );
    }
  };


  return (
    <>
    <h1>Boende alternativ</h1>

      <div id="display-player-stats">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Typ av boende</th>
              <th>Kostnad</th>
              <th>Energi</th>
              <th>Gör ditt val</th>
            </tr>
          </thead>
          <tbody>
            <>
            {accommodation && accommodation.map((stay) => (
                <tr key={Math.random()}>
                  <td>{stay.name}</td>
                  <td>{stay.price}:-</td>
                  <td>+ {stay.energyToGain}</td>
                  <td>
                    <Button onClick={() => {
                        checkMoney(
                          stay.energyToGain,
                          stay.price
                        );
                      }}
                      className ="btn btn-secondary btn-lg"
                      variant="primary"
                    >
                      Välj
                    </Button>
                  </td>
                </tr>
              ))}
              </>
          </tbody>
        </Table>
      </div>
    </>
  );
};
export default Accomondations;
