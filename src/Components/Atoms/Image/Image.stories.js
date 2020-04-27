import React from 'react';
import Image from './Image';

export default {
  component: Image,
  title: 'Atoms / Image',
};

const imageData = {
  imageLink: 'https://via.placeholder.com/150',
  altText: 'placeholder alt text',
};

export const Baisc = () => <Image {...imageData} />;
export const Rounded = () => <Image {...imageData} corners={'rounded'} />;
export const Circle = () => <Image {...imageData} corners={'circle'} />;
export const LargeImage = () => (
  <Image
    imageLink={
      'https://images.unsplash.com/photo-1587270804625-48c99a3cc707?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80'
    }
    altText={'unsplash image'}
    size={'large'}
  />
);
