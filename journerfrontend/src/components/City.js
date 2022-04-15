import { useState, useEffect } from "react";
import { Button, Offcanvas, Modal } from "react-bootstrap";
import React, { Component } from "react";
import DisplayPlayer from "./DisplayPlayer";
import Shop from "./Shop";
import Attraction from "./Attraction";
import Quiz from "./Quiz";
import Transportation from "./Transportation";
import Accomondations from "./Accomondations";

class City extends Component {
  render() {
    const { shops: shop } = this.state;
    const { cities: city } = this.state;
    const City = () => {
      let [attraction, setAttraction] = useState(null);
      let [category, setCategory] = useState(null);

      useEffect(() => {
        fetch("question/attractionsbycityname/" + city.name)
          .then((response) => response.json())
          .then((attraction) => setAttraction(attraction));
      }, []);

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

      const [show4, setShow4] = useState(false);
      const handleClose4 = () => setShow4(false);
      const handleShow4 = () => setShow4(true);

      const [show5, setShow5] = useState(false);
      const handleClose5 = () => setShow5(false);
      const handleShow5 = () => setShow5(true);

      return (
        <div className="container-bg">
          <DisplayPlayer />
          <h1>{city.name}</h1>
          <p>{city.cityInfo}</p>
        
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

          <Button variant="primary" onClick={handleShow4}>
            Res vidare
          </Button>

          <Button
            varitant="primary"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = `/endgamescreen`;
            }}
          >
            Exit game
          </Button>

          <Offcanvas placement="end" show={show2} onHide={handleClose2}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Sevärdheter</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Attraction city={city} attraction={attraction} />
            </Offcanvas.Body>
          </Offcanvas>

      <Modal
        show={show3}
        onHide={handleClose3}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="container-bg">Stadsfråga</Modal.Title>
        </Modal.Header>
        <Modal.Body className="container-bg">
        <Quiz city={city} category={category}/>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>

          <Button variant="primary" onClick={handleShow5}>
        Boende
      </Button>
      <Modal
        show={show5}
        onHide={handleClose5}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="container-bg"></Modal.Title>
        </Modal.Header>
        <Modal.Body className="container-bg">
        <Accomondations/>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>

      <Button variant="primary" onClick={handleShow}>
        Shop
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="container-bg"></Modal.Title>
        </Modal.Header>
        <Modal.Body className="container-bg">
        <Shop souvenir={city.souvenir} cityShop={shop} />
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>

          <Offcanvas placement="end" show={show4} onHide={handleClose4}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Res visare</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Transportation city={city} />
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
