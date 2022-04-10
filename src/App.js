import React from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation.js';
import Intro from './components/intro/Intro.js';
import PortfolioList from './components/portfolioList/PortfolioList.js';
import Contact from './components/contact/Contact.js';
import Footer from './components/footer/Footer.js';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
  
    <div>
      <Navigation />

      <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/Projects" element={<PortfolioList />} />
      <Route path="/Contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
   
  );
}

export default App;
