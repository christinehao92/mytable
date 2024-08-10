import React from 'react';

function HeroSection() {
  return (
    <section className="hero">
      <img src="/hero-image.jpg" alt="Hero" className="hero-image" />
      <div className="hero-content">
        <h2>Welcome to Little Lemon</h2>
        <p>Enjoy the best dining experience in town.</p>
        <Button colorScheme="yellow" size="lg">
          Make a Reservation
        </Button>
      </div>
    </section>
  );
}

export default HeroSection;