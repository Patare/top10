import { Button, Grid, Link, Typography } from "@mui/material";
import React, { useState } from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Container from '@mui/material/Container';
const DatingSites = () => {
  const [open1, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open1);
  };

 
const dataingArr=[
  {
title:"Top 5 Best Tinder Alternatives 2024: Simila...",
author:"Suzannah",
date: "Jan, 2024",
imageUrl: "https://images.top10.com/f_auto,q_auto/v1/production/article/uploads/photo/Tinder_Alternatives-1706452075584.20240130124909.jpg"
  },
  {
    imageUrl:"https://images.top10.com/f_auto,q_auto/v1/production/articles/uploads/photo/dating-an-ai-partner-hero1.20240118084147.jpg",
    title:"40% of People Would Consider Dating an AI",
    date:"Feb,2024",
    author:"Antonia Greco"
  },
  {
    imageUrl:"https://images.top10.com/f_auto,q_auto/v1/production/products/uploads/photo/Zoosk_logo.20210325051140.20220715061638.png",
    title:"Zoosk Review",
    date:"Feb,2023",
    author:""
  }
]

const handleMouseOver = (event) => {
  event.target.style.padding = '50px'; // Add padding when mouse over
};

const handleMouseOut = (event) => {
  event.target.style.padding = '0'; // Reset padding when mouse out
};
  return (
    <React.Fragment>
       <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid xs={12}>
          <Typography
            variant="h6"
            sx={{ position: "relative", right: "350px", fontWeight: "bold" }}
          >
            Top 10 Trending List{" "}
            <span>
              <Link sx={{ position: "relative", left: "750px" }}>
                Collapse all
              </Link>
            </span>
          </Typography>
        </Grid>
      </Grid>

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
                padding: "15px",
                marginLeft: "10px",
                borderRadius: "50%",
                color: "white",
                fontWeight:"bold" 
              }}
            >
              1
            </span>{" "}
          <span style={{marginLeft:"15px",fontWeight:"bold",color:"black",fontSize:"20px"}}>Dating Sites & Apps</span>  {" "}
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
                src="https://images.top10.com/f_auto,q_auto/v1/production/foundation-entities/uploads/photo/dating.20210105130957.jpg"
                style={{ width: "100%", width: "400px" ,marginRight:"100px"}}
                alt=""
              />
            </Grid>
            <Grid item xs={8} sx={{ position: "relative", right: "50px" }}>
              <Typography sx={{ fontWeight: "bold", fontSize: "22px" }}>
                Top 10 Best Dating Sites and Apps 2024 - Your
                <br /> Guide to Finding Serious Relationships Online
              </Typography>
              <Typography sx={{ position: "relative", right: "215px",mt:2 }}>
                Jan , 2024
              </Typography>
              <Button
                variant="outlined"
                sx={{
                  position: "relative",
                  right: "150px",
                  fontWeight: "bold",
                  mt: 5,
                }}
              >
                View Dating Sites & Apps <ArrowRightAltIcon />
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
      <img src={dataingArr[0].imageUrl} style={{width:"150px",height:"100px"}} alt="" />
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
      <img src={dataingArr[1].imageUrl} style={{width:"150px",height:"100px",marginTop:"20px"}} alt="" />
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

export default DatingSites;














 