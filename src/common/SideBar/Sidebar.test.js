/**
 * @jest-environment jsdom
 */

 import { screen, render } from '@testing-library/react';
 import '@testing-library/jest-dom';
 import userEvent from '@testing-library/user-event'
 import React from 'react';
 import { BrowserRouter } from 'react-router-dom';
 import SideBar from '.';


 describe("Sidebar", () => {

    beforeEach(() => {
        render(<BrowserRouter><SideBar /></BrowserRouter>)
    })

    it("Opens a drawer", async () => {
        const open = screen.getByTestId("IconButton");
        await userEvent.click(open)
        expect(open).toBeInTheDocument()
       
      });

      it("Closes a drawer", async () => {
        const close = screen.getByTestId("IconButton2");
        await userEvent.click(close)
        expect(close).toBeInTheDocument()
      });
})

