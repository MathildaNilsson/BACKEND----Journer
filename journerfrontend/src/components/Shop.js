import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import DisplayPlayer from "./DisplayPlayer";

const Shop = () => {
  let [data, setdata] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/game/shop")
      .then((response) => response.json())
      .then((data) => setdata(data));
  }, {});

  const buyItem = (item) =>{
    
    item = item.toLowerCase();
    fetch(`http://localhost:8080/game/add${item}tobackpack`, {

    method: "POST",
})}

  return(
    <>
    <DisplayPlayer />
    <h1>SHOP</h1>
    <div id = "shop">
      {data &&
        data.map((item) => (
          <tr>
            <th scope="row">{item.name}</th>
            <td>{item.price}:- <Button onClick={() => {window.location.reload();buyItem(item.name)}}>Buy</Button></td>
          </tr>
        ))}
    </div>
    
    <button id = "new-game" onClick={(e) => {e.preventDefault(); window.location.href = `/`;}}>Return</button>
    </>
  )
}
export default Shop;