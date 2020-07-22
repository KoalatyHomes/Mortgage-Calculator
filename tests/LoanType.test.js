/* eslint-disable react/jsx-filename-extension */
/* eslint-disable padded-blocks */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import React from 'react';
import ReactDOM from 'react-dom';
import 'mocha';
import { shallow, mount } from 'enzyme';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import { renderHook, act } from '@testing-library/react-hooks';

import LoanType from '../client/src/Components/LoanType';

afterEach(cleanup);

describe('PaymentContainer component', () => {

  it('renders without crashing', () => {
    const wrapper = shallow(<LoanType />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should search for value whose selected option matches 30-year fixed', () => {
    render(<LoanType />);
    const selectElement = screen.getByDisplayValue('30-year fixed');
  });
});
