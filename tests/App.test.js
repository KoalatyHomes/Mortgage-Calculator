/* eslint-disable react/jsx-filename-extension */
/* eslint-disable padded-blocks */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import React from 'react';
import { shallow, mount } from 'enzyme';
import { render, fireEvent, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import { renderHook, act } from '@testing-library/react-hooks';

import App from '../client/src/Components/App';
import LoanType from '../client/src/Components/LoanType';

global.fetch = require('node-fetch');

afterEach(cleanup);

describe('App component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders correctly enzyme', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

});
