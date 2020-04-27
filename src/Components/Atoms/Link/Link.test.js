import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Link from './Link';

configure({ adapter: new Adapter() });

describe('<Link />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Link link={'https://www.test.com'} linkText={'Test'} />);
  });

  it('should render the compoent', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should have a link prop', () => {
    expect(wrapper.props().children.props.href).toBeTruthy();
  });

  it('should have a link linkText', () => {
    expect(wrapper.props().children).toBeTruthy();
  });
});
