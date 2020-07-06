import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
//import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav";
import Main from "./components/Main";
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"

function App() {
  return (
    <Router>
    <div>
      <Nav/>
      <Main>
        <Route exact path="/" component={About}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/projects" component={Projects}/>
        <Route exact path="/contact" component={Contact}/>
      </Main>
    </div>
    </Router>
  );
}

export default App;
