import React from 'react';
import classes from './Label.module.css';

import Aux from '../../../hoc/Aux';

/**
 * Props:
 * for - needs to be the name of an input the label needs to have
 * size - 'small' | 'medium' | 'large'
 */

const label = (props) => {
  return (
    <Aux>
      <label
        className={[classes.Label, classes[props.size]].join(' ')}
        htmlFor={props.for}
      >
        {props.children}
      </label>
    </Aux>
  );
};

export default label;
