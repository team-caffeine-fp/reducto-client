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
        const pieConfig = {
            type: 'pie',
            data: {labels: [
                'Red',
                'Blue',
                'Yellow'
              ],
              datasets: [{
                label: 'My First Dataset',
                data: [300, 50, 100],
                backgroundColor: [
                  'rgb(255, 99, 132)',
                  'rgb(54, 162, 235)',
                  'rgb(255, 205, 86)'
                ],
                hoverOffset: 4
              }],}
        }
        const {  getByTestId } =  render(<BrowserRouter><Chart config={pieConfig} /></BrowserRouter>)
        const chart = getByTestId('chart')
        console.log(chart)
        expect(chart.length).toBe(1)
    })
})