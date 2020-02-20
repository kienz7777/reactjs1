import React, { Component } from 'react';
import './../css/App.css';


import Nav from './Nav.js';
// import Home from './Home.js';
import Footer from './Footer.js';
// import News from './News';
// import NewsDetail from './NewsDetail.js';
// import Contact from './Contact';
import DieuHuongURL from '../router/DieuHuongURL';
// import { Route } from 'react-router-dom';


import {
  BrowserRouter as Router
  

} from "react-router-dom";



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          {/* <Home/>
        <News/>
        <NewsDetail/>
        <Contact/> */}
          <DieuHuongURL />
          <Footer />
        </div>
      </Router>

    );
  }
}


export default App;
