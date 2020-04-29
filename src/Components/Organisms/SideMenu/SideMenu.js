import React, { Component } from 'react';
import classes from './SideMenu.module.css';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Aux';

import Image from '../../Atoms/Image/Image';
import Link from '../../Atoms/Link/Link';
import Avatar from '../../Molecules/Avatar/Avatar';

class SideMenu extends Component {
  render() {
    return (
      <Aux>
        <div className={classes.SideMenu}>Side Menu</div>
      </Aux>
    );
  }
}

SideMenu.propTypes = {};

export default SideMenu;
