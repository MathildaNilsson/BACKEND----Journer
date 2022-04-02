const NewGameScreen = () => {
  return (
    <>
    <h1>New game screen</h1>
    <button id = "new-game" onClick={(e) => {e.preventDefault(); window.location.href = `/`;}}>Return</button>
    </>
  )
}
export default NewGameScreen;