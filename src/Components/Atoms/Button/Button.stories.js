import React from 'react';
import Button from './Button';

export default {
  component: Button,
  title: 'Atoms / Button',
};

const buttonDefaults = {
  size: 'large',
};

export const Small = () => <Button size={'small'}>Small Button</Button>;
export const Medium = () => <Button size={'medium'}>Medium Button</Button>;
export const Large = () => <Button {...buttonDefaults}>Large Button</Button>;
export const Disabled = () => (
  <Button {...buttonDefaults} disabled={true}>
    Disabled
  </Button>
);
export const RoundedCorners = () => (
  <Button {...buttonDefaults} corners={'rounded'}>
    Rounded Corners
  </Button>
);
export const Shadow = () => (
  <Button {...buttonDefaults} shadow={'shadow'}>
    Shadow
  </Button>
);
export const Success = () => (
  <Button {...buttonDefaults} buttonType={'success'}>
    Success
  </Button>
);
export const Error = () => (
  <Button {...buttonDefaults} buttonType={'error'}>
    Error
  </Button>
);
export const Basic = () => (
  <Button {...buttonDefaults} buttonType={'basic'}>
    Basic
  </Button>
);
export const Black = () => (
  <Button {...buttonDefaults} buttonType={'black'}>
    Black
  </Button>
);
export const White = () => (
  <Button {...buttonDefaults} buttonType={'white'}>
    White
  </Button>
);
export const SuccessRoundedShadow = () => (
  <Button
    {...buttonDefaults}
    buttonType={'success'}
    shadow={'shadow'}
    corners={'rounded'}
  >
    Success
  </Button>
);
