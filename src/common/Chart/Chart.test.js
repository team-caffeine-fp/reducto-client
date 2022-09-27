/**
 * @jest-environment jsdom
 */

import { screen, render, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Chart } from '../';


describe("Home page", () => {

    beforeEach(() => {

    })
    
    it('Correctly generates a Pie chart', () => {
        const pieConfig = {}
        const { getByTestId } =  render(<BrowserRouter><Chart config={pieConfig} /></BrowserRouter>)
        const chart = getByTestId('chart')
        console.log(chart)
        expect(chart.length).toBe(undefined)
    })
})