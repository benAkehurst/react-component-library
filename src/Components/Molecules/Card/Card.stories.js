import React from 'react';
import Card from './Card';

export default {
  component: Card,
  title: 'Molecules / Card',
};

const cardDefaults = {
  size: 'large',
};

export const BlankDefault = () => <Card />;
export const BlankSmall = () => <Card size={'small'} />;
export const BlankMedium = () => <Card size={'medium'} />;
export const Text = () => (
  <Card {...cardDefaults} isText={true} cardText={'Card Text'} />
);
export const Image = () => (
  <Card
    {...cardDefaults}
    isImage={true}
    imageLink={'https://via.placeholder.com/150'}
    altText={'placeholder alt text'}
    imageShape={'rounded'}
  />
);
export const Button = () => (
  <Card {...cardDefaults} isButton={true} buttonText={'Card Button'} />
);
export const ImageButton = () => (
  <Card
    {...cardDefaults}
    isImage={true}
    isButton={true}
    buttonText={'Card Button'}
    imageLink={'https://via.placeholder.com/150'}
    altText={'placeholder alt text'}
    imageShape={'rounded'}
  />
);
export const TextButton = () => (
  <Card
    {...cardDefaults}
    isText={true}
    isButton={true}
    cardText={'Card Text'}
    buttonText={'Card Button'}
  />
);
export const TextImageButton = () => (
  <Card
    {...cardDefaults}
    isImage={true}
    isText={true}
    isButton={true}
    cardText={'Card Text'}
    buttonText={'Card Button'}
    imageLink={'https://via.placeholder.com/150'}
    altText={'placeholder alt text'}
    imageShape={'rounded'}
  />
);
export const TextImage = () => (
  <Card
    {...cardDefaults}
    isImage={true}
    isText={true}
    cardText={'Card Text'}
    imageLink={'https://via.placeholder.com/150'}
    altText={'placeholder alt text'}
    imageShape={'rounded'}
  />
);
