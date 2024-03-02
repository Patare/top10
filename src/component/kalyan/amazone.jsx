import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Link, Box } from '@mui/material';
import Card from "./card"
const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 'xl',
        margin: 'auto',
        padding: theme.spacing(4),
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      },
      disclaimer: {
        marginBottom: theme.spacing(2),
      },
      heading: {
        gridArea: "logo",
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: theme.spacing(4),
      },
      title: {
        marginBottom: theme.spacing(1),
        position:"relative",
        right:"500px",
        top:"20px",
        fontSize:"30px",
        fontWeight:"bold",
    [theme.breakpoints.down("sm")]: {
        width:"100%",
        position:"relative",
        right:"0px",
      fontSize: "13px",
    },
      },

      titles: {
        marginBottom: theme.spacing(1),
        position:"relative",
        right:"500px",
        top:"20px",
        fontSize:"30px",
        fontWeight:"bold",
    [theme.breakpoints.down("sm")]: {
        width:"100%",
        position:"relative",
        right:"0px",
      fontSize: "10px",
    },
      },

      logo: {
        width: "150px",
        height: "150px",
        borderRadius: "50%",
        overflow: 'hidden',
        alignItems:"center",
        justifyContent: "center",
        border: '1px solid #ccc',
        [theme.breakpoints.down("sm")]: {
            width: "100%",
            height: "100px",
            marginTop:"30px",
            marginRight:"20px"
        },
      },
      counter: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4),
      },
      menuLinks: {
        display: 'flex',
        width:"100%",
        gap: theme.spacing(2),
      },
      menuLink: {
        fontSize: '8px',
        '&:hover': {
          textDecoration: 'underline',
        },
        [theme.breakpoints.down("sm")]: {
            width: "100%",
            height: "100px",
            marginTop:"30px",
            marginRight:"20px"
        },
        
      },
}));

const Amazone = ({ }) => {
  const classes = useStyles();

  return (
    <section>
   
    <Box className={classes.root}>
      <Box className={classes.disclaimer}>
        <Typography variant="body2" color="textSecondary" align="center">
          When you buy through links on our site,{' '}
          <Link href="https://www.ziffdavis.com/terms-of-use" underline="always">
            we may earn a commission
          </Link>
          .
        </Typography>
      </Box>
      <Box className={classes.heading}>
          <img
            src="https://sgi3.offerscdn.net/i/zdcs-merchants/05kie42h3YvHwjr4G1w80Qq.h90.w170.flpad.v1319.bffffff.png"
            alt="View All Amazon Coupons"
            className={classes.logo}
          />
        <Box>
          <Typography variant="body6" className={classes.title}>
            Verified Amazon Coupons & Promo Codes
          </Typography>
          <Typography variant="body2"  className={classes.title} color="textSecondary">
            Trusted Partner since 2016
          </Typography>

          <Typography variant="body4"  className={classes.titles}>
        25 Coupons Validated by
       
        on <time dateTime="2024-03-01">Mar 1, 2024</time>
      </Typography>
        </Box>
      </Box>
      
      <Box className={classes.menuLinks}>
        <Typography  className={classes.menuLink}>
          Coupons
        </Typography>
        <Typography  className={classes.menuLink}>
          Store Info
        </Typography>
        <Typography  className={classes.menuLink}>
          FAQs
        </Typography>
      </Box>
    </Box>
    <Card/>
    </section>
  );
};

export default Amazone