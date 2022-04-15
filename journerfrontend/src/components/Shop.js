import { Button, Table } from "react-bootstrap";
import { useState, useEffect } from "react";

const Shop = (props) => {
  let [playerMoney, setPlayerMoney] = useState("");

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

  useEffect(() => {
    fetch(`/game/displaymoney`)
      .then((response) => response.json())
      .then((playerMoney) => setPlayerMoney(playerMoney));
  }, {});

  const checkMoneySouvenir = (money, item) =>{
    if(money > playerMoney){
      alert("För lite pengar mannen");
    }else{
     removeMoney(money);
     buySouvenir(item);
    }
  };

  const checkMoneyItem = (money, item) =>{
    if(money > playerMoney){
      alert("För lite pengar mannen");
    }else{
     removeMoney(money);
     buyItem(item);
    }
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
                <td><Button onClick={() => {checkMoneySouvenir(1000, props.souvenir);}}>Köp</Button></td>
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
                <td><Button onClick={() => {checkMoneyItem(item.price, item.name);}}>Köp</Button></td>
              </tr>
            </tbody>
          </Table>
        ))}
    </div>
  );
};
export default Shop;
