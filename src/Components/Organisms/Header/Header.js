import React, { Component } from 'react';
import classes from './Header.module.css';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Aux';

import Image from '../../Atoms/Image/Image';
import Link from '../../Atoms/Link/Link';
import SearchInput from '../../Molecules/SearchInput/SearchInput';
import Avatar from '../../Molecules/Avatar/Avatar';

class Header extends Component {
  renderSearch = () => {
    return (
      <div className={classes.SearchWrapper}>
        <SearchInput />
      </div>
    );
  };

  renderAvatar = () => {
    return (
      <div className={classes.AvatarWrapper}>
        <Avatar
          size={this.props.avatarSize}
          imageLink={this.props.avatarImageLink}
          imageAltText={this.props.avatarAltText}
          imageShape={this.props.avatarShape}
          labelText={this.props.avatarLabelText}
        />
      </div>
    );
  };

  renderLinks = () => {
    return (
      <div className={classes.LinkWrapper}>
        {this.props.links.map((link) => {
          return (
            <Link
              key={link.link}
              noStyles={'noStyles'}
              link={link.link}
              linkText={link.linkText}
            />
          );
        })}
      </div>
    );
  };

  render() {
    return (
      <Aux>
        <div
          className={[
            classes.HeaderWrapper,
            classes[this.props.headerBgColor],
          ].join(' ')}
        >
          <div className={classes.LogoWrapper}>
            <Image
              size={this.props.logoSize}
              imageLink={this.props.logoImageLink}
              altText={this.props.logoAltText}
              corners={this.props.logoCorners}
            />
          </div>
          {this.props.hasSearch ? (
            this.renderSearch()
          ) : (
            <div className={classes.SearchWrapper}></div>
          )}
          {this.props.avatarImageLink ? this.renderAvatar() : null}
          {this.props.links ? this.renderLinks() : null}
        </div>
      </Aux>
    );
  }
}

Header.propTypes = {
  hasSearch: PropTypes.bool,
  headerBgColor: PropTypes.string,
  logoSize: PropTypes.string,
  logoImageLink: PropTypes.string,
  logoAltText: PropTypes.string,
  logoCorners: PropTypes.string,
  avatarSize: PropTypes.string,
  avatarImageLink: PropTypes.string,
  avatarAltText: PropTypes.string,
  avatarShape: PropTypes.string,
  avatarLabelText: PropTypes.string,
  links: PropTypes.array,
};

export default Header;
