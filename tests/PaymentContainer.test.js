/* eslint-disable react/jsx-filename-extension */
/* eslint-disable padded-blocks */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import React from 'react';
import ReactDOM from 'react-dom';
import 'mocha';
import { shallow, mount } from 'enzyme';
import { render, fireEvent, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import { renderHook, act } from '@testing-library/react-hooks';

import PaymentContainer from '../client/src/Components/PaymentContainer';

afterEach(cleanup);

describe('PaymentContainer component', () => {

  it('renders without crashing', () => {
    const wrapper = shallow(<PaymentContainer />);
    expect(wrapper.exists()).toBe(true);
  });

});
