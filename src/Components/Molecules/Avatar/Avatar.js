import React, { Component } from 'react';
import classes from './Avatar.module.css';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Aux';

import Image from '../../Atoms/Image/Image';
import Label from '../../Atoms/Label/Label';

class Avatar extends Component {
  render() {
    return (
      <Aux>
        <div className={[classes.Avatar, classes[this.props.size]].join(' ')}>
          <div className={classes.ImageWrapper}>
            <Image
              imageLink={this.props.imageLink}
              altText={this.props.imageAltText}
              corners={this.props.imageShape}
            />
          </div>
          {this.props.labelText ? (
            <div className={classes.LabelWrapper}>
              <Label size={this.props.size}>{this.props.labelText}</Label>
            </div>
          ) : null}
        </div>
      </Aux>
    );
  }
}

Avatar.propTypes = {
  size: PropTypes.string,
  /**
   'small' | 'medium' | 'large'
  */
  imageLink: PropTypes.string,
  /**
   A link to the image to show
  */
  imageAltText: PropTypes.string,
  /**
   Alt text for the image
  */
  imageShape: PropTypes.string,
  /**
   What shape the image will be - default is square
  */
  labelText: PropTypes.string,
  /**
   Text that is shown under the image
  */
};

export default Avatar;
