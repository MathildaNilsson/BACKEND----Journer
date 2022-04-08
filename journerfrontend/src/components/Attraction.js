import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

let category ="";

const Attraction = (props) => {
  const [showQuestions, setShowQuestions] = useState(false);
  const onClick = () => {
    setShowQuestions(true);
  };
  const [showAttractions, setShowAttractions] = useState(true);
  const onClick2 = () => {
    setShowAttractions(false);
  };

  let [question, setquestion] = useState(null);


  /*   useEffect(() => {
    fetch("http://localhost:8080/question/random/5")
      .then((response) => response.json())
      .then((question) => setquestion(question));
  }, []); */

    useEffect(() => {
      console.log(category);
      fetch(`http://localhost:8080/question/categoryname/bangalore palace`)
        .then((response) => response.json())
        .then((question) => setquestion(question));
    },[]);
  

  const checkAnswer = (answer) => {
    if (answer === true) {
      alert("rätt");
    } else {
      alert("fel");
    }
  };

  const Questions = (props) => (
    <div>
      <h1>{question[0].question}</h1>

      <span>
        {question[0].answerList.map((answer) => (
          <Button onClick={(e) => checkAnswer(answer.rightAnswer)}>
            {answer.answer}
          </Button>
        ))}
      </span>
    </div>
  );

  const AttractionButtons = (props) => (
    <div>
      <Button
        variant="primary"
        onClick={(e) => {
          category = (props.city.attractionList[0].name)
          onClick();
          onClick2();
        }}
      >
        {props.city.attractionList[0].name}
      </Button>

      <Button
        variant="primary"
        onClick={(e) => {
          category = (props.city.attractionList[1].name)
          onClick();
          onClick2();
        }}
      >
        {props.city.attractionList[1].name}
      </Button>

      <Button
        variant="primary"
        onClick={(e) => {
          category = (props.city.attractionList[2].name)
          onClick();
          onClick2();
        }}
      >
        {props.city.attractionList[2].name}
      </Button>
    </div>
  );

  return (
    <>
      <h1>attraction</h1>
      <div>
        {showQuestions ? <Questions city = {props.city}/> : null}
        {showAttractions ? <AttractionButtons city = {props.city}/> : null}
      </div>
      <div></div>

      <button
        id="new-game"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = `/`;
        }}
      >
        Return
      </button>
    </>
  );
};
export default Attraction;
