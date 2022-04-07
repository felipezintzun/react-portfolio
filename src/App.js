import React from 'react';
import './App.css';
import Intro from './components/intro/Intro.js';
import PortfolioList from './components/portfolioList/PortfolioList.js';
import Contact from './components/contact/Contact.js';

function App() {
  return (
    <div>
      <Intro/>
      <PortfolioList/>
      <Contact/>
    </div>
  );
}

export default App;
