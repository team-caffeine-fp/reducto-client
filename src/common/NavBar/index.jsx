import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import {SideBar, useWindowDimensions} from '../';

const index = () => {
  const { height, width } = useWindowDimensions();
  

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <SideBar />
          {/* {width < 900 ? <SideBar/> : false} */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 0.05 }}>
            News
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 0.05 }}>
            Your CO<sub>2</sub> emissions
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Some other stuff
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default index
