import React from 'react';
import { shallow } from 'enzyme';
import Counter from '../Counter';

describe('Counter', () => {
  it('should render zero as start value', () => {
    const wrappedComponent = shallow(<Counter />);
    expect(wrappedComponent.find('.counter__value').text()).toEqual('0');
  })

  it('should call function on increment', () => {
    const wrappedComponent = shallow(<Counter />);
    wrappedComponent.setState({ 
        counter: 0,
      }
    );
    wrappedComponent.find('.counter__button_increment').simulate('click');
    expect(wrappedComponent.find('.counter__value').text()).toEqual('1');
  })

  it('should call function on decrement', () => {
    const wrappedComponent = shallow(<Counter />);
    wrappedComponent.setState({ 
        counter: 0,
      }
    );
    wrappedComponent.find('.counter__button_decrement').simulate('click');
    expect(wrappedComponent.find('.counter__value').text()).toEqual('-1');
  })

  it('should call function on make value zero', () => {
    const wrappedComponent = shallow(<Counter />);
    wrappedComponent.setState({ 
        counter: 5,
      }
    );
    wrappedComponent.find('.counter__value').simulate('click');
    expect(wrappedComponent.find('.counter__value').text()).toEqual('0');
  })
  
});