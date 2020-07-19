import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  it('deve renderizar corretamente em modo "debug"', () => {
    const component = shallow(<App debug />);

    expect(component).toMatchSnapshot();
  });

  it('deve renderizar corretamente sem nenhum props', () => {
    const component = shallow(<App />);

    expect(component).toMatchSnapshot();
  });
});