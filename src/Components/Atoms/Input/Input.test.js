import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Input from './Input';

configure({ adapter: new Adapter() });

describe('<Input />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Input />);
  });

  it('should render the compoent', () => {
    expect(wrapper).toBeTruthy();
  });
});
