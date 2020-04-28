import React from 'react';
import classes from './Image.module.css';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Aux';

const image = (props) => {
  return (
    <Aux>
      <img
        className={[
          classes.Image,
          classes[props.corners],
          classes[props.size],
        ].join(' ')}
        src={props.imageLink}
        alt={props.altText}
      />
    </Aux>
  );
};

image.propTypes = {
  imageLink: PropTypes.string,
  /**
   a url for the image
  */
  altText: PropTypes.string,
  /**
   alt text for the image
  */
  corners: PropTypes.string,
  /**
   'rounded' | 'circle' - default is square
  */
  size: PropTypes.string,
  /**
   'small' | 'medium' | 'large'
  */
};

export default image;
