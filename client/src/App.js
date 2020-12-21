import './App.css';
import React, { Component } from "react";
import SignUp from "./Components/SignUp";
import Feedback from "./Components/Feedback";
import Login from "./Components/Login";
import Test from "./Components/Test";
import { BrowserRouter, Route, Switch } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <main>
        <switch>
          <Route path='/' component={SignUp} exact />
          <Route path='/Components/Feedback' component={Feedback} />
          <Route path='/Components/Login' component={Login} />
          <Route path='/Components/Test' component={Test} />
        </switch>
      </main>

    )
  }
}

export default App;
