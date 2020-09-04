import React from 'react';
import './App.css';

import Navigation from './components/Navbar'
import Banner from './components/Banner'
import Footer from './components/Footer';
// import { Container } from 'react-bootstrap';
import Home from './components/Home'
import About from "./components/About";
import Downloads from "./components/Downloads";
import Notfound from './components/Notfound'

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Banner />
      <Router>
        <Navigation />
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/clinic' component={Notfound} />
          <Route path='/services' component={Notfound} />
          <Route path='/specialist' component={Notfound} />
          <Route path='/downloads' component={Downloads} />
          <Route path='/project' component={Notfound} />
          <Route path='/contactus' component={Notfound} />
        </div>
      </Router>
      {/* <Home /> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
