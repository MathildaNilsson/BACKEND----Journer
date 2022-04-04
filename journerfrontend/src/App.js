import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css";
import Test from "./components/Test";
import Quiz from "./components/Quiz"
import Startscreen from "./components/Startscreen"
import NewGameScreen from "./components/NewGameScreen";
import Accomondations from "./components/Accomondations";
import Attraction from "./components/Attraction";
import Backpack from "./components/Backpack";
import Shop from "./components/Shop";
import Transportation from "./components/Transportation";
import City from "./components/City";
import { useEffect, useState} from "react";

function App() {

  return <div className="App">
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Startscreen/>}/>
      <Route path="/quiz" element={<Quiz/>}/>
      <Route path ="/newgamescreen" element={<NewGameScreen/>}/>
      <Route path ="/city" element={<City/>}/>
      <Route path="/accomondations" element={<Accomondations/>}/>
      <Route path="/attraction" element={<Attraction/>}/>
      <Route path="/backpack" element={<Backpack/>}/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/transportation" element={<Transportation/>}/>
    </Routes>
    </BrowserRouter>
    </div>;
}

export default App;
