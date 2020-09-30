import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Post from "./Components/Post";
import "./App.css";
function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/posts/:id" component={Post} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
