import React from 'react';
import Label from './Label';

export default {
  component: Label,
  title: 'Atoms / Label',
};

export const Baisc = () => <Label>Basic Label</Label>;
export const Small = () => <Label size={'small'}>Small Label</Label>;
export const Medium = () => <Label size={'medium'}>Medium Label</Label>;
export const Large = () => <Label size={'large'}>Large Label</Label>;
