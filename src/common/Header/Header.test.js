/**
 * @jest-environment jsdom
 */

 import { screen, render, shallow} from '@testing-library/react';
 import '@testing-library/jest-dom';
 import React from 'react';
 import { BrowserRouter } from 'react-router-dom';
 import Header from '.';

 const testFunc = jest.fn()

 describe("Header", () => {

    beforeEach(() => {
        render(<BrowserRouter><Header /></BrowserRouter>)
    })


    it('renders a navbar', () => {
        const navbar = screen.getByTestId("navbar");
        expect(navbar).toBeInTheDocument()
     });


})