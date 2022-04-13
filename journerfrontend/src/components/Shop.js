import { Button, Table } from "react-bootstrap";

const Shop = (props) => {

  const buyItem = (item) => {
    item = item.toLowerCase();
    fetch(`http://localhost:8080/game/add${item}tobackpack`, {
      method: "POST",
    });
      window.location.reload(false)
    alert("Tack för ditt köp, din vara finns nu i din ryggsäck!");
  };

  const buySouvenir = (name) => {
    fetch(`http://localhost:8080/game/addsouvenirtobackpack/${name}`, {
      method: "POST",
    });
    window.location.reload(false)
    alert("Tack för ditt köp, din vara finns nu i din ryggsäck!");
  };

  const removeMoney = (money) =>{
    fetch(`http://localhost:8080/game/removemoney/${money}`, {
      method: "POST",
    }).then((response) => response.json());
  };

  return (
    <div className="container-bg">
      <h1>SHOP</h1>

      <Table striped bordered hover>
            <thead>
              <tr>
                <th>Souvenir</th>
                <th>Pris</th>
                <th>Köp</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{props.souvenir}</td>
                <th>{1000} :-</th>
                <td><Button onClick={() => {buySouvenir(props.souvenir);
          removeMoney(1000);}}>Köp</Button></td>
              </tr>
            </tbody>
          </Table>
  

      {props.cityShop.map((item) => (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Namn</th>
                <th>Pris</th>
                <th>Köp</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{item.name}</td>
                <th>{item.price} :-</th>
                <td><Button onClick={() => {buyItem(item.name);
                removeMoney(item.price);}}>Köp</Button></td>
              </tr>
            </tbody>
          </Table>
        ))}
    </div>
  );
};
export default Shop;
