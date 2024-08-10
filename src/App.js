import './App.css';
import React from 'react';
import {Header} from './components/Header'; // No need for '.js' extension
import Nav from './components/Nav';
import HeroSection from './components/Hero'; // Ensure correct file name
import InfoCards from './components/Infocards'; // Ensure correct file name

function App() {
  return (
    <div className="app">
      <Header  
        className="header"
        title="Little Lemon" 
        logo="/Logo.svg" />
      <Nav/>
         <main className="main-content">
        <HeroSection/>
        <InfoCards/>
       </main> 
    </div>
  );
}

export default App;