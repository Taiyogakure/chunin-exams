import './App.css';
import React, { Component } from "react";
import SignUp from "./Components/SignUp";
import Feedback from "./Components/Feedback";
import Login from "./Components/Login";
import Test from "./Components/Test";
import Dashboard from "./Components/Dashboard";
import { BrowserRouter, Route, Switch } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <main>
        <switch>
          <Route path='/' component={SignUp} exact />
          <Route path='/Feedback' component={Feedback} />
          <Route path='/Login' component={Login} />
          <Route path='/Test' component={Test} />
          <Route path='/Dashboard' component={Dashboard} />
        </switch>
      </main>

    )
  }
}

export default App;
