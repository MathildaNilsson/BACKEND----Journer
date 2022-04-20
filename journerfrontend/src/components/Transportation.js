import City from "./City";
import { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";

const Transportation = (props) => {
  let [station, setStation] = useState("");
  let [randomCity, setRandomCity] = useState("");
  let [randomCity2, setRandomCity2] = useState("");
  let [playerEnergy, setPlayerEnergy] = useState("");
  let [playerMoney, setPlayerMoney] = useState("");

  const setCurrentCity = (cityName) => {
    fetch(`/city/setcurrentcity/${cityName}`, {
      method: "POST",
    }).then((response) => response.json());
  };

  const checkMoney = (energy, money, city) => {
    if (money > playerMoney) {
      alert("För lite pengar mannen");
    } else if (energy++ + playerEnergy > 100) {
      let energyToFill = 100 - playerEnergy;
      console.log(energyToFill);
      addEnergy(energyToFill);
      removeMoney(money);
      setCurrentCity(city);
    } else {
      addEnergy(energy - 1);
      removeMoney(money);
      setCurrentCity(city);
    }
  };

  useEffect(() => {
    fetch(`/game/station`)
      .then((response) => response.json())
      .then((station) => setStation(station));
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

  useEffect(() => {
    fetch(`/city/random/cities`)
      .then((response) => response.json())
      .then((randomCity) => setRandomCity(randomCity));
  }, []);

  useEffect(() => {
    fetch(`/city/random/city`)
      .then((response) => response.json())
      .then((randomCity2) => setRandomCity2(randomCity2));
  }, []);

  const removeMoney = (money) => {
    fetch(`/game/removemoney/${money}`, {
      method: "POST",
    }).then((response) => response.json());
  };

  const addEnergy = (energy) => {
    fetch(`/game/addenergy/${energy}`, {
      method: "POST",
    }).then((response) => response.json());
  };

  return (
    <div className="container-bg">
      <h1>Dagens avgångar:</h1>

      <div id="display-player-stats">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Transport</th>
              <th>Pris</th>
              <th>Energi</th>
              <th>Stad</th>
              <th>Val</th>
            </tr>
          </thead>
          <tbody>
            <>
            {station &&
              station.slice(0,1).map((transport) => (
                <tr key={Math.random()}>
                  <td>{transport.name}</td>
                  <td>{transport.price}:-</td>
                  <td>+ {transport.energyToGain}</td>
                  <td>{randomCity && randomCity[0].name}</td>
                  <td>
                    <Button
                      className="btn btn-secondary btn-lg"
                      variant="primary"
                      onClick={() => {
                        checkMoney(
                          transport.energyToGain,
                          transport.price,
                          randomCity[0].name
                        );
                      }}
                    >
                      Välj
                    </Button>
                  </td>
                </tr>
              ))}
              {station &&
              station.slice(1,2).map((transport) => (
                <tr key={Math.random()}>
                  <td>{transport.name}</td>
                  <td>{transport.price}:-</td>
                  <td>+ {transport.energyToGain}</td>
                  <td>{randomCity && randomCity[1].name}</td>
                  <td>
                    <Button
                      className="btn btn-secondary btn-lg"
                      variant="primary"
                      onClick={() => {
                        checkMoney(
                          transport.energyToGain,
                          transport.price,
                          randomCity[1].name
                        );
                      }}
                    >
                      Välj
                    </Button>
                  </td>
                </tr>
              ))}
              {station &&
              station.slice(2,3).map((transport) => (
                <tr key={Math.random()}>
                  <td>{transport.name}</td>
                  <td>{transport.price}:-</td>
                  <td>+ {transport.energyToGain}</td>
                  <td>{randomCity && randomCity[2].name}</td>
                  <td>
                    <Button
                      className="btn btn-secondary btn-lg"
                      variant="primary"
                      onClick={() => {
                        checkMoney(
                          transport.energyToGain,
                          transport.price,
                          randomCity[2].name
                        );
                      }}
                    >
                      Välj
                    </Button>
                  </td>
                </tr>
              ))}
{/*             {station &&
              station.map((transport) => (
                <tr key={Math.random()}>
                  <td>{transport.name}</td>
                  <td>{transport.price}:-</td>
                  <td>+ {transport.energyToGain}</td>
                  <td>{randomCity2 && randomCity2.name}</td>
                  <td>
                    <Button
                      className="btn btn-secondary btn-lg"
                      variant="primary"
                      onClick={() => {
                        checkMoney(
                          transport.energyToGain,
                          transport.price,
                          randomCity2.name
                        );
                      }}
                    >
                      Välj
                    </Button>
                  </td>
                </tr>
              ))} */}


              
              </>
          </tbody>
          
        </Table>
        <Button
            className="travel-btn"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = `/City`;
            }}
          >
            Res
          </Button>
      </div>
    </div>
  );
};
export default Transportation;
