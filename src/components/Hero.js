import React from 'react';
import { Button } from '@chakra-ui/react';


function HeroSection({onOpen}) {
  return (
    <section className="hero">
      <img src="/restaurant chef B.jpg" alt="Hero" className="hero-image" />
      <div className="hero-content">
        <h2>Welcome to Little Lemon</h2>
        <p>With a deep commitment to quality and a warm, welcoming atmosphere, we pride ourselves on serving delicious, home-style meals that bring people together. Whether you're here for a quick bite or a special occasion, Little Lemon promises a delightful dining experience that will make you feel right at home.</p>
        <Button colorScheme="yellow" size="lg" onClick={onOpen}>
          Make a Reservation
        </Button>
      </div>
    </section>
  );
}

export default HeroSection;