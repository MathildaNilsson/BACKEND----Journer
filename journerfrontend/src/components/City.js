import { useEffect, useState } from "react";
import DisplayPlayer from "./DisplayPlayer";
import { Button } from "react-bootstrap";
const City = ({}) => {
  let [city, setCity] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/city/getcurrentcity`)
      .then((response) => response.json())
      .then((city) => setCity(city));
  }, {});

  return(
    <>
    <DisplayPlayer/>
    <h1>{city && city.name}</h1>
    <p>{city && city.cityInfo}</p>
    <Button onClick={(e) => {e.preventDefault(); window.location.href = `/shop`;}}>Shop</Button>
    <button id = "return" onClick={(e) => {e.preventDefault(); window.location.href = `/`;}}>Return</button>
    </>
  )
}
export default City;