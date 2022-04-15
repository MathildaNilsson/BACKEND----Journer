import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NewGameScreen from "./components/NewGameScreen";
import City from "./components/City";
import Home from "./components/Home";
import EndGameScreen from "./components/EndGameScreen";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/city" exact={true} component={City} />
            <Route path="/newgamescreen" component={NewGameScreen} />
            <Route path="/endgamescreen" component={EndGameScreen} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
