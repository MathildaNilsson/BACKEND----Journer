import { Table, Button } from "react-bootstrap";
const Backpack = (props) => {
  let drinks = props.player.backpack.filter(
    (drink) => drink.name == "Energydrink"
  );
  let pepperspray = props.player.backpack.filter(
    (spray) => spray.name == "Pepperspray"
  );
  let souvenir = props.player.backpack.filter(
    (souvenir) =>
      souvenir.name !== "Pepperspray" && souvenir.name !== "Energydrink"
  );

  const removeItem = (item) => {
    fetch(`/game/removeitemfrombackpack/${item}`, {
      method: "POST",
    }).then((response) => response.json());
    window.location.reload(false);
    alert(`Du har nu använt din ${item}`);
  };

  return (
    <>
      <h1>Ryggsäck</h1>
      {drinks.map((drink) => (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Namn</th>
              <th>Energi</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{drink.name}</td>
              <td> + 35</td>
              <td>
                <Button
                  onClick={() => {
                    removeItem(drink.name);
                  }}
                >
                  Use
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      ))}

      {pepperspray.map((spray) => (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Namn</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{spray.name}</td>
              <td>
                <Button
                  onClick={() => {
                    removeItem(spray.name);
                  }}
                >
                  Use
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      ))}

      {souvenir.map((souvenir) => (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Souvenir</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{souvenir.name}</td>
            </tr>
          </tbody>
        </Table>
      ))}
    </>
  );
};
export default Backpack;
