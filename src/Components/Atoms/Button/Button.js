import React from 'react';
import classes from './Button.module.css';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Aux';

const button = (props) => {
  return (
    <Aux>
      <button
        onClick={props.clicked ? (e) => props.clicked(e) : null}
        disabled={props.disabled}
        className={[
          classes.Button,
          classes[props.size],
          classes[props.corners],
          classes[props.shadow],
          classes[props.buttonType],
        ].join(' ')}
      >
        <div>
          {props.children.length > 15
            ? props.children.substring(0, 15 - 3) + '...'
            : props.children}
        </div>
      </button>
    </Aux>
  );
};

button.propTypes = {
  size: PropTypes.string,
  /**
   'small' | 'medium' | 'large'
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
  clicked: PropTypes.func,
  /**
   If `true`, gets an event to fire when the button is clicked
  */
};

export default button;
