import { useEffect, useState } from "react";
import DisplayPlayer from "./DisplayPlayer";
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
    <button id = "new-game" onClick={(e) => {e.preventDefault(); window.location.href = `/`;}}>Return</button>
    </>
  )
}
export default City;