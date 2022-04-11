import { useState } from "react";
import { Button } from "react-bootstrap";

const Attraction = (props) => {
  const [showQuestions, setShowQuestions] = useState(false);
  const onClick = () => {
    setShowQuestions(true);
  };

  const [showAttractions, setShowAttractions] = useState(true);
  const onClick2 = () => {
    setShowAttractions(false);
  };

  const checkAnswer = (answer) => {
    if (answer === true) {
      alert("rätt");
    } else {
      alert("fel");
    }
  };

  const Questions = (props) => (
    <div>
 <h1>{props.attraction[0].question}</h1>
{/*       <span>
        {props.attraction.map((answer) => (
          <Button onClick={(e) => checkAnswer(answer.rightAnswer)}>
            {answer.answer}
          </Button>
        ))}
      </span> */}
    </div>
  );

  const AttractionButtons = (props) => (
    <div>
      <Button
        variant="primary"
        onClick={(e) => {
          onClick();
          onClick2();
        }}
      >
        {props.city.attractionList[0].name}
      </Button>

      <Button
        variant="primary"
        onClick={(e) => {
          onClick();
          onClick2();
        }}
      >
        {props.city.attractionList[1].name}
      </Button>

      <Button
        variant="primary"
        onClick={(e) => {
          onClick();
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
