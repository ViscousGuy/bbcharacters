import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";
import Character from "./pages/character/character.component";
import NotFound from "./pages/notfound/notfound.component";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/character" component={Character} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
