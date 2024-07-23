import React from "react";
import {
  BrowserRouter as Router,
  Routes,
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
          <Routes>
            <Route path='/' element={<> <Home /> </>} exact />
            <Route path='/about' element={<> <About /> </>} exact />
            <Route path='/services' element={<> <TextField /> </>} exact />
          </Routes>
        </Router >
      </div>
    </>
  );
}

export default App;
