import { Table, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
const Backpack = (props) => {
  let [playerEnergy, setPlayerEnergy] = useState("");

  useEffect(() => {
    fetch(`/game/displayenergy`)
      .then((response) => response.json())
      .then((playerEnergy) => setPlayerEnergy(playerEnergy));
  }, []);

  const addEnergy = (energyToAdd) => {
    fetch(`/game/addenergy/${energyToAdd}`, {
      method: "POST",
    }).then((response) => response.json());
  };

  let drinks = props.player.backpack.filter(
    (drink) => drink.name == "Energydrink"
  );
  let pepperspray = props.player.backpack.filter(
    (spray) => spray.name == "Pepperspray"
  );
  let souvenir = props.player.backpack.filter(
    (souvenir) =>
      souvenir.name !== "Pepperspray" && souvenir.name !== "Energydrink"
  );

  const removeItem = (item) => {
    fetch(`/game/removeitemfrombackpack/${item}`, {
      method: "POST",
    }).then((response) => response.json());
    window.location.reload(false);
    alert(`Du har nu använt din ${item}`);
  };

  const checkEnergy = (energy) => {
    if (energy +++ playerEnergy > 100) {
      let energyToFill = 100 - playerEnergy;
      addEnergy(energyToFill);
      window.location.reload(false);
    } else {
      addEnergy(energy -1);
    }
  };

  return (
    <>
      {drinks.map((drink) => (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Namn</th>
              <th>Energi</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{drink.name}</td>
              <td> + 35</td>
              <td>
                <Button
                  onClick={() => {
                    removeItem(drink.name);
                    checkEnergy(35);
                  }}
                >
                  Use
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      ))}

      {pepperspray.map((spray) => (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Namn</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{spray.name}</td>
              <td>
                <Button
                  onClick={() => {
                    removeItem(spray.name);
                  }}
                >
                  Use
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      ))}

      {souvenir.map((souvenir) => (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Souvenir</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{souvenir.name}</td>
            </tr>
          </tbody>
        </Table>
      ))}
    </>
  );
};
export default Backpack;
