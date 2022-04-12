import { Button } from "react-bootstrap";

const Shop = (props) => {
  const buyItem = (item) => {
    item = item.toLowerCase();
    fetch(`http://localhost:8080/game/add${item}tobackpack`, {
      method: "POST",
    });
    
      window.location.reload(false)
    alert("Tack för att du drack upp mig, här har du 40 i energi!");
  };

  const buySouvenir = (name) => {
    fetch(`http://localhost:8080/game/addsouvenirtobackpack/${name}`, {
      method: "POST",
    });
  };

  return (
    <div className="container-bg">
      <h1>SHOP</h1>
      Souvenir: {props.souvenir}
      <Button
        onClick={() => {
          buySouvenir(props.souvenir);
        }}
      >
        Buy
      </Button>
      {props.cityShop.map((item) => (
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
