import { useState } from "react";
import { Button, Table } from "react-bootstrap";

const Attraction = (props) => {
  const [questionNr, setQuestionNr] = useState(0);
  const [showQuestions, setShowQuestions] = useState(false);
  const [showAttractions, setShowAttractions] = useState(true);
  const onClick = (number) => {

      if(props.player && props.player.energy < 30){
        alert("För lite Energi mannen");
      }else{
        setQuestionNr(number);
        setShowQuestions(true);
        setShowAttractions(false);
      }
  };

  const addMoney = (money) => {
    fetch(`http://localhost:8080/game/addmoney/${money}`, {
      method: "POST",
    }).then((response) => response.json());
  };

  const removeEnergy = (energy) => {
    fetch(`http://localhost:8080/game/removeenergy/${energy}`, {
      method: "POST",
    }).then((response) => response.json());
  };

  const checkAnswer = (answer) => {
    if (answer === true) {
      removeEnergy(10);
      addMoney(1000);
      alert("Rätt");
    } else {
      removeEnergy(10);
      alert("Fel");
    }
  };

  const Questions = (props) => (
    <div>
      <h1>{props.attraction[questionNr].question}</h1>
      {showQuestion(props.attraction[questionNr])}
    </div>
  );

  const showQuestion = (props) => {
    return (
      <span>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Svar</th>
              <th>Välj Svar</th>
            </tr>
          </thead>
          <tbody>
            {shuffleArray(props).map((answer) => (
              <tr key={Math.random()}>
                <td>{answer.answer}</td>
                <th>
                  <Button
                    onClick={(e) => (
                      checkAnswer(answer.rightAnswer),
                      setQuestionNr((prevState) => prevState + 1),
                      checkQuestion()
                    )}
                  >
                    Välj svar
                  </Button>
                </th>
              </tr>
            ))}
          </tbody>
        </Table>
      </span>
    );
  };

  const checkQuestion = () => {
    if (questionNr === 2) {
      setQuestionNr(1);
      setShowAttractions(true);
      setShowQuestions(false);
      window.location.reload(false);
    } else if (questionNr === 5) {
      setQuestionNr(1);
      setShowAttractions(true);
      setShowQuestions(false);
      window.location.reload(false);
    } else if (questionNr === 8) {
      setQuestionNr(1);
      setShowAttractions(true);
      setShowQuestions(false);
      window.location.reload(false);
    }
  };

  const shuffleArray = (props) => {
    return props.answerList
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  };

  const AttractionButtons = (props) => (
    <div>
      <Table striped bordered hover>
        <thead></thead>
        <tbody>
          <tr>
            <th>
              {" "}
              <Button
                variant="primary"
                onClick={(e) => {
                  onClick(0);
                }}
              >
                {props.city.attractionList[0].name}
              </Button>
            </th>
            <th>
              {" "}
              <Button
                variant="primary"
                onClick={(e) => {
                  onClick(3);
                }}
              >
                {props.city.attractionList[1].name}
              </Button>
            </th>

            <th>
              <Button
                variant="primary"
                onClick={(e) => {
                  onClick(6);
                }}
              >
                {props.city.attractionList[2].name}
              </Button>
            </th>
          </tr>
        </tbody>
      </Table>
    </div>
  );

  return (
    <div className="container-bg">
      <div>
        {showQuestions ? <Questions attraction={props.attraction} /> : null}
        {showAttractions ? <AttractionButtons city={props.city} /> : null}
      </div>
    </div>
  );
};

export default Attraction;
