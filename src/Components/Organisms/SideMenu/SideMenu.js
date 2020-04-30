import React, { Component } from 'react';
import classes from './SideMenu.module.css';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Aux';

import Image from '../../Atoms/Image/Image';
import Link from '../../Atoms/Link/Link';
import Avatar from '../../Molecules/Avatar/Avatar';

class SideMenu extends Component {
  generateLinks = () => {
    this.props.links.map((link) => {
      return <Link key={link.link} />;
    });
  };

  render() {
    return (
      <Aux>
        <div className={classes.SideMenu}>
          {this.props.isTopSection ? (
            <div className={classes.TopSection}>
              <Image />
            </div>
          ) : null}
          {this.props.isMidSection ? (
            <div className={classes.MidSection}>{this.generateLinks}</div>
          ) : null}
          {this.props.isBottomSection ? (
            <div className={classes.BottomSection}>
              <Avatar />
            </div>
          ) : null}
        </div>
      </Aux>
    );
  }
}

SideMenu.propTypes = {
  isTopSection: PropTypes.bool,
  isMidSection: PropTypes.bool,
  isBottomSection: PropTypes.bool,
};

export default SideMenu;
