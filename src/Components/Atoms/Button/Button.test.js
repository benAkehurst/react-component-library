import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from './Button';

configure({ adapter: new Adapter() });

describe('<Button />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Button>Button</Button>);
  });

  it('should render the compoent', () => {
    expect(wrapper).toBeTruthy();
  });
});
