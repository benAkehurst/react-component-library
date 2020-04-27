import React from 'react';
import Avatar from './Avatar';

export default {
  component: Avatar,
  title: 'Molecules / Avatar',
};

const avatarData = {
  imageLink: 'https://via.placeholder.com/150',
  altText: 'placeholder alt text',
  imageShape: 'circle',
};

export const ImageSmall = () => <Avatar {...avatarData} size={'small'} />;

export const ImageMedium = () => <Avatar {...avatarData} size={'medium'} />;

export const ImageLarge = () => <Avatar {...avatarData} size={'large'} />;

export const ImageTextSmall = () => (
  <Avatar {...avatarData} size={'small'} labelText={'Storybook Name'} />
);
export const ImageTextMedium = () => (
  <Avatar {...avatarData} size={'medium'} labelText={'Storybook Name'} />
);
export const ImageTextLarge = () => (
  <Avatar {...avatarData} size={'large'} labelText={'Storybook Name'} />
);
