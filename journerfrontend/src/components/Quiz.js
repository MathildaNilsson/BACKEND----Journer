import { useEffect, useState } from "react";

const Quiz = () => {
  let [question, setquestion] = useState(null);
  let [check, setcheck] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/question/random/5")
      .then((response) => response.json())
      .then((question) => setquestion(question));
  }, {});

  const checkAnswer = (answer) =>{
    if(answer === true){
     setcheck("True");
    }else{
     setcheck("False");
    }
  }

  return (<div>
    {question && question.question}
    
    <tr>
    {question && question.answerList.map((answer) => <div>{answer.answer} <button onClick={e => checkAnswer(answer.rightAnswer)} id={answer.id}> Click me</button></div>)}
    </tr>

    <div>Svar: {check}</div>
  </div>
  );
};
export default Quiz;
