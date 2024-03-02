import { Button, Grid, Link, Typography } from "@mui/material";
import React, { useState } from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Container from '@mui/material/Container';
const MealDelivery = () => {
  const [open1, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open1);
  };

 
const dataingArr=[
  {
title:"Freshly Alternatives: 5 Similar Meal Delivery...",
author:"Anju Mobin",
date: "Dec, 2023",
imageUrl: "https://images.top10.com/f_auto,q_auto/v1/production/article/uploads/photo/httpskeepgooglecomu0mediav21cmV9brUj0skI8sJvEo9NMDykODURi4rYAkokgWsK6ddbqT5LnBIA4D4S0glIWw1uWFLvOkFDVc9pTNUCx0yC6dAtW5khUWqWgHfnSvBKgljgh0ufuyCPwi8aoPM76Ysz512-1702823968101.20231217144234.png"
  },
  {
    imageUrl:"https://images.top10.com/f_auto,q_auto/v1/production/articles/uploads/photo/httpskeep.google.comu0mediav21cmV9brUj0skI8sJvEo9NMDykODURi4rYAkokgWsK6ddbqT5LnBIA4D4S0glIWw1uWFLvOkFDVc9pTNUCx0yC6dAtW5khUWqWgHfnSvBKgljgh0ufuyCPwi8aoPM76Ysz512acceptimage2-2024-01-14T1601281.20240114140142.png",
    title:"Got the Winter Blues? These 10 Foods Can Help...",
    date:"Jan,2024",
    author:"Lauren Panoff"
  },
  {
    imageUrl:"https://images.top10.com/f_auto,q_auto/v1/production/products/uploads/photo/Hello%20Fresh_logo.20201221084138.png",
    title:"HelloFresh Review",
    date:"Aug,2023",
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
            5
            </span>{" "}
            <span style={{marginLeft:"15px",fontWeight:"bold",color:"black",fontSize:"20px"}}> Meal Delivery</span> 
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
                src="https://images.top10.com/f_auto,q_auto/v1/production/foundation-entities/uploads/photo/meal-delivery.20210105125548.jpg"
                style={{ width: "100%", width: "400px" ,marginRight:"100px"}}
                alt=""
              />
            </Grid>
            <Grid item xs={8} sx={{ position: "relative", right: "50px" }}>
              <Typography sx={{ fontWeight: "bold", fontSize: "22px" }}>    
            Top 10 Best Meal Delivery Services for 2024 -<br/> <span style={{marginRight:"240px"}}>Save Time and Money </span> 
              </Typography>
              <Typography sx={{ position: "relative", right: "195px",mt:2 }}>
                Feb , 2024
              </Typography>
              <Button
                variant="outlined"
                sx={{
                  position: "relative",
                  right: "120px",
                  fontWeight: "bold",
                  mt: 5,
                }}
              >
                View Meal Delivery <ArrowRightAltIcon />
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
      <img src={dataingArr[0].imageUrl} style={{width:"150px",height:"100px",marginTop:"20px"}} alt="" />
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

export default MealDelivery;




