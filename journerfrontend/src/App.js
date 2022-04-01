import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css";
import Test from "./components/Test";
import Quiz from "./components/Quiz"
import Startscreen from "./components/Startscreen"

function App() {
  return <div className="App">
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Startscreen/>}/>
      <Route path="/quiz" element={<Quiz/>}/>
    </Routes>
    </BrowserRouter>
    </div>;
}

export default App;
