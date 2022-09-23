/**
 * @jest-environment jsdom
 */

 import { screen, render,fireEvent } from '@testing-library/react';
 import '@testing-library/jest-dom';
 import userEvent from '@testing-library/user-event'
 import React from 'react';
 import { BrowserRouter } from 'react-router-dom';
 import defaultExport, { handleDrawerOpen, handleDrawerClose } from '.'
 import SideBar from '.';
import { experimental_extendTheme, IconButton } from '@mui/material';

const testFunc = jest.fn()

 describe("Sidebar", () => {

    beforeEach(() => {
        render(<BrowserRouter><SideBar /></BrowserRouter>)
    })

    it("Opens and closes a drawer", async () => {
        render(<IconButton/>)
        const open = screen.getByTestId("IconButton");
        await userEvent.click(open)
        expect(open).toBeInTheDocument()
      });
 
})

