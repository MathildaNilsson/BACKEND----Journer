const Attraction = () => {

  return(
    <>
    <h1>attraction</h1>
    <button id = "new-game" onClick={(e) => {e.preventDefault(); window.location.href = `/`;}}>Return</button>
    </>
  )
}
export default Attraction;