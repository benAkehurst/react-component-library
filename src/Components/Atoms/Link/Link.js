import React from 'react';
import classes from './Link.module.css';

import Aux from '../../../hoc/Aux';

/**
 * Props:
 * noStyles - 'noStyles' - will render the link with no underline and black color
 * link - a url to link to
 * linkText - what the url should display to the user as
 */

const link = (props) => {
  return (
    <Aux>
      <a
        className={[classes.Link, classes[props.noStyles]].join(' ')}
        href={props.link}
      >
        {props.linkText}
      </a>
    </Aux>
  );
};

export default link;
