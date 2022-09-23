 /**
 * @jest-environment jsdom
 */

  import { screen, render, within } from '@testing-library/react';
  import '@testing-library/jest-dom';
  import React from 'react';
  import { BrowserRouter } from 'react-router-dom';
  import Dashboard from '.';
  import { SideBar } from '../../common'
 
  const testFunc = jest.fn()
 
  describe("Home page", () => {
 
     beforeEach(() => {
         render(<BrowserRouter><Dashboard /></BrowserRouter>)
     })
 
     it('Dashboard renders a <SideBar />', () => {
        const { getAllByTestId, getByTestId } = render(<SideBar />);
        const appHeaders = getAllByTestId('sideBar')
        for( let appHeader of appHeaders) {
            const clocksInHeader = within(appHeader).getAllByTestId('IconButton')
            expect(clocksInHeader.length).toBe(2);
        }
      });
 
 })