import { useEffect, useState } from "react";
import DisplayPlayer from "./DisplayPlayer";
import { Button, Offcanvas } from "react-bootstrap";
import Shop from "./Shop";
import Attraction from "./Attraction";

const City = ({}) => {
  let [city, setCity] = useState(null);

  //Offcanvas variables
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

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

      <Button variant="primary" onClick={handleShow2
          }>
        Sevärdheter
      </Button>

      <Offcanvas placement="end" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shop</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Shop souvenir = {city && city.souvenir}/>
        </Offcanvas.Body>
      </Offcanvas>

      <Offcanvas placement="top" show={show2} onHide={handleClose2}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Sevärdheter</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Attraction city = {city && city}/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
export default City;
