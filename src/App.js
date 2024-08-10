import './App.css';
import React from 'react';
import Header from './components/Header'; // Corrected import path
import Nav from './components/Nav';       // Corrected import path
import HeroSection from './components/Hero';
import InfoCards from './components/InfoCards';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header
        title="Little Lemon"
        logo="public/Logo.svg"
      />
      <Nav />
      <main>
        <HeroSection />
        <InfoCards />
      </main>
      <Footer />
    </div>
  );
}

export default App;