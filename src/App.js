import React from 'react';
import './App.css';
import Intro from './components/intro/Intro.js';
import PortfolioList from './components/portfolioList/PortfolioList.js';

function App() {
  return (
    <div>
      <Intro/>
      <PortfolioList/>
    </div>
  );
}

export default App;
