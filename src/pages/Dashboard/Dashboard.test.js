 /**
 * @jest-environment jsdom
 */

  import { screen, render } from '@testing-library/react';
  import '@testing-library/jest-dom';
  import React from 'react';
  import { BrowserRouter } from 'react-router-dom';
  import index from '.';
 
  const testFunc = jest.fn()
 
  describe("Home page", () => {
 
     beforeEach(() => {
         render(<BrowserRouter><HomePage /></BrowserRouter>)
     })
 
 
     it("Displays a button to join the game", async () => {
 
        const button = screen.queryByText("Join Game");
     
     })
 
     it("Displays a button to a new game", async () => {
 
         
        
     })
 
 })