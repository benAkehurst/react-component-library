import React, { Component } from 'react';
import classes from './Card.module.css';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Aux';

import Image from '../../Atoms/Image/Image';
import Button from '../../Atoms/Button/Button';

class Card extends Component {
  handleCardClicked = (e) => {
    console.log('Button Clicked');
  };

  generateImage = () => {
    return (
      <div className={classes.ImageWrapper}>
        <Image
          size={this.props.size}
          imageLink={this.props.imageLink}
          altText={this.props.imageAltText}
          corners={this.props.imageShape}
        />
      </div>
    );
  };

  genetateText = () => {
    return (
      <div className={classes.TextWrapper}>
        <p>{this.props.cardText}</p>
      </div>
    );
  };

  generateButton = () => {
    return (
      <div className={classes.ButtonWrapper}>
        <Button
          clicked={(e) => this.handleCardClicked(e)}
          size={this.props.size}
          buttonType={this.props.buttonType}
          shadow={this.props.shadow}
          corners={this.props.corners}
          disabled={this.props.disabled}
        >
          {this.props.buttonText}
        </Button>
      </div>
    );
  };

  render() {
    return (
      <Aux>
        <div className={[classes.Card, classes[this.props.size]].join(' ')}>
          {this.props.isImage ? this.generateImage() : null}
          {this.props.isText ? this.genetateText() : null}
          {this.props.isButton ? this.generateButton() : null}
        </div>
      </Aux>
    );
  }
}

Card.propTypes = {
  isImage: PropTypes.bool,
  /**
   * If `true`, an image will be shown on the card
   */
  isText: PropTypes.bool,
  /**
   * If `true`, text will be shown on the card
   */
  isButton: PropTypes.bool,
  /**
   * If `true`, a button will be shown on the card
   */
  cardText: PropTypes.string,
  /**
   * Defines the text to be shown on the the card
   */
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
  disabled: PropTypes.bool,
  /**
   If `true`, the button is disabled
  */
  corners: PropTypes.string,
  /**
   'rounded'
  */
  shadow: PropTypes.string,
  /**
   'shadow'
  */
  buttonType: PropTypes.string,
  /**
   'success' | 'error' | 'basic' | 'black' | 'white'
  */
  clicked: PropTypes.bool,
  /**
   If `true`, gets an event to fire when the button is clicked
  */
  buttonText: PropTypes.string,
  /**
   * What text to display on the button
   */
};

export default Card;
