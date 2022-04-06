import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const Attraction = (props) => {
  let [categoryQuestion, setCategoryQuestion] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/question/categoryname/bangalore palace`)
      .then((response) => response.json())
      .then((categoryQuestion) => setCategoryQuestion(categoryQuestion));
  }, {});

  return(
    <>
    <h1>attraction</h1>
    {categoryQuestion && categoryQuestion.map((question) => <div>
      {question.question}
    </div>)}

   <div>
     hahaha
   
   </div>
    
    


    <Button variant="primary">
        
      </Button>

      <Button variant="primary" >
      
      </Button>

      <Button variant="primary" >
      
      </Button>




    <button id = "new-game" onClick={(e) => {e.preventDefault(); window.location.href = `/`;}}>Return</button>
    </>
  )
}
export default Attraction;