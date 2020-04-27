import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Avatar from './Avatar';

configure({ adapter: new Adapter() });

describe('<Avatar />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Avatar size={'small'} />);
  });

  it('should render the compoent', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should have a small size prop', () => {
    expect(wrapper.props().children.props.className).toEqual('Avatar small');
  });
});
