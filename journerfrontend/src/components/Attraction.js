import { useState } from "react";
import { Button, Table } from "react-bootstrap";

const Attraction = (props) => {
  const [questionNr, setQuestionNr] = useState(0);
  const [showQuestions, setShowQuestions] = useState(false);
  const [showAttractions, setShowAttractions] = useState(true);
  const onClick = (number) => {
    setQuestionNr(number);
    setShowQuestions(true);
    setShowAttractions(false);
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
      removeEnergy(5);
      addMoney(5);
      alert("rätt");
    } else {
      removeEnergy(5);
      alert("fel");
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
        {shuffleArray(props).map((answer) => (
          <Button
            onClick={(e) => (
              checkAnswer(answer.rightAnswer),
              setQuestionNr((prevState) => prevState + 1),
              checkQuestion()
            )}
          >
            {answer.answer}
          </Button>
        ))}
      </span>
    );
  };

  const checkQuestion = () => {
    if (questionNr === 2) {
      setQuestionNr(1);
      setShowAttractions(true);
      setShowQuestions(false);
    }else if(questionNr === 5){
      setQuestionNr(1);
      setShowAttractions(true);
      setShowQuestions(false);
    }else if(questionNr === 8){
      setQuestionNr(1);
      setShowAttractions(true);
      setShowQuestions(false);
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
      <Button
        variant="primary"
        onClick={(e) => {
          onClick(0);
        }}
      >
        {props.city.attractionList[0].name}
      </Button>

      <Button
        variant="primary"
        onClick={(e) => {
          onClick(3);
        }}
      >
        {props.city.attractionList[1].name}
      </Button>

      <Button
        variant="primary"
        onClick={(e) => {
          onClick(6);
        }}
      >
        {props.city.attractionList[2].name}
      </Button>
    </div>
  );

  return (
    <div className="container-bg">
      <Table striped bordered hover>
            <thead>
              <tr>
              
              </tr>
            </thead>
            <tbody>
              <tr>
              <th>{showQuestions ? <Questions attraction={props.attraction} /> : null}</th>
            <th>{showAttractions ? <AttractionButtons city={props.city} /> : null}</th>
            </tr>
            </tbody>
          </Table>
      <div>
        {/* {showQuestions ? <Questions attraction={props.attraction} /> : null} */}
        {/* {showAttractions ? <AttractionButtons city={props.city} /> : null} */}
      </div>
      <div></div>
    </div>
  );
};

export default Attraction;
