import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const Shop = (props) => {
  let [data, setdata] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/game/shop")
      .then((response) => response.json())
      .then((data) => setdata(data));
  }, {});

  const buyItem = (item) => {
    item = item.toLowerCase();
    fetch(`http://localhost:8080/game/add${item}tobackpack`, {
      method: "POST",
    });
  };

  return (
    <div id="shop">
      <h1>SHOP</h1>
      Souvenir: {props.souvenir}
      {data &&
        data.map((item) => (
          <tr>
            <th scope="row">{item.name}</th>
            <td>
              {item.price}:-{" "}
              <Button
                onClick={() => {
                  buyItem(item.name);
                }}
              >
                Buy
              </Button>
            </td>
          </tr>
        ))}
    </div>
  );
};
export default Shop;
