import { Button, Grid, Link, Typography } from "@mui/material";
import React, { useState } from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Container from '@mui/material/Container';
const HomeSecurity = () => {
  const [open1, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open1);
  };

const dataingArr=[
  {
title:"10 Critical Things I Always Do After Moving to a Ne...",
author:"Chris Wilson",
date: "Dec, 2023",
imageUrl: "https://images.top10.com/f_auto,q_auto/v1/production/article/uploads/photo/shutterstock_669633394-1684245514778.20231218140328.jpg"
  },
  {
    imageUrl:"https://images.top10.com/f_auto,q_auto/v1/production/articles/uploads/photo/httpskeep.google.comu0mediav21cmV9brUj0skI8sJvEo9NMDykODURi4rYAkokgWsK6ddbqT5LnBIA4D4S0glIWw1uWFLvOkFDVc9pTNUCx0yC6dAtW5khUWqWgHfnSvBKgljgh0ufuyCPwi8aoPM76Ysz512acceptimage2-2023-12-17T1545391.20231217134632.png",
    title:"Top 10 Christmas Holiday Home Safety Tips...",
    date:"Dec,2023",
    author:"Daniel Blechynden"
  },
  {
    imageUrl:"https://images.top10.com/f_auto,q_auto/v1/production/products/uploads/photo/ADT_Logo_xSite.20210311140511.png",
    title:"ADT Review",
    date:"March,2023",
    author:""
  }
]

  return (
    <React.Fragment>
       <Container maxWidth="lg">
      <Grid xs={12}>
        <ListItemButton
          onClick={handleClick}
          sx={{
          
            mt: 3,
            padding: "20px",
            background: "#EEEEEE",
            color: "blue",
          }}
        >
          <ListItemText sx={{ marginLeft: "50px" }}>
            <span
              style={{
                background: "#E74C3C",
                fontWeight:"bold" ,
                padding: "15px",
                marginLeft: "10px",
                borderRadius: "50%",
                color: "white",
              }}
            >
            8
            </span>{" "}
            <span style={{marginLeft:"15px",fontWeight:"bold",color:"black",fontSize:"20px"}}>Home Security</span> 
            {" "}
          </ListItemText>
          {open1 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse
          in={open1}
          timeout="auto"
          unmountOnExit
          sx={{
            border: "5px solid  #EEEEEE",
          }}
        >
               
          <Grid container spacing={2} columns={16} sx={{ mt: 2 }}>
            <Grid item xs={8}>
              <img
                src="https://images.top10.com/f_auto,q_auto/v1/production/foundation-entities/uploads/photo/Untitleddesign86.20221025070645.jpg"
                style={{ width: "100%", width: "400px" ,marginRight:"100px"}}
                alt=""
              />
            </Grid>
            <Grid item xs={8} sx={{ position: "relative", right: "50px" }}>
              <Typography sx={{ fontWeight: "bold", fontSize: "22px" }}>    
              Top 10 Best Home Security Systems <br/><span style={{marginRight:"13px"}}> Companies 2024 - Keep Your Home</span> 
              </Typography>
              <Typography sx={{ position: "relative", right: "155px",mt:2 }}>
               Jan , 2024
              </Typography>
              <Button
                variant="outlined"
                sx={{
                  position: "relative",
                  right: "80px",
                  fontWeight: "bold",
                  mt: 5,
                }}
              >
                View Home Security<ArrowRightAltIcon />
              </Button>
            </Grid>
          </Grid>


         
  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={4} >
    <Grid container xs={6}  alignItems="center">
      <Grid item sx={{position:"relative",left:"150px",top:"80px",fontWeight:"bold"}}>
      <span >{dataingArr[0].title}</span> <br/>
      <span>{dataingArr[0].date}</span>
    </Grid>
    </Grid>
    <Grid container xs={6}  alignItems="center">
    <Grid item>
      <img src={dataingArr[0].imageUrl} style={{width:"150px",height:"100px",marginTop:"0px"}} alt="" />
    </Grid>
    </Grid>
    
  </Grid>
  <Grid item xs={4}>
  <Grid container xs={6}  alignItems="center">
      <Grid item sx={{position:"relative",left:"150px",top:"80px",fontWeight:"bold"}}>
      <span >{dataingArr[1].title}</span> <br/>
      <span>{dataingArr[1].date}</span>
    </Grid>
    </Grid>
    <Grid container xs={6}  alignItems="center">
    <Grid item>
      <img src={dataingArr[1].imageUrl} style={{width:"150px",height:"100px",marginTop:"0px"}} alt="" />
    </Grid>
    </Grid>
  </Grid>
  <Grid item xs={4}>
  <Grid container xs={6}  alignItems="center">
      <Grid item sx={{position:"relative",left:"170px",top:"80px",fontWeight:"bold"}}>
      <span >{dataingArr[2].title}</span> <br/>
      <span>{dataingArr[2].date}</span>
    </Grid>
    </Grid>
    <Grid container xs={6}  alignItems="center">
    <Grid item>
      <img src={dataingArr[2].imageUrl} style={{border:"1px solid #BFC9CA",padding:"5px",marginTop:"40px", width:"150px",height:"100px"}} alt="" />
    </Grid>
    </Grid>
  </Grid>
</Grid>
        </Collapse>
      </Grid>
      </Container>
    </React.Fragment>
  );
};

export default HomeSecurity;




