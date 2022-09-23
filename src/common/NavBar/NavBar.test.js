 /**
 * @jest-environment jsdom
 */

  import { screen, render } from '@testing-library/react';
  import '@testing-library/jest-dom';
  import React from 'react';
  import { BrowserRouter } from 'react-router-dom';
  import NavBar from '.';
 
  const testFunc = jest.fn()
 
  describe("NavBar", () => {
 
     beforeEach(() => {
         render(<BrowserRouter><NavBar /></BrowserRouter>)
     })
 
 
     it('renders a navbar', () => {
        const { getAllByTestId, getByTestId } = render(<NavBar />);
        const navbar = screen.getAllByTestId('navbar')
        expect(navbar).toBeInTheDocument()
      });
 
 
 })