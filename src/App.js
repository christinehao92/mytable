import './App.css';
import React from 'react';
import {Header} from './components/Header'; // No need for '.js' extension
import Nav from './components/Nav';
import HeroSection from './components/Hero'; // Ensure correct file name
import InfoCards from './components/Infocards'; // Ensure correct file name
import {FooterLink} from './components/Footer';
import DrawerComponent from './components/DrawerComponent';
import { useDisclosure } from '@chakra-ui/react'


function App() {
  // Define submitForm function here or import if it's defined elsewhere
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Form submitted');
    onClose();
  };

  return (
    <div className="app">
      <Header
        className="header"
        title=""
        logo="/Logo.svg"
      />
      <Nav onOpen={onOpen}/>
      <main className="main-content">
        <HeroSection onOpen={onOpen}/>
        <InfoCards />
      </main>
      <DrawerComponent isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} />
      <FooterLink />

    </div>
  );
}

export default App;