import City from "./City";

const Transportation = (props) => {

  return(
    <>
    <h1>Vart vill du resa nu?</h1>
    <button id = "new-game" onClick={(e) => {e.preventDefault(); window.location.href = `/City`;}}>Tillbaka till {props.city.name}</button>
    </>
  )
}
export default Transportation;