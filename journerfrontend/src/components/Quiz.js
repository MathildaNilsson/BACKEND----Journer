import { useEffect, useState } from "react";
import { Button, Table} from "react-bootstrap";

const Quiz = (props) => {
  let [question, setQuestion] = useState(null);
  let [check, setcheck] = useState("");
 

 
   useEffect(() => {
    fetch(`http://localhost:8080/question/random/${props.category}`)
      .then((response) => response.json())
      .then((question) => setQuestion(question));
  }, {});

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

 

  const checkAnswer = (answer) =>{
    if(answer === true){
     setcheck("Rätt");
     removeEnergy(5);
     addMoney(50);
     window.location.reload(false)
     alert("Rätt");
    }else{
     setcheck("Fel");
     removeEnergy(5);
     window.location.reload(false)
     alert(`Fel`);
   
    }
  };

  return (
    <div className="container-bg">
      {question && question.question}

      <tr>
        {question &&
          question.answerList.map((answer) => (
            <div>
              {answer.answer}{" "}
              <button
                onClick={(e) => checkAnswer(answer.rightAnswer)}
                id={answer.id}
              >
                {" "}
                Click me
              </button>
            </div>
          ))}
      </tr>

      <div>Svar: {check}</div>
      <button
        id="new-game"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = `/City`;
        }}
      >
        Return
      </button>
    </div>
  // return (<div className = "container-bg">
    
  //   <h1>{question && question.question}</h1>


  //   <Table striped bordered hover>
  //           <thead>
  //             <tr>
  //               <th>Svar</th>
  //               <th>Välj Svar</th>
  //             </tr>
  //           </thead>
  //           <tbody>
  //           {question && question.answerList.map((answer) => (
  //             <tr>
  //               <td>{answer.answer}</td>
  //               <th><Button onClick={e => checkAnswer(answer.rightAnswer)} id={answer.id} > Välj svar</Button></th>
  //             </tr>
  //              ))}
  //           </tbody>
  //         </Table>

  //   {/*<div><h1>Svar: {check}</h1></div>
  //   <button id = "new-game" onClick={(e) => {e.preventDefault(); window.location.href = `/City`;}}>Nästa</button> */}
  // </div>
  );
};
  
export default Quiz;
