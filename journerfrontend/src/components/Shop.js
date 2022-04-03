import { useEffect, useState } from "react";

const Shop = () => {
  let [data, setdata] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/game/shop")
      .then((response) => response.json())
      .then((data) => setdata(data));
  }, {});

  return(
    <>
    <h1>SHOP</h1>
    <div id = "shop">
      {data &&
        data.map((item) => (
          <tr>
            <th scope="row">{item.name}</th>
            <td>{item.price}:- <button>Buy</button></td>
          </tr>
        ))}
    </div>
    
    <button id = "new-game" onClick={(e) => {e.preventDefault(); window.location.href = `/`;}}>Return</button>
    </>
  )
}
export default Shop;