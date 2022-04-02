const City = ({cityobj}) => {


  return(
    <>
    <h1>{cityobj && cityobj.name}</h1>
    <button id = "new-game" onClick={(e) => {e.preventDefault(); window.location.href = `/`;}}>Return</button>
    </>
  )
}
export default City;