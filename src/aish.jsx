import React, { useState } from 'react';
import { Typography, Link, Grid, Paper } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles';

const theme = createTheme();

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
    padding: '10%',
  },
  header: {
    marginBottom: theme.spacing(2),
  },
  categoryItem: {
    marginBottom: theme.spacing(1),
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, border-color 0.3s ease',
    border: '2px solid transparent',
  },
  categoryLink: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    width: '100%',
    height: '100%',
    padding: theme.spacing(2),
    boxSizing: 'border-box',
  },
  categoryIcon: {
    marginRight: theme.spacing(1),
    width: 30,
    height: 30,
  },
  footer: {
    marginTop: theme.spacing(2),
  },
}));

const categoriesData = [
  // Categories data...
  { title: 'Lifestyle', link: '/lifestyle', iconSrc: 'https://images.top10.com/q_auto/v1/production/next/categories-directory/icons/lifestyle.svg' },
  { title: 'Business', link: '/business', iconSrc: 'https://images.top10.com/q_auto/v1/production/next/categories-directory/icons/business.svg' },
  { title: 'Health', link: '/health', iconSrc: 'https://images.top10.com/q_auto/v1/production/next/categories-directory/icons/health.svg' },
  { title: 'Food', link: '/food', iconSrc: 'https://images.top10.com/q_auto/v1/production/next/categories-directory/icons/food.svg' },
  { title: 'Love & Relationships', link: '/love-relationships', iconSrc: 'https://images.top10.com/q_auto/v1/production/next/categories-directory/icons/love-relationships.svg' },
  { title: 'Tech', link: '/tech', iconSrc: 'https://images.top10.com/q_auto/v1/production/next/categories-directory/icons/tech.svg' },
  { title: 'Entertainment', link: '/entertainment', iconSrc: 'https://images.top10.com/q_auto/v1/production/next/categories-directory/icons/entertainment.svg' },
  { title: 'Shopping', link: '/shopping', iconSrc: 'https://images.top10.com/q_auto/v1/production/next/categories-directory/icons/shopping.svg' },
  { title: 'Home & Privacy', link: '/home-privacy', iconSrc: 'https://images.top10.com/q_auto/v1/production/next/categories-directory/icons/home-privacy.svg' },
  { title: 'Family & Pets', link: '/family-pets', iconSrc: 'https://images.top10.com/q_auto/v1/production/next/categories-directory/icons/family-pets.svg' },
];

const CategoriesShortlist = () => {
  const classes = useStyles();
  const [clickedIndex, setClickedIndex] = useState(null);

  const handleBoxClick = (index) => {
    setClickedIndex(index);
  };

  return (
    <Paper className={classes.container}>
      <div className={classes.header}>
        <Typography variant="h3">Explore more Top10.com Categories</Typography>
        <Link href="/all-lists">View all shortlists</Link>
      </div>
      <Grid container spacing={2}>
        {categoriesData.map((category, index) => (
          <Grid item xs={6} sm={6} md={4} lg={3} xl={2} key={index}>
            <Paper
              className={`${classes.categoryItem} ${clickedIndex === index ? classes.clicked : ''}`}
              sx={{ bgcolor: '#fff', borderRadius: '5px', display: 'flex', flexDirection: 'column' }}
              onClick={() => handleBoxClick(index)}
              style={{ borderColor: clickedIndex === index ? 'black' : 'transparent' }}
            >
              <Link href={category.link} className={classes.categoryLink}>
                <img src={category.iconSrc} alt={category.title} className={classes.categoryIcon} />
                <Typography>{category.title}</Typography>
              </Link>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <div className={classes.footer}>
        <Link href="/all-lists">View all shortlists</Link>
      </div>
    </Paper>
  );
};

export default CategoriesShortlist;
