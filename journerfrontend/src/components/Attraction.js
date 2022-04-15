import { useState } from "react";
import { Button } from "react-bootstrap";

const Attraction = (props) => {
  const [test, setTest] = useState(4);
  const [showQuestions, setShowQuestions] = useState(false);
  const onClick = (number) => {
    randomizeQuestion(number);

    setShowQuestions(true);
  };

  const randomizeQuestion = (number) => {
    if (number === 0) {
      //number = Math.floor(Math.random() * 3);
      setTest(number);
    } else if (number === 1) {
      number += 2;
      //number = Math.floor((Math.random() * 3)+3);
      setTest(number);
    } else if (number === 2) {
      number += 4;
      //number = Math.floor((Math.random() * 3)+6);
      setTest(number);
    }
    return number;
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

  const [showAttractions, setShowAttractions] = useState(true);
  const onClick2 = () => {
    setShowAttractions(false);
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
      <h1>{props.attraction[test].question}</h1>
      <h1>{props.attraction[test].id}</h1>
      {showQuestion(props.attraction[test])}
    </div>
  );

  const showQuestion = (props) => {
    return (
      <span>
        {props.answerList.map((answer) => (
          <Button onClick={(e) => checkAnswer(answer.rightAnswer)}>
            {answer.answer}
          </Button>
        ))}
      </span>
    );
  };

  const AttractionButtons = (props) => (
    <div>
      <Button
        variant="primary"
        onClick={(e) => {
          onClick(0);
          onClick2();
        }}
      >
        {props.city.attractionList[0].name}
      </Button>

      <Button
        variant="primary"
        onClick={(e) => {
          onClick(1);
          onClick2();
        }}
      >
        {props.city.attractionList[1].name}
      </Button>

      <Button
        variant="primary"
        onClick={(e) => {
          onClick(2);
          onClick2();
        }}
      >
        {props.city.attractionList[2].name}
      </Button>
    </div>
  );

  return (
    <div className="container-bg">
      <h1>attraction</h1>
      <div>
        {props.city.name}
        {showQuestions ? <Questions attraction={props.attraction} /> : null}
        {showAttractions ? <AttractionButtons city={props.city} /> : null}
      </div>
      <div></div>

      {/*       <button
        id="new-game"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = `/`;
        }}
      >
        Return
      </button> */}
    </div>
  );
};

export default Attraction;
