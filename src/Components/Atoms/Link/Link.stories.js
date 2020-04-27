import React from 'react';
import Link from './Link';

export default {
  component: Link,
  title: 'Atoms / Link',
};

const linkData = {
  link: 'https://www.bbc.co.uk/news',
  linkText: 'BBC News',
};

export const Baisc = () => <Link {...linkData} />;
export const NoStyles = () => <Link {...linkData} noStyles={'noStyles'} />;
