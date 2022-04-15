import { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";

const Accomondations = () => {
  let [accommodation, setAccommodation] = useState("");

  useEffect(() => {
    fetch(`/game/accommodation`)
      .then((response) => response.json())
      .then((accommodation) => setAccommodation(accommodation));
  }, {});

  return (
    <>
      <h1>Accomondations</h1>

      <div id="display-player-stats">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Typ av boende</th>
              <th>Pris</th>
              <th>Energi</th>
              <th>Val</th>
            </tr>
          </thead>
          <tbody>
            {accommodation &&
              accommodation.map((stay) => (
                <tr>
                  <td>{stay.name}</td>
                  <td>{stay.price}:-</td>
                  <td>+ {stay.energyToGain}</td>
                  <td>
                    <Button
                      class="btn btn-secondary btn-lg"
                      variant="primary"
                    >
                      Välj
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};
export default Accomondations;
