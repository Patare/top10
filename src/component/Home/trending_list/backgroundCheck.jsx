import { Button, Grid, Link, Typography } from "@mui/material";
import React, { useState } from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Container from '@mui/material/Container';
const BackgroundCheck = () => {
  const [open1, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open1);
  };

 
const dataingArr=[
  {
title:"How to Catch a Cheater: Top Online Resources for...",
author:"Erin Donaghue",
date: "Jan, 2024",
imageUrl: "https://images.top10.com/f_auto,q_auto/v1/production/articles/uploads/photo/bgc.20201106092657.jpg"
  },
  {
    imageUrl:"https://images.top10.com/f_auto,q_auto/v1/production/articles/uploads/photo/Photo-2023-03-22T162402.4921.20230322142433.jpg",
    title:"Hiring in the Age of Information: A Survey",
    date:"Nov,2023",
    author:"Top10.com Staff"
  },
  {
    imageUrl:"https://images.top10.com/f_auto,q_auto/v1/production/products/uploads/photo/been-verified.20180611081736.png",
    title:"BeenVerified Review",
    date:"May,2023",
    author:""
  }
]

const handleMouseOver = (event) => {
  event.target.style.padding = '50px'; 
};
const handleMouseOut = (event) => {
  event.target.style.padding = '0'; 
};
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
              3
            </span>{" "}
            <span style={{marginLeft:"15px",fontWeight:"bold",color:"black",fontSize:"20px"}}>Background Check</span> 
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
                src="https://images.top10.com/f_auto,q_auto/v1/production/foundation-entities/uploads/photo/Untitleddesign68.20220713103907.jpg"
                style={{ width: "100%", width: "400px" ,marginRight:"100px"}}
                alt=""
              />
            </Grid>
            <Grid item xs={8} sx={{ position: "relative", right: "50px" }}>
              <Typography sx={{ fontWeight: "bold", fontSize: "22px" }}>
                Top 10 Best Online Background Check Sites &<br/> <span style={{marginRight:"290px"}}>Companies in 2024</span> 
              </Typography>
              <Typography sx={{ position: "relative", right: "210px",mt:2 }}>
                Jan , 2024
              </Typography>
              <Button
                variant="outlined"
                sx={{
                  position: "relative",
                  right: "140px",
                  fontWeight: "bold",
                  mt: 5,
                }}
              >
                View Background Check <ArrowRightAltIcon />
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

export default BackgroundCheck;




