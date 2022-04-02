const Backpack = () => {

  return(
    <>
    <h1>backpack</h1>
    <button id = "new-game" onClick={(e) => {e.preventDefault(); window.location.href = `/`;}}>Return</button>
    </>
  )
}
export default Backpack;