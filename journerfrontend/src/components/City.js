import { useEffect, useState } from "react";
const City = ({}) => {
  let [city, setCity] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/city/getcurrentcity`)
      .then((response) => response.json())
      .then((city) => setCity(city));
  }, {});

  return(
    <>
    <h1>{city && city.name}</h1>
    <button id = "new-game" onClick={(e) => {e.preventDefault(); window.location.href = `/`;}}>Return</button>
    </>
  )
}
export default City;