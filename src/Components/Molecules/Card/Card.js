import React, { Component } from 'react';
import classes from './Card.module.css';

import Aux from '../../../hoc/Aux';

class Card extends Component {
  render() {
    return (
      <Aux>
        <div className={classes.Card}></div>
      </Aux>
    );
  }
}

export default Card;
