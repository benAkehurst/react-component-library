import React from 'react';
import classes from './Button.module.css';

import Aux from '../../../hoc/Aux';

/**
 * Props:
 * size - 'small' | 'medium' | 'large'
 * disabled - true | false
 * corners - 'rounded'
 * shadow - 'shadow'
 * buttonType - 'success' | 'error' | 'basic' | 'black' | 'white'
 * clicked - If true, gets an event to fire when the button is clicked
 */

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

export default button;
