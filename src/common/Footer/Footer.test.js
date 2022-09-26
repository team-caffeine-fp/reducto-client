/**
 * @jest-environment jsdom
 */

 import { screen, render, shallow} from '@testing-library/react';
 import '@testing-library/jest-dom';
 import React from 'react';
 import { BrowserRouter } from 'react-router-dom';
 import Footer from '.';

 const testFunc = jest.fn()

 describe("Footer", () => {

    beforeEach(() => {
        render(<BrowserRouter><Footer /></BrowserRouter>)
    })


    it('renders a footer', () => {
        const footer = screen.getByTestId("footer");
        expect(footer).toBeInTheDocument()
     });


})