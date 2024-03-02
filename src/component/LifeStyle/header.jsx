// import React from 'react';
// import { makeStyles } from '@mui/styles';
// import Typography from '@mui/material/Typography';


// const useStyles = makeStyles((theme) => ({
//   headerContainer: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     backgroundColor: theme.palette.primary.main, // Set your desired background color
//     padding: theme.spacing(2),
//     color: theme.palette.common.white, // Set text color
//   },
//   lastUpdated: {
//     display: 'flex',
//     alignItems: 'center',
//     marginBottom: theme.spacing(1),
//   },
//   headerTitle: {
//     marginTop: theme.spacing(2),
//   },
// }));

// const Header = () => {
//   const classes = useStyles();

//   return (
//     <div className={classes.headerContainer}>
//       <div className={classes.lastUpdated}>
//         <svg width="1em" height="1em" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" fontSize="14" className={classes.checkMark}>
//           <path d="M8.625 16.25a8.125 8.125 0 100-16.25 8.125 8.125 0 000 16.25z" fill="currentColor"></path>
//           <path d="M5.05 8.545l.866-1.126L8.17 9.325l3.64-4.073 1.04.953-4.594 5.027L5.05 8.545z" fill="#F5F5F5"></path>
//         </svg>
//         <Typography variant="body2" component="span" className={classes.lastUpdatedText}>
//           Last Updated: Feb 2024
//         </Typography>
//       </div>
//       <div className={classes.headerTitle}>
//         <Typography variant="h1">
//           The Best Online Dating Sites of 2024
//         </Typography>
//       </div>
//     </div>
//   );
// };

// export default Header;






import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, List, ListItem, SvgIcon } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  productCard: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
  },
  productLogo: {
    height: 'auto',
    width: '100%',
  },
}));

const Header = ({ productName, productDescription, reviewCount, score }) => {
  const classes = useStyles();

  return (
    <div className={classes.productCard}>
      <div className={classes.productLogo}>
        <img
          src="//umbrella.data.naturalint.com/production/products/uploads/photo/silver-singles.20180530111059.20220901071124.png"
          alt={productName}
          loading="lazy"
        />
      </div>
      <div>
        <Typography variant="h6">{productName}</Typography>
        <Typography>{productDescription}</Typography>
        <Typography>{reviewCount} reviews</Typography>
        <List>
          <ListItem>
            <SvgIcon fontSize="small">
              <path
                fill="currentColor"
                d="M1 6.002l4.6 4.6a.093.093 0 00.133 0L15 1.335"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </SvgIcon>
            <Typography>No swiping or searching required</Typography>
          </ListItem>
          <ListItem>
            <SvgIcon fontSize="small">
              <path
                fill="currentColor"
                d="M1 6.002l4.6 4.6a.093.093 0 00.133 0L15 1.335"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </SvgIcon>
            <Typography>Simple and easy-to-use platform</Typography>
          </ListItem>
        </List>
        <div>
          <Typography>Score: {score}</Typography>
        </div>
        <div>
          <a href="/dating/reviews/silversingles#visitors-reviews" target="_self">
            Visit Site
          </a>
          <SvgIcon fontSize="small">
            <path fill="currentColor" d="M9.405 6.613l-4.022 3.89a.718.718 0 000 1.039.779.779 0 001.074 0l5.32-5.144a.718.718 0 000-1.039L6.458.215A.771.771 0 005.92 0a.771.771 0 00-.537.215.718.718 0 000 1.04l4.022 3.889H.76c-.42 0-.76.329-.76.734 0 .406.34.735.76.735h8.645z" />
          </SvgIcon>
        </div>
      </div>
    </div>
  );
};

export default Header;
