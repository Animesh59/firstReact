import React, { useState } from "react";
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
  const [mode, setMode] = useState("light");
  const [textcolor, setTextcolor] = useState("rgb(0 0 0 / 65%)");

  function toggleMode() {
    if (mode === "dark") {
      setMode("light");
      setTextcolor("rgb(0 0 0 / 65%)");
    }
    else {
      setMode("dark")
      setTextcolor("rgb(255 255 255 / 55%)");
    }
  }
  return (
    <>
      <Router>
        <Navbar mode={mode} textcolor={textcolor} toggleMode={toggleMode} />
        <div className="container">
          <Switch>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/services'><TextField />
            </Route>
            <Route path='/'>
              {console.log('root page')}
              <Home />
            </Route>
          </Switch>
        </div>
      </Router >
    </>
  );
}

export default App;
