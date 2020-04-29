import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SideMenu from './SideMenu';

configure({ adapter: new Adapter() });

describe('<SideMenu />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SideMenu />);
  });

  it('should render the compoent', () => {
    expect(wrapper).toBeTruthy();
  });
});
