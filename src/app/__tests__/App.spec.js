import React, { Component } from 'react';
import App from '../App.jsx';
import { shallow, mount } from 'enzyme';
import ReactDOM from 'react-dom';

describe('tests', () => {
  describe('constructor', () => {
      it('should mount component with expected state', () => {
          let component = shallow(<App/>);

          expect(component.instance().state).toEqual({"isOpenPop": false, "name": "Lena"});
      });
  });
  describe('togglePopap', () => {
      it('should mount component with expected state', () => {
          let component = shallow(<App/>);

          component.instance().setState = jest.fn();

          component.instance().togglePopap();

          expect(component.instance().setState).toHaveBeenCalledWith({"isOpenPop": true});
      });
  });
});
