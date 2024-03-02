import { Grid, Link, Typography,Popover ,AppBar, Toolbar, IconButton,Paper } from '@mui/material';
import React, { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import { Divider } from '@mui/material';
import {  ListItem } from '@mui/material';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import { Menu as MenuIcon, ExpandLess, ExpandMore } from '@mui/icons-material';
import Container from '@mui/material/Container';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';
import AdbIcon from '@mui/icons-material/Adb';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';

const pages = ['API', 'Developers', 'Database','Tools','Statistics','FAQ'];
const Kalyan = () => {
    const [anchorEl, setAnchorEl] = useState(true);

    const handlePopoverOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handlePopoverClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);

    const [open1, setOpen] = React.useState(false);

    const handleClick = () => {
      setOpen(!open1);
    };


    const [anchorElNav, setAnchorElNav] = React.useState(null);
 

    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
  
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };


    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
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
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('md')]: {
            width: '20ch',
          },
        },
      }));

      const codeData=
      {
                "ipAddress": "152.58.16.200",
                "continentCode": "AS",
                "continentName": "Asia",
                "countryCode": "IN",
                "countryName": "India",
                "isEuMember": false,
                "currencyCode": "INR",
                "currencyName": "Rupee",
                "phonePrefix": "91",
                "languages": [
                  "en-IN",
                  "hi",
                  "bn",
                  "te",
                  "mr",
                  "ta",
                  "ur",
                  "gu",
                  "kn",
                  "ml",
                  "or",
                  "pa",
                  "as",
                  "bh",
                  "sat",
                  "ks",
                  "ne",
                  "sd",
                  "kok",
                  "doi",
                  "mni",
                  "sit",
                  "sa",
                  "fr",
                  "lus",
                  "inc"
                ],
                "stateProvCode": "MH",
                "stateProv": "Maharashtra",
                "district": "Nagpur",
                "city": "Nagpur",
                "geonameId": 1262180,
                "latitude": 21.1463,
                "longitude": 79.0849,
                "gmtOffset": 5.5,
                "timeZone": "Asia/Kolkata",
                "weatherCode": "INXX0093",
                "asNumber": 55836,
                "asName": "RELIANCEJIO-IN",
                "isp": "Reliancejio",
                "linkType": "wireless",
                "usageType": "consumer",
                "organization": "Reliance Jio Infocomm Limited",
                "isCrawler": false,
                "isProxy": false,
                "threatLevel": "low"
              
        }
  return (
    <React.Fragment>
      <Container maxWidth="xl" sx={{background:"#185164"}}>
      <Grid container>
  <Grid item xs={12} >
  <AppBar position="static" sx={{ display: { xs: 'block', sm: 'none' } }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleClick}
              sx={{ marginRight: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
      
        
  <List
      sx={{ width: '100%',marginLeft:"10px", maxWidth: 200,color:"white", bgcolor: 'inherit' ,position:"relative",top:"0px"}}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
     
      <Collapse in={open1} timeout="auto" unmountOnExit>
        <List disablePadding sx={{marginLeft:"10px"}}>

        {pages.map((page) => (
    <ListItem key={page}>
      <ListItemButton onClick={handleCloseNavMenu} sx={{ pl: 1, marginTop: "-15px" }}>
        <ListItemText primary={page} />
      </ListItemButton>
    </ListItem>   
  ))}
   </List>
      </Collapse>
    </List>
    </AppBar>
  </Grid>

  <Grid item xs={12} md={12} sx={{background:"#185164"}}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <Box
            component="img"
            src="https://db-ip.com/logo/ip-geolocation.png"
            sx={{
              mr: 2,
              width: 100,
              height: 80,
              alignItems:"left",
              display: { xs: 'none', md: 'flex' } 
            }}
          />
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" sx={{width:"400px",color:"white"}}>{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: 'none', sm: 'none', md:'none' }, mr: 1 }} />
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
                textDecoration: 'none',
              }}
            ></Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, marginLeft:"380px" }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'black' }}
                >
                  {page}
                </Button>
              ))}
                <Search sx={{color:"black" ,width:"100%",height:"40px", marginTop:"10px"}}>
            <SearchIconWrapper>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}

            />
               <SearchIcon sx={{position:"absolute" ,right:"20px",top:"8px"}}/>
          </Search>
          <AccountCircle sx={{marginTop:"20px",color:"white"}}/>
            </Box>
          </Box>
        </Grid>


        <Grid container justifyContent="space-between" alignItems="center" sx={{marginTop:"30px",background:"#185164",marginTop:"-10px"}}>
      <Grid item xs={12} lg={5} textAlign="left" sx={{color:"white"}}>
        <div className="dbip">DBIP</div>
        <Typography variant="h4" className="title">IP geolocation API<br />and database</Typography>
        <Typography variant="body1" className="product-description" sx={{mt:3}}>The ultimate resource for IP address geolocation and network intelligence...</Typography>
        <Button sx={{mt:3 ,padding:"12px",mr:"10px",background:"#55d4da;", fontWeight:"bold"}} href="/api/" variant="contained" color="primary" >Try for free</Button>
        <Button sx={{mt:3 ,padding:"12px" ,background:"white",color:"#154360 ", fontWeight:"bold"}}  href="/api/doc.php" variant="contained" color="primary">Learn more</Button>
      </Grid>


      <Grid item xs={12} lg={6} sx={{mt:3,background:"#185164"}}>
      
            <Grid container justifyContent="space-between" alignItems="center">
        
            <Grid item lg={6} sx={{width:"360px"}}>
            <div className="browser white" style={{width:"650px",textAlign: 'left'
            }}>
              <form id="demo-form">
                <div className="search-container" >
                    <Paper>
                <Search sx={{color:"black"}}>
            <SearchIconWrapper>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Lookup IP Address or AS Number"
              inputProps={{ 'aria-label': 'search' }}
            />
<SearchIcon sx={{marginLeft:"300px",position:"relative",top:'10px'}} />
          </Search>
          </Paper>
                </div>
              </form>
        <Paper elevation={3} className="code" textAlign="left">
          <pre style={{ maxHeight: '25rem', overflowY: 'auto',marginTop:"0px" }}>
            <code style={{ textAlign: 'left'}} >
            {JSON.stringify(codeData, null, 2)}
            </code>
          </pre>
        
        </Paper>
        <div className="demo-examples mt-5 d-flex justify-content-between align-items-stretch" >
                <Button href="#" variant="contained" color="primary" sx={{ width: '100px', height: '30px' }} className="demo-ip">Your IP</Button>
                <Button href="#" variant="contained" sx={{background:'white',color:"black" ,width: '100px', height: '30px',ml:1 }} className="demo-ip demo-navgeo">Your IP</Button>
                <Button href="#" variant="contained" sx={{background:'white',color:"black",width: '100px', height: '30px' ,ml:1}} className="demo-input" data-demo-input="8.8.8.8">8.8.8.8</Button>
                <Button href="#" variant="contained" sx={{background:'white',color:"black",width: '200px', height: '30px',ml:1  }} className="demo-input" data-demo-input="2620:0:1c00:0:face:b00c::">2620:1c00:face:b00c::</Button>
                <Button href="#" variant="contained" sx={{background:'white',color:"black", width: '100px', height: '30px',ml:1 ,display: { xs: 'none', md: 'none' } }} className="demo-input" data-demo-input="AS7018">AS7018</Button>
              </div>
            </div>
          </Grid>
        </Grid>
          {/* </form>
        </div> */}
      </Grid>
    </Grid>

</Grid>
</Container>
    </React.Fragment>
  )
}

export default Kalyan
