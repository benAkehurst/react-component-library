import React from 'react';
import Button from './Button';

export default {
  component: Button,
  title: 'Atoms / Button',
};

export const Small = () => <Button size={'small'}>Small Button</Button>;
export const Medium = () => <Button size={'medium'}>Medium Button</Button>;
export const Large = () => <Button size={'large'}>Large Button</Button>;
export const Disabled = () => (
  <Button size={'large'} disabled={true}>
    Disabled
  </Button>
);
export const RoundedCorners = () => (
  <Button size={'large'} corners={'rounded'}>
    Rounded Corners
  </Button>
);
export const Shadow = () => (
  <Button size={'large'} shadow={'shadow'}>
    Shadow
  </Button>
);
export const Success = () => (
  <Button size={'large'} buttonType={'success'}>
    Success
  </Button>
);
export const Error = () => (
  <Button size={'large'} buttonType={'error'}>
    Error
  </Button>
);
export const Basic = () => (
  <Button size={'large'} buttonType={'basic'}>
    Basic
  </Button>
);
export const Black = () => (
  <Button size={'large'} buttonType={'black'}>
    Black
  </Button>
);
export const White = () => (
  <Button size={'large'} buttonType={'white'}>
    White
  </Button>
);
export const SuccessRoundedShadow = () => (
  <Button
    size={'large'}
    buttonType={'success'}
    shadow={'shadow'}
    corners={'rounded'}
  >
    Success
  </Button>
);
