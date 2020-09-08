import React from 'react';
import './App.css';
// import "holderjs";

import Navigation from './components/Navbar'
import Banner from './components/Banner'
import Footer from './components/Footer';
import Home from './components/Home'
import About from "./components/About";
import Downloads from "./components/Downloads";
import Notfound from './components/Notfound'
import UnderConstruction from './components/Notfound/UnderConstruction'
import News from "./components/News";
import ShowNews from "./components/News/ShowNews"
import Specialist from "./components/Specialist";
import {GalleryPage, ShowGallery} from "./components/Gallery";

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
          <Route path='/specialist' component={Specialist} />
          <Route exact path='/downloads' component={Downloads} />
          <Route exact path='/news' component={News} />
          <Route path='/news/:id' component={ShowNews} />
          <Route exact path='/gallery' component={GalleryPage} />
          <Route path='/gallery/:id' component={ShowGallery} />

          <Route path='/clinic' component={UnderConstruction} />
          <Route path='/services' component={UnderConstruction} />
          <Route path='/project' component={UnderConstruction} />
        </div>
      </Router>
      {/* <Home /> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
