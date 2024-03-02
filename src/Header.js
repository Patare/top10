import React, { useState } from 'react';
// import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
// import { List } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, ListItemIcon, ListItemText, Button, ListItem, List, Collapse,Paper } from '@material-ui/core';

import HomeIcon from '@mui/icons-material/Home';
import StoreIcon from '@mui/icons-material/Store';
import ContactMailIcon from '@mui/icons-material/ContactMail'
const pages = ['Stores', 'Categories', 'Saving Events', 'Best Deals', 'Saving Tips'];
const submenu=['Amazone','Dics sporting','hidhf','hdslkf','djhjfdj','dbhjdjf','fjjvvf'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const submenus = {
  'Page 1': ['Submenu 1-1', 'Submenu 1-2', 'Submenu 1-3'], // Submenus for Page 1
  'Page 2': ['Submenu 2-1', 'Submenu 2-2', 'Submenu 2-3'], // Submenus for Page 2
  'Page 3': ['Submenu 3-1', 'Submenu 3-2', 'Submenu 3-3'], // Submenus for Page 3
};
function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);


  const [anchorEl, setAnchorEl] = useState(null); // State for anchor element of the menu
  // const [openSubMenu, setOpenSubMenu] = useState(false); // State for submenu open/close
  const [currentSubmenu, setCurrentSubmenu] = useState([]);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

  const handleStoresClick = () => {
    // Handle click on Stores page
    console.log("Stores page clicked");
  };
      
const [open1, setOpen] = React.useState(false);




const handlePageClick = (event, page) => {
  setAnchorEl(event.currentTarget); // Set the anchor element to the current target (the clicked menu item)
  setCurrentSubmenu(submenus[page]); // Set the submenu items for the current page
  setOpenSubMenu(true); 
};

const handleClick = () => {
  setOpenSubMenu(!openSubMenu); // Toggle the submenu open/close state
};

const handleCloseMenu = () => {
  setAnchorEl(null); // Close the menu
};

const handleCloseSubMenu = () => {
  setOpenSubMenu(false); // Close the submenu
};

