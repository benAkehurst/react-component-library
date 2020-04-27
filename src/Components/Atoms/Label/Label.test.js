import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Label from './Label';

configure({ adapter: new Adapter() });

describe('<Label />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Label for={'test'} size={'small'}>
        Basic Label
      </Label>
    );
  });

  it('should render the compoent', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should have a htmlFor prop', () => {
    expect(wrapper.props().children.props.htmlFor).toBeTruthy();
  });

  it('should have a size prop', () => {
    expect(wrapper.props().children.props.className).toEqual('Label small');
  });
});
