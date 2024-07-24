import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Navbar from './component/Navbar';
import Home from "./component/Home";
import About from "./component/About";
import TextField from './component/TextField';

function App() {
  return (
    <>
      <div className="container">
        <Router>
          <Navbar />
          <Switch>
            <Route path='/about'>
              {console.log('about page is here')}
              <About />
            </Route>
            <Route path='/services'>
              <TextField />
            </Route>
            <Route path='/'>
              {console.log('home page is here')}
              <Home />
            </Route>
          </Switch>
        </Router >
      </div>
    </>
  );
}

export default App;
