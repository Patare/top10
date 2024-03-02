// import * as React from 'react';
import { Grid, Link, Typography,Popover  } from '@mui/material';
import React, { useState } from 'react';
import { Divider } from '@mui/material';
import {  ListItem } from '@mui/material';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Container from '@mui/material/Container';
const Navbar = () => {
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

  return (
<>
<Container maxWidth="xl">
<Grid sx={{mt:2}}>
<Typography variant='h7' sx={{fontSize:"13px"}}>The listings featured on this site are from companies from which this site receives compensation. This influences where, how and in what order such listings appear on this site.
<Link sx={{cursor:"pointer", marginLeft:"40px"}}    onMouseOver={handlePopoverOpen}   onMouseOut={handlePopoverClose}>Advertising Disclosure    </Link>
<Popover
sx={{width:"40%", marginLeft:"60%", marginTop:"-300px"}}
            open={open}
            anchorEl={anchorEl}
            onClose={handlePopoverClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <div style={{ padding: '20px',fontSize:"15px"}}>
            Top10.com is a free online resource that strives to offer helpful content and comparison features to our visitors. We accept advertising compensation from companies that appear on the site, which impacts the location and order in which brands (and/or their products) are presented, and also impacts the score that is assigned to it. Company listings on this page DO NOT imply endorsement. We do not feature all providers on the market. Except as expressly set forth in our <span style={{color:"blue"}}>Terms of Use</span> , all representations and warranties regarding the information presented on this page are disclaimed. The information, including pricing, which appears on this site is subject to change at any time.
            </div>
          </Popover>
 
</Typography>
<Divider sx={{mt:1}}/>
</Grid>

<Grid container spacing={12}>
  <Grid item xs={3} sx={{color:"red",fontWeight:"bold", fontSize:"20px",mt:2}}><span>Top10.com</span></Grid>
  <Grid item xs={5}></Grid>

  <Grid item xs={4} >
  <List
      sx={{ width: '50%',marginLeft:"10px", maxWidth: 200, bgcolor: 'white' ,position:"absolute",top:"45px"}}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
  <ListItemButton onClick={handleClick} sx={{marginRight:"20px"}}>
        <ListItemText primary="categories" sx={{marginLeft:"50px"}}/>
        {open1 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open1} timeout="auto" unmountOnExit>
        <List component="div" disablePadding sx={{marginLeft:"10px"}}>
        <ListItem>
          <ListItemButton sx={{ pl: 1 }}>
            <ListItemText sx={{marginTop:"-10px"}} primary="lifestyle" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton sx={{ pl: 1 }}>
            <ListItemText sx={{marginTop:"-15px"}} primary="business" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton sx={{ pl: 1 }}>
            <ListItemText sx={{marginTop:"-15px"}} primary="health" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton sx={{ pl: 1 }}>
            <ListItemText sx={{marginTop:"-15px"}} primary="food" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton sx={{ pl: 1 }}>
            <ListItemText sx={{marginTop:"-15px"}} primary="love & relationship" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton sx={{ pl: 1 }}>
            <ListItemText sx={{marginTop:"-15px"}} primary="Tech" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton sx={{ pl: 1 }}>
            <ListItemText sx={{marginTop:"-15px"}} primary="entertainment" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton sx={{ pl: 1 }}>
            <ListItemText sx={{marginTop:"-15px"}} primary="shopping" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton sx={{ pl: 1 }}>
            <ListItemText sx={{marginTop:"-15px"}} primary="home & privacy" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton sx={{ pl: 1 }}>
            <ListItemText sx={{marginTop:"-15px"}} primary="family & pets" />
          </ListItemButton>
        </ListItem>
        </List>
      </Collapse>
    </List>
  </Grid>
</Grid>


<div style={{ position: 'relative', height: '100vh', overflowY: 'auto' }}>
  <img 
    style={{ position: 'absolute', top: 50, left: 0, width: '100%', zIndex: -1 }}
    src="https://images.top10.com/iu/f_auto/q_auto/v1/production/next/homepage/image/welcome-placeholder-web-2x-v3.jpg" 
    alt="Description of the image" 
  />
   <div style={{ position: 'absolute', top: '30%', left: '25%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'black' }}>
    <h1>The <span style={{color:"red"}}>Top10</span>  Best,<br/>Every Time</h1>
    <p style={{fontSize:"20px"}}><span style={{fontWeight:"bold"}}>Stop Searching, Start Finding</span><br/>
We compare so you don't have to</p>
  </div>
</div>

{/* <Grid container spacing={2}>
      <Grid item >
        <img width="100%" height="100%" src="https://images.top10.com/iu/f_auto/q_auto/v1/production/next/homepage/image/welcome-placeholder-web-2x-v3.jpg" alt="Description of the image" />
      </Grid>
    </Grid> */}
</Container>

</>
  )
}

export default Navbar












   {/* <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        sx={{ position:"absolute",left:'50%',top:"-350px"}}
      >
        <DialogTitle sx={{ m: 0, p: 2}} id="customized-dialog-title">
          Modal title
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </Typography>
        </DialogContent>
      </BootstrapDialog> */}