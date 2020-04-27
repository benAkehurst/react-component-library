import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Spinner from './Spinner';

configure({ adapter: new Adapter() });

describe('<Spinner />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Spinner size={'small'} color={'basic'} />);
  });

  it('should render the compoent', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should have a size and color prop', () => {
    expect(wrapper.props().children.props.className).toEqual(
      'Spinner small basic'
    );
  });
});
