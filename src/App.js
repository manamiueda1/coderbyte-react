import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Game from "./Components/TicTacToe";
import Application from "./Components/PhoneBook";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/tictactoe" component={Game} />
            <Route exact path="/phonebook" component={Application} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
