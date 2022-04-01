import { useEffect, useState } from "react";

const Test = () => {
  let [data, setdata] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/question/")
      .then((res) => res.json())
      .then((data) => setdata(data));
  }, {});

  return (
    <div>
      {data &&
        data.map((item) => (
          <tr>
            <th scope="row"> {item.id}</th>
            <td>{item.id}</td>
            <td>{item.question}</td>

            {item.answerList && item.answerList.map((list) => <button>{list.answer}</button>)}
          </tr>


        ))}
    </div>
  );
};
export default Test;
