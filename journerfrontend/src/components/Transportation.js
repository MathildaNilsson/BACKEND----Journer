import City from "./City";
import { useState, useEffect } from "react";
import { Button, Table} from "react-bootstrap";

const Transportation = (props) => {

  let [station, setStation] = useState("");
  let [randomCity, setRandomCity] = useState("");

  const setCurrentCity = (cityName) => {
    fetch(`/city/setcurrentcity/${cityName}`, {
      method: "POST",
    }).then((response) => response.json());
  };

  useEffect(() => {
    fetch(`/game/station`)
      .then((response) => response.json())
      .then((station) => setStation(station));
  }, {});

  useEffect(() => {
    fetch(`/city/random/cities`)
      .then((response) => response.json())
      .then((randomCity) => setRandomCity(randomCity));
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
            
          {randomCity && randomCity.map((random) => (
            <tr>
            <td>
              <tr>Flyg</tr>
              </td>
              <td>
              <tr>1500</tr>
              </td>
              <td>
              <tr>100</tr>
              </td>
              <td>{random.name}</td>
              
              <td>
                 <Button class="btn btn-secondary btn-lg" variant="primary" onClick={() => {
                  removeMoney("10");
                  addEnergy("10");
                  setCurrentCity("chicago");
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