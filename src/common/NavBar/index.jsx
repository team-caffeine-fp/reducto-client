import * as React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { AiOutlineMenu } from "react-icons/ai";
import { HiChevronLeft } from "react-icons/hi";

import useWindowDimensions from "../WindowDimensions";
import logo from '../../assets/images/reducto.png'


const imgStyle={ display: 'block',marginLeft: 'auto', marginRight: 'auto', marginBottom: '3%', width: '60%', minWidth: '6rem'}
import { useData } from "../../context";


const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const { height, width } = useWindowDimensions();
  const { userData, logout, setMonth } = useData();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    if (width > 900) {
      setOpen(true);
    }
  }, [width]);
  
  const navigate = useNavigate()

  const toMonthlyView = (index) => {
    navigate("/monthly/" + index); 
  }
  const toHome = (index) => {
    navigate("/"); 
  }
  const toForm = (index) => {
    navigate("/form"); 
  }

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <AiOutlineMenu />
          </IconButton>
          <div style={{'width': '100%', display: 'flex', justifyContent: 'space-between'}}>
            <div style={{display: 'flex'}}>
                  <Button onClick={toHome} color="inherit">Home Page</Button>
                  <Button onClick={toForm} color="inherit">Form</Button>
            </div>
            <div>
            {localStorage.getItem('token') ? <Button color="inherit" onClick={logout}>Logout</Button> : <Button color="inherit">Login</Button>}
            </div>
          </div>          
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
        PaperProps={{
          sx: {
            backgroundColor: "#1976d2",
          },
        }}
      >
        
        <DrawerHeader >
          <img src={logo} style={imgStyle}/>
          <IconButton onClick={handleDrawerClose}>
            <HiChevronLeft style={{ fill: "#ffffff" }} />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {[
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ].map((month, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton sx={{ color: "#ffffff" }}>
                <ListItemButton onClick={(e) => toMonthlyView(index + 1)}>{month}</ListItemButton>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Outlet />
      </Main>
    </Box>
  );
}
