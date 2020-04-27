import React, { Component } from 'react';
import classes from './SearchInput.module.css';

import Aux from '../../../hoc/Aux';
import Label from '../../Atoms/Label/Label';
import Input from '../../Atoms/Input/Input';
import Button from '../../Atoms/Button/Button';

class SearchInput extends Component {
  render() {
    return (
      <Aux>
        <div className={classes.SearchInputWrapper}>
          {this.props.hasLabel ? (
            <div className={classes.LabelWrapper}>
              <Label for={'search'}>Seach Here</Label>
            </div>
          ) : null}
          <div className={classes.InputElementsWrapper}>
            <Input name={'search'}></Input>
            <Button
              size={'medium'}
              corners={'rounded'}
              shadow={'shadow'}
              buttonType={'success'}
            >
              Search
            </Button>
          </div>
        </div>
      </Aux>
    );
  }
}

export default SearchInput;
