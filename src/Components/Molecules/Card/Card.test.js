import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Card from './Card';

configure({ adapter: new Adapter() });

describe('<Card />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Card size={'small'} />);
  });

  it('should render the compoent', () => {
    expect(wrapper).toBeTruthy();
  });
  it('should receive the isImage prop', () => {
    const render = <Card size={'small'} isImage={true} />;
    expect(render.props.isImage).toBeTruthy();
  });
  it('should receive the isText prop', () => {
    const render = <Card size={'small'} isText={true} />;
    expect(render).toBeTruthy();
  });
  it('should receive the isButton prop', () => {
    const render = <Card size={'small'} isButton={true} />;
    expect(render).toBeTruthy();
  });
});
