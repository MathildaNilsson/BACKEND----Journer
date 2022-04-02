const City = () => {

  return(
    <>
    <h1>city</h1>
    <button id = "new-game" onClick={(e) => {e.preventDefault(); window.location.href = `/`;}}>Return</button>
    </>
  )
}
export default City;