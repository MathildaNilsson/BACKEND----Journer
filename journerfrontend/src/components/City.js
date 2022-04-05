import { useEffect, useState } from "react";
import DisplayPlayer from "./DisplayPlayer";
import { Button, Offcanvas } from "react-bootstrap";
import Shop from "./Shop";

const City = ({}) => {
  let [city, setCity] = useState(null);

  //Offcanvas variables
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    fetch(`http://localhost:8080/city/getcurrentcity`)
      .then((response) => response.json())
      .then((city) => setCity(city));
  }, {});

  return (
    <>
      <DisplayPlayer />
      <h1>{city && city.name}</h1>
      <p>{city && city.cityInfo}</p>
      <Button variant="primary" onClick={handleShow}>
        Shop
      </Button>
      <button
        id="return"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = `/`;
        }}
      >
        Return
      </button>

      <Offcanvas placement="end" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shop</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Shop souvenir = {city && city.souvenir}/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
export default City;
