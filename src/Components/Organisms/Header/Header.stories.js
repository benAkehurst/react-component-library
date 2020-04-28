import React from 'react';
import Header from './Header';

export default {
  title: 'Organisms / Header',
};

const linkData = [
  { link: '/profile', linkText: 'Profile' },
  { link: '/logout', linkText: 'Logout' },
];

const headerData = {
  hasSearch: true,
  logoSize: 'small',
  logoImageLink:
    'https://images.unsplash.com/photo-1533794318766-897f4d50cb39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
  logoAltText: 'logo alt text',
  logoCorners: 'rounded',
  avatarSize: 'small',
  avatarImageLink: 'https://randomuser.me/api/portraits/men/88.jpg',
  avatarAltText: 'user image',
  avatarShape: 'rounded',
  avatarLabelText: 'A User',
  links: linkData,
};

export const Baisc = () => <Header {...headerData} />;
export const Primary = () => (
  <Header {...headerData} headerBgColor={'primary'} />
);
export const Secondary = () => (
  <Header {...headerData} headerBgColor={'secondary'} />
);
