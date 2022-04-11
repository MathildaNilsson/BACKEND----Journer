import { useState, useEffect } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import React, { Component } from "react";
import DisplayPlayer from "./DisplayPlayer";
import Shop from "./Shop";
import Attraction from "./Attraction";
import Quiz from "./Quiz";

class City extends Component {
  render() {
    const { shops: shop } = this.state;
    const { cities: city } = this.state;
    const City = () => {

      let [attraction, setAttraction] = useState(null);
      let [category, setCategory] = useState(null);

      useEffect(() => {
        fetch("question/attractionsbycityname/"+city.name)
          .then((response) => response.json())
          .then((attraction) => setAttraction(attraction));
          
      },[]);

      useEffect(() => {
        fetch(`question/categoryid/${city.name}`)
          .then((response) => response.json()) 
          .then((category) => setCategory(category));
      }, []);

      const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

      const [show2, setShow2] = useState(false);
      const handleClose2 = () => setShow2(false);
      const handleShow2 = () => setShow2(true);

      const [show3, setShow3] = useState(false);
      const handleClose3 = () => setShow3(false);
      const handleShow3 = () => setShow3(true);

      return (
        <div className="container-bg">
          <DisplayPlayer />
          <h1>{city.name}</h1>
          <p>{city.cityInfo}</p>
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

          <Button variant="primary" onClick={handleShow2}>
            Sevärdheter
          </Button>

          <Button variant="primary" onClick={handleShow3}>
            Stadsfråga
          </Button>

          <Offcanvas placement="end" show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Shop</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Shop souvenir={city.souvenir} cityShop={shop} />
            </Offcanvas.Body>
          </Offcanvas>

          <Offcanvas placement="top" show={show2} onHide={handleClose2}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Sevärdheter</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Attraction city={city} attraction={attraction} />
            </Offcanvas.Body>
          </Offcanvas>

          <Offcanvas className="container-bg" placement="end" show={show3} onHide={handleClose3}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>{city.name}</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Quiz city={city} category={category}/>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      );
    };

    return <City />;
  }

  constructor(props) {
    super(props);
    this.state = { cities: [] };
  }

  componentDidMount() {
    fetch("/city/getcurrentcity/")
      .then((response) => response.json())
      .then((city) => this.setState({ cities: city }));
    fetch("/game/shop/")
      .then((response) => response.json())
      .then((shop) => this.setState({ shops: shop }));
  }

}
export default City;
