import React from 'react';
import { Card, CardBody, Image, Stack, Heading, Text, Button } from '@chakra-ui/react';

function InfoCards() {
  const cardData = [
    { title: 'Greek Salad', 
      image: '/greeksalad.jpg', 
      description: 'Introducing our Greek Salad—a vibrant mix of crisp lettuce, juicy tomatoes, cucumbers, red onions, and tangy feta cheese, topped with Kalamata olives and our signature olive oil dressing. Light, fresh, and full of Mediterranean flavor, it’s the perfect dish for a healthy meal or a tasty side at Little Lemon Restaurant.' },
    { title: 'Delicious food', 
      image: '/restauranfood.jpg', 
      description: 'Learn more about our journey and passion for food.' },
    { title: 'Lemon dessert', 
      image: '/lemon dessert.jpg', 
      description: 'Indulge in our Lemon Cake, a delightful treat bursting with zesty lemon flavor. This moist, fluffy cake is topped with a tangy lemon glaze, offering the perfect balance of sweetness and citrus. It’s a refreshing dessert that’s sure to brighten your day at Little Lemon Restaurant.' },
  ];

  return (
    <section className="info-cards">
      {cardData.map((card, index) => (
        <Card key={index} className="info-card">
          <CardBody>
            <Image src={card.image} alt={card.title} />
            <Stack mt="6" spacing="3">
              <Heading size="md">{card.title}</Heading>
              <Text>{card.description}</Text>
              <Button>Learn more</Button>
            </Stack>
          </CardBody>
        </Card>
      ))}
    </section>
  );
}

export default InfoCards;