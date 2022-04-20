import { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
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
      let [player, setPlayer] = useState(null);

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

      useEffect(() => {
        fetch(`/game/getplayer/`)
          .then((response) => response.json())
          .then((player) => setPlayer(player));
      }, []);

      const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

      const [show2, setShow2] = useState(false);
      const handleClose2 = () => setShow2(false);
      const handleShow2 = () => 
          setShow2(true);


      const [show3, setShow3] = useState(false);
      const handleClose3 = () => setShow3(false);
      const handleShow3 = () => {

        if(player && player.energy < 10){
          alert("För lite Energi mannen");
        }else{
          setShow3(true);
        }
    };

      const [show4, setShow4] = useState(false);
      const handleClose4 = () => setShow4(false);
      const handleShow4 = () => setShow4(true);

      const [show5, setShow5] = useState(false);
      const handleClose5 = () => setShow5(false);
      const handleShow5 = () => setShow5(true);

      const buttonGroup = () => {
        return (
          <>

            <Button variant="primary" onClick=
            
            {handleShow2}>
              Sevärdheter
            </Button>

            <br/>

            <Button variant="primary" onClick={handleShow3}>
              Stadsfråga
            </Button>

            <br/>

            <Button variant="primary" onClick={handleShow4}>
              Res vidare
            </Button>
            <br/>

            <Button variant="primary" onClick={handleShow5}>
              Boende
            </Button>
            <br/>

            <Button variant="primary" onClick={handleShow}>
              Shop
            </Button>
            <br/>
            <Button 
              variant="danger"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = `/endgamescreen`;
              }}
            >
              Exit game
            </Button>
          </>
        );
      };

      return (
        <div className="container">
          <div className="div1" id="displayPlayer">
            <DisplayPlayer />
          </div>
          <div className="div4">{buttonGroup()}</div>
          <div className="div5">
            <div className="container-bg">
              <h1>{city.name}</h1>
              <h4>{city.cityInfo}</h4>

              <Modal
                show={show2}
                onHide={handleClose2}
                backdrop="static"
                keyboard={false}
              >
                <Modal.Header closeButton>
                  <Modal.Title className="container-bg">Sevärdheter</Modal.Title>
                </Modal.Header>
                <Modal.Body className="container-bg">
                  <Attraction city={city} player={player && player} attraction={attraction} />
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
              </Modal>

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
                  <Quiz city={city} category={category} />
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
              </Modal>

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
                  <Accomondations />
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
              </Modal>

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
                <Modal.Footer></Modal.Footer>
              </Modal>

              <Modal
                show={show4}
                onHide={handleClose4}
                backdrop="static"
                keyboard={false}
              >
                <Modal.Header closeButton>
                  <Modal.Title className="container-bg"></Modal.Title>
                </Modal.Header>
                <Modal.Body className="container-bg">
                <Transportation city={city} />
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
              </Modal>
            </div>
          </div>
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
