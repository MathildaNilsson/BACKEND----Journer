import { useEffect, useState } from "react";
import Startscreen  from "./Startscreen";

const Quiz = (props) => {
  let [question, setquestion] = useState(null);
  let [check, setcheck] = useState("");


  useEffect(() => {
    fetch(`http://localhost:8080/question/random/${props.category}`)
      .then((response) => response.json())
      .then((question) => setquestion(question));
  }, {});

  const addMoney = (money) =>{
    fetch(`http://localhost:8080/game/addmoney/${money}`, {
      method: "POST",
    }).then((response) => response.json());
  };

  const removeEnergy = (energy) =>{
    fetch(`http://localhost:8080/game/removeenergy/${energy}`,{
      method: "POST",
    }).then((response) => response.json());
  };


  const checkAnswer = (answer) =>{
    if(answer === true){
     setcheck("True");
     removeEnergy(5);
     addMoney(50);
    }else{
     setcheck("False");
     removeEnergy(5);
    }
  }

  return (<div className = "container-bg">
    
    {question && question.question} 

    <tr>
    {question && question.answerList.map((answer) => <div>{answer.answer} <button onClick={e => checkAnswer(answer.rightAnswer)} id={answer.id}> Click me</button></div>)}
    </tr>

    <div>Svar: {check}</div>
    <button id = "new-game" onClick={(e) => {e.preventDefault(); window.location.href = `/City`;}}>Return</button>
  </div>
  );
};
export default Quiz;
