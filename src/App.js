import './App.css';
import React from 'react';
import {Header} from './components/Header'; // No need for '.js' extension
import Nav from './components/Nav';
import HeroSection from './components/Hero'; // Ensure correct file name
import InfoCards from './components/Infocards'; // Ensure correct file name
import {FooterLink} from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header
        className="header"
        title=""
        logo="/Logo.svg" 
        />
      <Nav/>
         <main className="main-content">
        <HeroSection/>
        <InfoCards/>
       </main>
       <FooterLink/>
    </div>
  );
}

export default App;