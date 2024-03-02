import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Link, Grid } from '@material-ui/core';
import { Container } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(2),
    margin: '0 10px',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
  },
  image: {
    marginRight: theme.spacing(2),
  },
}));

const OurStory = () => {
  const classes = useStyles();

  return (
    <Container>
    <Grid container spacing={2} className={classes.container}>
       <Grid container spacing={2}>
      {/* First Part (Image) */}
      <Grid item xs={4} className={classes.item}>
        <img
          src="https://images.top10.com/iu/f_auto/q_auto/v1/production/next/homepage/image/trust/our-story.svg"
          alt="Our Story"
          className={classes.image}
        />
      </Grid>

      {/* Second Part (Content) */}
      <Grid item xs={4} className={classes.item}>
        <div>
          <Typography variant="h6">Our Story</Typography>
          <Typography variant="body1">We’ve made it our mission to make decisions easier by narrowing your options down to Top 10 lists from the best brands available.</Typography>
          <Link href="/about-us">Learn More</Link>
        </div>
      </Grid>

      {/* Third Part (Empty Space) */}
      <Grid item xs={4} className={classes.emptySpace}></Grid>
    </Grid>
    <Grid container spacing={2}>
      {/* First Part (Image) */}
      <Grid item xs={4} className={classes.emptySpace}></Grid>
 

      {/* Second Part (Content) */}
      <Grid item xs={4} className={classes.item}>
        <div>
          <Typography variant="h6">Our Team</Typography>
          <Typography variant="body1">Our dedicated team rigorously researches and tests hundreds of products and services to create Top 10 lists for each category.</Typography>
          <Link href="/about-us">Learn More</Link>
        </div>
      </Grid>

      {/* Third Part (Empty Space) */}
    <Grid item xs={4} className={classes.item}>
        <img
        style={{width:"100%"}}
src="https://images.top10.com/iu/f_auto/q_auto/v1/production/next/homepage/image/trust/our-team.svg"
          alt="Our Story"
          className={classes.image}
        />
      </Grid>
      </Grid>
    <Grid container spacing={2}>
      {/* First Part (Image) */}
      <Grid item xs={4} className={classes.item}>
        <img
src="https://images.top10.com/iu/f_auto/q_auto/v1/production/next/homepage/image/trust/our-method.svg"  
        alt="Our Story"
          className={classes.image}
        />
      </Grid>

      {/* Second Part (Content) */}
      <Grid item xs={4} className={classes.item}>
        <div>
          <Typography variant="h6">Our Method</Typography>
          <Typography variant="body1"> We create a level playing field by scoring every brand based on an algorithm that consists of four parameters</Typography>
          <Link href="/about-us">Learn More</Link>
        </div>
      </Grid>

      {/* Third Part (Empty Space) */}
      <Grid item xs={4} className={classes.emptySpace}></Grid>
    </Grid>
    </Grid>
    </Container>
  );
};

export default OurStory;