import { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
const Backpack = (props) => {
  let drinks = props.player.backpack.filter((drink) => drink.name === "Energydrink");

  const removeItem = (item) => {
    fetch(`/game/removeitemfrombackpack/${item}`, {
      method: "POST",
    }).then((response) => response.json());
    window.location.reload(false)
    alert("Tack för att du drack upp mig, här har du 40 i energi!");
  };
  
  return (
    
    <>
    {console.log(drinks)}
      <h1>Ryggsäck</h1>
      {drinks.map((test) => (
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
                <td>{test.name}</td>
                <td>{test.energy}</td>
                <td><Button onClick={() => {removeItem(test.name)}}>Use</Button></td>
              </tr>
            </tbody>
          </Table>
        ))}

 {/* {player &&
        player.backpack.map((list) => (
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
                <td>{list.name}</td>
                <td>{list.energy}</td>
                <td><Button onClick={() => {removeItem(list.name)}}>Use</Button></td>
              </tr>
            </tbody>
          </Table>
          ))}

 {player &&
        player.backpack.map((list) => (
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
                <td>{list.name}</td>
                <td>{list.energy}</td>
                <td><Button onClick={() => {removeItem(list.name)}}>Use</Button></td>
              </tr>
            </tbody>
          </Table>
          ))} */}
    </>
  );
        };
export default Backpack;
