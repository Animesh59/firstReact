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
      // document.title = "Radhe";
      setMsg("success")
      setTitle("nath");
    }
    else {
      setMode("dark")
      setTextcolor("rgb(255 255 255 / 55%)");
      // document.title = "Krishna";
      setTitle("gopi");
      setMsg("success")
    }
    setTimeout(() => {
      setMsg(null);
    }, 1500);
  }

  const [title, setTitle] = useState("hare");

  //message
  const [msg, setMsg] = useState(null);

  return (
    <>
      <head>
        <meta charset="utf-8" />
        {/* <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Web site created using create-react-app" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" /> */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossOrigin="anonymous" />
        <title>{title}</title>
      </head>

      <body data-bs-theme={mode}>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div>
          {/* <h1>Hello from body</h1> */}
          <Router>
            <Navbar mode={mode} textcolor={textcolor} toggleMode={toggleMode} msg={msg} />
            <div className="container">
              <Switch>
                <Route exact path='/'>
                  {console.log('root page')}
                  <Home />
                </Route>
                <Route path='/about'>
                  <About />
                </Route>
                <Route path='/services'><TextField />
                </Route>
              </Switch>
            </div>
          </Router >
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
          crossOrigin="anonymous"></script>
      </body>
    </>
  );
}

export default App;
