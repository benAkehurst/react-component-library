import React, { Component } from 'react';
import classes from './Avatar.module.css';

import Aux from '../../../hoc/Aux';

import Image from '../../Atoms/Image/Image';
import Label from '../../Atoms/Label/Label';

/**
 * Props:
 * size - defines the avatar size
 * imageLink - A link to the umage to show
 * imageAltText - Alt text for the image
 * imageShape - What shape the image will be - default is square
 * labelText - Text that is shown under the image
 */

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

export default Avatar;
