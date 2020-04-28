import React from 'react';
import classes from './Label.module.css';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Aux';

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

label.propTypes = {
  for: PropTypes.string,
  /**
   needs to be the name of an input the label needs to have
  */
  size: PropTypes.string,
  /**
   'small' | 'medium' | 'large'
  */
};

export default label;
