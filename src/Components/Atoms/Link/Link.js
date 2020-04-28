import React from 'react';
import classes from './Link.module.css';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Aux';

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

link.propTypes = {
  noStyles: PropTypes.string,
  /**
   'noStyles' - will render the link with no underline and black color
  */
  link: PropTypes.string,
  /**
   a url to link to
  */
  linkText: PropTypes.string,
  /**
   what the url should display to the user as
  */
};

export default link;
