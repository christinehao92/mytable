import React from 'react';
import { Card, CardBody, Image, Stack, Heading, Text } from '@chakra-ui/react';

function InfoCards() {
  const cardData = [
    { title: 'Our Menu', image: '/menu.jpg', description: 'Explore our diverse menu with delicious dishes.' },
    { title: 'Our Story', image: '/story.jpg', description: 'Learn more about our journey and passion for food.' },
    { title: 'Visit Us', image: '/location.jpg', description: 'Find our location and plan your visit.' },
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
            </Stack>
          </CardBody>
        </Card>
      ))}
    </section>
  );
}

export default InfoCards;