const [isMenu, setisMenu] = useState(false);
   const [isResponsiveclose, setResponsiveclose] = useState(false);
   const [openSubMenu, setOpenSubMenu] = useState(false);
   const [openSubMenu1, setOpenSubMenu1] = useState(false);
   const toggleClass = () => {
       setisMenu(!isMenu);
       setResponsiveclose(!isResponsiveclose);
   };

   const toggleSubmenu = () => {
       setOpenSubMenu(!openSubMenu);
   };
   
   const toggleSubmenu1 = () => {
    setOpenSubMenu1(!openSubMenu1);
};
  return (

    <AppBar position="static" sx={{ backgroundColor: '#00A6AA' }}>


      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Box sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
          <img
  src="http://www.websitedesignbykat.com/wp-content/uploads/2015/01/online-shopping-image-.png"
  alt="Logo"
  style={{ width: '100px', height: '30%', objectFit: 'contain' }} // Adjust width and height as needed
/>

</Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
           
<List sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
<ListItem button  to="/" exact activeClassName='is-active' onClick={toggleClass}>
    <ListItemIcon>
        <HomeIcon />
    </ListItemIcon>
    <ListItemText primary="Home" />
</ListItem>
<ListItem button  to="/About" activeClassName='is-active' onClick={toggleClass}>
    <ListItemText primary="About" />
</ListItem>
<ListItem button onClick={toggleSubmenu}>
    <ListItemIcon>
        <StoreIcon />
    </ListItemIcon>
    <ListItemText primary="Shop" />
    {openSubMenu ? <ExpandLess /> : <ExpandMore />}
</ListItem>
{openSubMenu && (
    <Paper style={{ position: 'absolute', top: '100%', zIndex: 1 }}>
        <List>
            <ListItem button  to="/Online" activeClassName='is-active' onClick={toggleClass}>
                <ListItemText primary="Online Shop" />
            </ListItem>
            <ListItem button  to="/Offline" activeClassName='is-active' onClick={toggleClass}>
                <ListItemText primary="Offline Shop" />
            </ListItem>
        </List>
    </Paper>
)}

<ListItem button  to="/Contact" activeClassName='is-active' onClick={toggleClass}>
    <ListItemIcon>
        <ContactMailIcon />
    </ListItemIcon>
    <ListItemText primary="Contact" />
</ListItem>
</List>
           
          </Box>

          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
         
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        
<ListItem button  to="/" exact activeClassName='is-active' onClick={toggleClass} >
    <ListItemText primary="Stores" />
</ListItem>
<ListItem button  to="/About" activeClassName='is-active' onClick={toggleSubmenu1}>
    <ListItemText primary="Categories" />
    {openSubMenu1 ? <ExpandLess /> : <ExpandMore  />}
</ListItem>
{openSubMenu1 && (
    <Paper style={{ width:"15%",position: 'absolute', top: '100%',left:320, zIndex: 1 }}>
        <List>
       
  
        <ListItemText onClick={toggleSubmenu} />
        <List>
            {settings.map((submenu) => (
                <ListItem button key={submenu} to="/Online" activeClassName='is-active' onClick={toggleClass}>
                    <ListItemText>{submenu}</ListItemText>
                </ListItem>
            ))}
        </List>
    

            {/* <ListItem button  to="/Offline" activeClassName='is-active' onClick={toggleClass}>
                <ListItemText primary="Offline Shop" />
            </ListItem> */}
        </List>
    </Paper>
)}

<ListItem button onClick={toggleSubmenu}  >
    <ListItemText primary="Saving Events" sx={{ flex: '0' }}></ListItemText>
    {openSubMenu ? <ExpandLess /> : <ExpandMore  />}
    
</ListItem>
{openSubMenu && (
    <Paper style={{ width:"15%", position: 'absolute', top: '100%',left:550, zIndex: 1 }}>
        <List>
          {submenu.map((sub)=>(
            <ListItem button key={sub}  to="/Online" activeClassName='is-active' onClick={toggleClass}>
                <ListItemText>{sub}</ListItemText>
            </ListItem>
            ))}
            {/* <ListItem button  to="/Offline" activeClassName='is-active' onClick={toggleClass}>
                <ListItemText primary="Offline Shop" />
            </ListItem> */}
        </List>
    </Paper>
)}
<ListItem button  to="/Contact" activeClassName='is-active' onClick={toggleClass}>
    <ListItemText primary="Best Deals" />
</ListItem>
<ListItem button  to="/Saving Tips" activeClassName='is-active' onClick={toggleClass}>
    <ListItemText primary="Saving Tips" />
</ListItem>
          </Box>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;



// import React, { useState } from 'react';
// import { BrowserRouter as Router, NavLink, Link } from 'react-router-dom'; // Import BrowserRouter
// import { FiAlignRight, FiXCircle, FiChevronDown } from "react-icons/fi";
// import { AppBar, Toolbar, IconButton, Typography, ListItemIcon, ListItemText, ListItem, List, Collapse,Paper } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import HomeIcon from '@mui/icons-material/Home';
// import StoreIcon from '@mui/icons-material/Store';
// import ContactMailIcon from '@mui/icons-material/ContactMail';
// import ExpandLess from '@mui/icons-material/ExpandLess';  
// import ExpandMore from '@mui/icons-material/ExpandMore';

// const Header = () => {
//     const [isMenu, setisMenu] = useState(false);
//     const [isResponsiveclose, setResponsiveclose] = useState(false);
//     const [openSubMenu, setOpenSubMenu] = useState(false);

//     const toggleClass = () => {
//         setisMenu(!isMenu);
//         setResponsiveclose(!isResponsiveclose);
//     };

//     const toggleSubmenu = () => {
//         setOpenSubMenu(!openSubMenu);
//     };

//     return (
//         <Router> {/* Wrap your component with BrowserRouter */}
//             <AppBar position="static">
//                 <Toolbar>
//                     <IconButton
//                         size="large"
//                         edge="start"
//                         color="inherit"
//                         aria-label="menu"
//                         sx={{ mr: 2 }}
//                         onClick={toggleClass}
//                     >
                       
//                     </IconButton>
//                     <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//                         <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
//                             {/* <img src={logo} alt="logo" style={{ height: '50px', width: 'auto' }} /> */}
//                         </Link>
//                     </Typography>
//                     <List sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
//                         <ListItem button component={NavLink} to="/" exact activeClassName='is-active' onClick={toggleClass}>
//                             <ListItemIcon>
//                                 <HomeIcon />
//                             </ListItemIcon>
//                             <ListItemText primary="Home" />
//                         </ListItem>
//                         <ListItem button component={NavLink} to="/About" activeClassName='is-active' onClick={toggleClass}>
//                             <ListItemText primary="About" />
//                         </ListItem>
//                         <ListItem button onClick={toggleSubmenu}>
//                             <ListItemIcon>
//                                 <StoreIcon />
//                             </ListItemIcon>
//                             <ListItemText primary="Shop" />
//                             {openSubMenu ? <ExpandLess /> : <ExpandMore />}
//                         </ListItem>
//                         {openSubMenu && (
//                             <Paper style={{ position: 'absolute', top: '100%', zIndex: 1 }}>
//                                 <List>
//                                     <ListItem button component={NavLink} to="/Online" activeClassName='is-active' onClick={toggleClass}>
//                                         <ListItemText primary="Online Shop" />
//                                     </ListItem>
//                                     <ListItem button component={NavLink} to="/Offline" activeClassName='is-active' onClick={toggleClass}>
//                                         <ListItemText primary="Offline Shop" />
//                                     </ListItem>
//                                 </List>
//                             </Paper>
//                         )}
                     
//                         <ListItem button component={NavLink} to="/Contact" activeClassName='is-active' onClick={toggleClass}>
//                             <ListItemIcon>
//                                 <ContactMailIcon />
//                             </ListItemIcon>
//                             <ListItemText primary="Contact" />
//                         </ListItem>
//                     </List>
//                 </Toolbar>
//             </AppBar>
         
//         </Router>
//     )
// }

// export default Header;





   {/* <Collapse in={openSubMenu} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItem button component={NavLink} to="/Online" activeClassName='is-active' onClick={toggleClass} sx={{ pl: 4 }}>
                                    <ListItemText primary="Online Shop" />
                                </ListItem>
                                <ListItem button component={NavLink} to="/Offline" activeClassName='is-active' onClick={toggleClass} sx={{ pl: 4 }}>
                                    <ListItemText primary="Offline Shop" />
                                </ListItem>
                            </List>
                        </Collapse> */}