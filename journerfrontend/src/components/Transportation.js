import City from "./City";
import { useState, useEffect } from "react";
import { Button, Table} from "react-bootstrap";

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

  const checkMoney = (energy, money, city) =>{
    if(money > playerMoney){
      alert("För lite pengar mannen");

     //energy +++ playerEnergy >= 100
    }else{
     addEnergy(energy);
     removeMoney(money);
     setCurrentCity(city);
    }
  }

  useEffect(() => {
    fetch(`/game/station`)
      .then((response) => response.json())
      .then((station) => setStation(station));
  }, {});

  useEffect(() => {
    fetch(`/game/displayenergy`)
      .then((response) => response.json())
      .then((playerEnergy) => setPlayerEnergy(playerEnergy));
  }, {});

  useEffect(() => {
    fetch(`/game/displaymoney`)
      .then((response) => response.json())
      .then((playerMoney) => setPlayerMoney(playerMoney));
  }, {});

  useEffect(() => {
    fetch(`/city/random/cities`)
      .then((response) => response.json())
      .then((randomCity) => setRandomCity(randomCity));
  }, {});

  useEffect(() => {
    fetch(`/city/random/city`)
      .then((response) => response.json())
      .then((randomCity2) => setRandomCity2(randomCity2));
  }, {});

  const removeMoney = (money) =>{
    fetch(`/game/removemoney/${money}`, {
      method: "POST",
    }).then((response) => response.json());
  };

  const addEnergy = (energy) =>{
    fetch(`/game/addenergy/${energy}`,{
      method: "POST",
    }).then((response) => response.json());
  };

  return(
    <div className = "container-bg">
    <h1>Vart vill du resa nu?</h1>

    <div id="display-player-stats">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Transport</th>
              <th>Price</th>
              <th>Given Energy</th>
              <th>City</th>
              <th>Choose</th>
            </tr>
          </thead>
          <tbody>
             {station && station.map((transport) => (
               <tr>
              <td>{transport.name}</td>
              <td>{transport.price}:-</td>
              <td>{transport.energyToGain}</td>
              <td>{randomCity2 && randomCity2.name}</td>
              <td>
                 <Button class="btn btn-secondary btn-lg" variant="primary" onClick={() => {
                  checkMoney(transport.energyToGain, transport.price, randomCity2.name);
                }}>
                  Choose
                </Button> 
              </td>
              </tr>
             ))}
          </tbody>
        </Table>
      </div>

    <button id = "new-game" onClick={(e) => {e.preventDefault(); window.location.href = `/City`;}}>Tillbaka till {props.city.name}</button>
    <Button className="travel-btn"  onClick = {(e) => {e.preventDefault(); window.location.href = `/City`;}}>Res
              </Button>
    </div>
  )
}
export default Transportation;