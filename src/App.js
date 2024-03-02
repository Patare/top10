import './App.css';
import Home  from './component/Home/home'
import OurStory from './component/Home/ourStory';
import Silde from './component/silde';
import {BrowserRouter ,Routes,Route} from  'react-router-dom'
import Buissess from './component/Buissness/Buissess';
import Comparison from './component/LifeStyle/Dating/comparison';
import Aish from './aish'
import Local from './component/Homecompare/Local';
import Amazone from './component/kalyan/amazone';
function App() {
  return (
    <>
    <Amazone/>
     {/* <Local/> */}
    {/* <Buissess/>
   
<Comparison/> */}
{/* <Aish/> */}
    <Routes>
      {/* <Route path='/' element={<Home/>}/> */}
       {/* <Route path='/' element={<Buissess/>}/> */}
      {/* <Buissess/> */}

      
    </Routes>
    </>  
  );
}

export default App; 







// import React, { useState } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Button,
//   Menu,
//   MenuItem,
//   Typography,
//   IconButton,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   Box,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";

// function App() {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [menuType, setMenuType] = useState(null);
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const handleClick = (event, type) => {
//     setAnchorEl(event.currentTarget);
//     setMenuType(type);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//     setMenuType(null);
//   };

//   const handleMenuItemClick = (value) => {
//     console.log("selected value is =>", value);
//     handleClose();
//   };

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   return (
//     <div>
//       <AppBar position="static" >
//         <Toolbar >
//           <IconButton
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2,display: { xs: 'flex', md: 'none'} }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Box  sx={{display: { xs: 'none', md: 'flex'},justifyContent: "space-between"}}>
//           <Typography button variant="h6" component="div" sx={{ flexGrow: 1,cursor :"pointer",marginLeft:"2px" }} onClick={(e) => handleClick(e, "home")}>
//         Home
//           </Typography>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1,cursor :"pointer",marginLeft:"5px"  }} onClick={(e) => handleClick(e, "contact")}>
//           contact
//           </Typography>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1,cursor :"pointer",marginLeft:"10px"  }} onClick={(e) => handleClick(e, "products")}>
//           products
//           </Typography>
//           </Box>
//         </Toolbar>
//       </AppBar>

//       <Drawer
//         anchor="left"
//         open={mobileOpen}
//         onClose={handleDrawerToggle}
//         ModalProps={{
//           keepMounted: true,  
//         }}
//         sx={{display: { xs: 'flex', md: 'none' }}}
//       >
//         <List>
//           <ListItem button onClick={(e) => handleClick(e, "home")}>
//             <ListItemText primary="Home" />
//           </ListItem>
//           <ListItem button onClick={(e) => handleClick(e, "contact")}>
//             <ListItemText primary="Contact" />
//           </ListItem>
//           <ListItem button onClick={(e) => handleClick(e, "products")}>
//             <ListItemText primary="Products" />
//           </ListItem>
//         </List>
//       </Drawer>

//       <Toolbar /> {/* Ensure content below app bar */}

//       <Menu
//         id="menu"
//         anchorEl={anchorEl}
//         keepMounted
//         open={Boolean(anchorEl)}
//         onClose={handleClose}
//         sx={{  overflow: 'hidden'}}
//       >
//         {menuType === "home" && (
//           <>
//             <MenuItem onClick={() => handleMenuItemClick("Option 1")}>
//               Option 1
//             </MenuItem>
//             <MenuItem onClick={() => handleMenuItemClick("Option 2")}>
//               Option 2
//             </MenuItem>
//             <MenuItem onClick={() => handleMenuItemClick("Option 3")}>
//               Option 3
//             </MenuItem>
//           </>
//         )}
//         {menuType === "contact" && (
//           <>
//             <MenuItem onClick={() => handleMenuItemClick("Option 4")}>
//               Option 4
//             </MenuItem>
//             <MenuItem onClick={() => handleMenuItemClick("Option 5")}>
//               Option 5
//             </MenuItem>
//             <MenuItem onClick={() => handleMenuItemClick("Option 6")}>
//               Option 6
//             </MenuItem>
//           </>
//         )}
//         {menuType === "products" && (
//           <>
//             <MenuItem onClick={() => handleMenuItemClick("Option 7")}>
//               Option 7
//             </MenuItem>
//             <MenuItem onClick={() => handleMenuItemClick("Option 8")}>
//               Option 8
//             </MenuItem>
//             <MenuItem onClick={() => handleMenuItemClick("Option 9")}>
//               Option 9
//             </MenuItem>
//           </>
//         )}
//       </Menu>
//     </div>
//   );
// }

// export default App;


// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import { Grid, Typography, Link, Box, ListItem, ListItemText, List, Avatar } from '@material-ui/core';
// import Developer from './component/kalyan/developer';

// const useStyles = makeStyles((theme) => ({
//   container: {
//     padding: theme.spacing(2),
//     backgroundColor: '#f0f0f0', // Adjust as needed
//     paddingTop: '70px'

//   },
//   title: {
//     marginBottom: theme.spacing(1),
//     boxSizing:' border-box',
//     display: 'flex',
//     width: '100%',
//     alignItems: 'center',
//     marginBottom: '30px'
//   },
//   categoryItem: {
//     marginBottom: theme.spacing(1),
//   },
//   categoryIcon: {
//     marginRight: theme.spacing(1),
//   },
  
// }));

// const categories = [
//   { name: 'Lifestyle', iconSrc: 'https://images.top10.com/q_auto/v1/production/next/categories-directory/icons/lifestyle.svg', link: '/lifestyle' },
//   { name: 'Business', iconSrc: 'https://images.top10.com/q_auto/v1/production/next/categories-directory/icons/business.svg', link: '/business' },
//   { name: 'Health', iconSrc: 'https://images.top10.com/q_auto/v1/production/next/categories-directory/icons/health.svg', link: '/health' },
//   { name: 'Food', iconSrc: 'https://images.top10.com/q_auto/v1/production/next/categories-directory/icons/food.svg', link: '/food' },
//   { name: 'Love & Relationships', iconSrc: 'https://images.top10.com/q_auto/v1/production/next/categories-directory/icons/love-relationships.svg', link: '/love-relationships' },
 
// ];

// const categories1 = [
 
//   { name: 'Tech', iconSrc: 'https://images.top10.com/q_auto/v1/production/next/categories-directory/icons/tech.svg', link: '/tech' },
//   { name: 'Entertainment', iconSrc: 'https://images.top10.com/q_auto/v1/production/next/categories-directory/icons/entertainment.svg', link: '/entertainment' },
//   { name: 'Shopping', iconSrc: 'https://images.top10.com/q_auto/v1/production/next/categories-directory/icons/shopping.svg', link: '/shopping' },
//   { name: 'Home & Privacy', iconSrc: 'https://images.top10.com/q_auto/v1/production/next/categories-directory/icons/home-privacy.svg', link: '/home-privacy' },
//   { name: 'Family & Pets', iconSrc: 'https://images.top10.com/q_auto/v1/production/next/categories-directory/icons/family-pets.svg', link: '/family-pets' },
// ];

// const CategoriesShortlist = () => {
//   const classes = useStyles();

//   return (
//     <>
//    <Developer/>
//     <Grid container className={classes.container}>
//       <Grid item xs={12}>
//         <Typography variant="h5" className={classes.title}>Explore more Top10.com Categories</Typography>
//         <Link href="/all-lists" className={classes.title}> View all shortlists</Link>
//       </Grid>
//       {categories.map((category, index) => (
//         <Grid key={index}>
//           <ListItem className={classes.categoryItem} button component="a" href={category.link}>
//             <Avatar src={category.iconSrc} alt={category.name} className={classes.categoryIcon} />
//             <ListItemText primary={category.name} />
//           </ListItem>
//         </Grid>
//       ))}
//       <Grid item xs={12}>
//       </Grid>
//       {categories1.map((category, index) => (
//         <Grid key={index}>
//           <ListItem className={classes.categoryItem} button component="a" href={category.link}>
//             <Avatar src={category.iconSrc} alt={category.name} className={classes.categoryIcon} />
//             <ListItemText primary={category.name} />
//           </ListItem>
//         </Grid>
//       ))}
//     </Grid>
//     </>
//   );
// };

// export default CategoriesShortlist;
