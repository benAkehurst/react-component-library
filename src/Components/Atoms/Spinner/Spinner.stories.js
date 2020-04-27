import React from 'react';
import Spinner from './Spinner';

export default {
  component: Spinner,
  title: 'Atoms / Spinner',
};

const spinnerDefaults = {
  size: 'large',
};

export const Small = () => <Spinner size={'small'} color={'basic'} />;
export const Medium = () => <Spinner size={'medium'} color={'basic'} />;
export const Large = () => <Spinner {...spinnerDefaults} color={'basic'} />;
export const Success = () => <Spinner {...spinnerDefaults} color={'success'} />;
export const Error = () => <Spinner {...spinnerDefaults} color={'error'} />;
export const Black = () => <Spinner {...spinnerDefaults} color={'black'} />;
