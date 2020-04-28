import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchInput from './SearchInput';

configure({ adapter: new Adapter() });

describe('<SearchInput />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SearchInput />);
  });

  it('should render the compoent', () => {
    expect(wrapper).toBeTruthy();
  });
});
