import React from 'react';
import classes from './Spinner.module.css';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Aux';

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

spinner.propTypes = {
  color: PropTypes.string,
  /**
   'small' | 'medium' | 'large'
  */
  size: PropTypes.string,
  /**
   'small' | 'medium' | 'large'
  */
};

export default spinner;
