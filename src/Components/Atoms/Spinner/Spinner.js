import React from 'react';
import classes from './Spinner.module.css';

import Aux from '../../../hoc/Aux';

/**
 * Props:
 * size - 'small' | 'medium' | 'large'
 * color - 'success' | 'error' | 'black' | 'basic'
 */

const spinner = (props) => {
  return (
    <Aux>
      <div
        className={[
          classes.Spinner,
          classes[props.size],
          classes[props.color],
        ].join(' ')}
      >
        Loading...
      </div>
    </Aux>
  );
};

export default spinner;
