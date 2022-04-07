import React from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation.js';
import Intro from './components/intro/Intro.js';
import PortfolioList from './components/portfolioList/PortfolioList.js';
import Contact from './components/contact/Contact.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div>
      <Navigation/>
      <Intro/>
      <PortfolioList/>
      <Contact/>
    </div>
    </Router>
  );
}

export default App;
