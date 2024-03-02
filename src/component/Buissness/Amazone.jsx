import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Header from "../Home/Header";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { Container } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import FAQ from '../Home/FAQ';
import Reviews  from "../Home/Reviews";
import Footer from "../Home/Footer";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "grid",
    gridTemplateColumns: "auto auto",
    gap: "1rem",
    padding: "0 1rem",
    boxShadow: "0 4px 6px -1px rgba(0,0,0,.1), 0 2px 4px -2px rgba(0,0,0,.1)",
    justifyContent: "center",
    textAlign: "center",
    [theme.breakpoints.up("lg")]: {
      gridTemplateColumns: "150px auto",
      gridTemplateRows: "auto",
      gridTemplateAreas: `
        "logo title"
        "logo counter"
      `,
    },
  },
  logoContainer: {
    gridArea: "logo",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    border: "2px solid black",
  },
  titleContainer: {
    gridArea: "title",
  },
  counterContainer: {
    gridArea: "counter",
    marginLeft: "25%",
  },
  linkContainer: {
    display: "flex",
    justifyContent: "flex-end", // Aligns the content to the right
    gap: "1rem",
    marginTop: "1rem",
    marginRight: "6rem", // Adding right margin
    wordSpacing: "0.9rem", // Adds space between each word within the links
  },
  decoration: {
    textDecoration: "none",
    color: theme.palette.primary.main,
    textAlign: "right",
    fontFamily: "Arial, sans-serif", // Font style
    fontWeight: "bold",
    fontSize: "1rem", // Font size
    margin: "0", // Adjusts margin to remove default spacing
  },

  paper: {
    height: "100px",
    marginTop: "100px",
    position: "relative",
    right: "150px",
    marginBottom: theme.spacing(1),
    padding: theme.spacing(1),
    border: "4px solid #000033",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    "&:hover": {
      boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
    },
    marginRight: theme.spacing(40), // Adding right margin
    marginLeft: theme.spacing(40), // Adding left margin
  },
  
  paper1: {
    height: "100px",
    marginTop: "30px",
    position: "relative",
    right: "150px",
    marginBottom: theme.spacing(1),
    padding: theme.spacing(1),
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    "&:hover": {
      boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
    },
    marginRight: theme.spacing(40), // Adding right margin
    marginLeft: theme.spacing(40), // Adding left margin
  },
  editorChoice: {
    backgroundColor: "#000033",
    color: "#fff",
    padding: theme.spacing(1),
    borderRadius: "0px 0px 4px 4px",
    fontSize: "0.75rem",
    textTransform: "uppercase",
    fontWeight: "bold",
    width: "15%",
    textAlign: "center",
    position: "relative",
    top: "-10px",
    right: "12px",
    padding: "8px",
  },
  offerDetails: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(0),
    position: "relative",
    top: "-10px",
    fontSize: "0.75rem",
  },
  offerText: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  getOfferButton: {
    backgroundColor: "#009995",
    color: "#fff",
    borderRadius: "4px",
    padding: theme.spacing(1, 2),
    textTransform: "uppercase",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#0d47a1",
    },
  },

  root: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    border: 1px solid ${theme.palette.divider},
    boxShadow: theme.shadows[2],
    width: "20%",
    position: "absolute",
    left: "1100px",
    top: "460px",
  },
  title: {
    marginBottom: theme.spacing(1),
    fontWeight: "bold",
    fontSize: theme.typography.pxToRem(20),
  },
  link: {
    fontWeight: "bold"
    textDecoration: "underline";
    fontSize: theme.typography.pxToRem(14);
    color: theme.palette.text.secondary;
    "&:hover": {
      color: theme.palette.primary.main,
    }
  }
  root1: {
    // marginBottom: theme.spacing(4),
    // borderRadius: theme.shape.borderRadius,
    // border: 1px solid ${theme.palette.divider},
    // padding: theme.spacing(3),
    // boxShadow: theme.shadows[4],
    // width: "20%",
    // position: "relative",
    // left: "1100px",

    margin: theme.spacing(2),
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    border: 1px solid ${theme.palette.divider},
    boxShadow: theme.shadows[2],
    width: "20%",
    position: "absolute",
    left: "1100px",
    top: "850px",
  },
  root3: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    border: 1px solid ${theme.palette.divider},
    boxShadow: theme.shadows[2],
    width: "20%",
    position: "absolute",
    left: "1100px",
    top: "1200px",
  },
  expert: {
    marginBottom: theme.spacing(3),
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    color: "inherit",
  },
  avatar: {
    marginRight: theme.spacing(2),
  },

  my4: {
    marginTop: "  0.5rem",
    marginBottom: " 1rem",
    fontWeight: "medium",
  },
  link: {
    marginTop: "  0.5rem",
    marginBottom: " 1rem",
    display: "grid",
    fontSize: theme.typography.pxToRem(14), // or any desired font size
    textDecoration: "none",
    color: theme.palette.text.primary,
  },
  editorChoice1: {
    backgroundColor: "#000033",
    color: "#fff",
    padding: theme.spacing(1),
    borderRadius: "0px 0px 4px 4px",
    fontSize: "1.15rem",
    // textTransform: "uppercase",
    // fontWeight: "bold",
    width: "101%",
    textAlign: "left",
    position: "relative",
    top: "-50px",
    right: "12px",
    padding: "8px",
  },
  editorChoice4: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(2), // Add some space below the title
    backgroundColor: "#000033",
    color: "#fff",
    padding: theme.spacing(1),
    borderRadius: "0px 0px 4px 4px",
    fontSize: "0.75rem",
    textTransform: "uppercase",
    fontWeight: "bold",
    width: "101%",
    height:"20%",
    textAlign: "left",
    position: "relative",
    top: "-10px",
    right: "12px",
    padding: "8px",
  },
  paper3: {
    padding: theme.spacing(3), // Adjust padding as needed
    textAlign: 'center', // Center align the content
    height: "100px",
    marginTop: "100px",
    position: "relative",
    right: "150px",
    marginBottom: theme.spacing(1),
    padding: theme.spacing(1),
    border: "4px solid #000033",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    "&:hover": {
      boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
    },
    marginRight: theme.spacing(40), // Adding right margin
    marginLeft: theme.spacing(40), // Adding left margin
  },

  
}));

const Amazone = ({ title, price, uses, verified, daysLeft }) => {
  const classes = useStyles();

  return (
    <section>
      <Header />
      <Container>
        <Grid container spacing={2} className={classes.container}>
          <Grid item xs={12} lg={6} className={classes.logoContainer}>
            <img
              src="https://sgi3.offerscdn.net/i/zdcs-merchants/05kie42h3YvHwjr4G1w80Qq.h90.w170.flpad.v1319.bffffff.png"
              alt="View All Amazon Coupons"
              className={classes.logo}
            />
          </Grid>
          <Grid item xs={12} lg={12} className={classes.titleContainer}>
            <Typography variant="h4" gutterBottom fontWeight="bold">
              Verified Amazon Coupons & Promo Codes
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              Trusted Partner since 2016
            </Typography>
          </Grid>
          <Grid item xs={12} lg={6} className={classes.counterContainer}>
            <Typography variant="subtitle1">
              25 Coupons Validated by{" "}
              <Link
                href="https://www.offers.com/about/experts/"
                className={classes.decoration}
              >
                Our Experts
              </Link>{" "}
              on <time dateTime="2024-02-22">Feb 22, 2024</time>
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.linkContainer}>
            <Typography variant="body2">
              <Link href="#why-trust-us" className={classes.decoration}>
                Coupons
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link href="#why-trust-us" className={classes.decoration}>
                Why
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link href="#store-info" className={classes.decoration}>
                Store
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link href="#faqs" className={classes.decoration}>
                FAQs
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Paper className={classes.paper}>
        <div className={classes.editorChoice}>Editor's Choice</div>

        <div className={classes.offerDetails}>
          <div className="" style={{ marginTop: "-20px" }}>
            <Typography variant="h6" style={{ marginTop: "8px" }}>
              {title}
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Typography style={{ marginLeft: "30px", color: "#009975" }}>
                  <span style={{ fontSize: "15px", fontWeight: "bold" }}>
                    UP TO
                  </span>{" "}
                  <br />
                  <span style={{ fontSize: "25px", fontWeight: "bold" }}>
                    51%
                  </span>{" "}
                  <br />
                  <span style={{ fontSize: "25px", fontWeight: "bold" }}>
                    OFF
                  </span>
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography
                  style={{
                    position: "relative",
                    top: "20px",
                    right: "180px",
                    textAlign: "left",
                  }}
                  variant="h6"
                >{up to 51%  OF board+ Free Prime Shipping}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Button
                  variant="contained"
                  style={{ marginTop: "10px" }}
                  className={classes.getOfferButton}
                >
                  Get Offer
                </Button>
                <Typography
                  variant="body2"
                  style={{ marginTop: "10px", color: "red" }}
                >
                  4 DAYS LEFT
                </Typography>
              </Grid>
              <div
                className={classes.offerDetails}
                style={{ position: "relative", left: "150px", top: "-50px" }}
              >
                <Typography>1.8k uses</Typography>
                <Typography
                  style={{ position: "relative", left: "10px" }}
                >{`✓ Verified `}</Typography>
                <Typography
                  style={{ position: "relative", left: "20px" }}
                  className={classes.daysLeft}
                >
                  3 days ago
                </Typography>
              </div>
            </Grid>
          </div>
        </div>
      </Paper>

      <Paper className={classes.paper1}>
        {/* <span>Feb ,2024</span> */}
        <div className={classes.offerDetails}>
          <div className="">
            <Typography variant="h6">{title}</Typography>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Typography>
                  <span
                    style={{
                      fontSize: "30px",
                      fontWeight: "bold",
                      position: "relative",
                      top: "40px",
                      color: "#009995", // Font color set to #009995
                    }}
                  >
                    SALE
                  </span>
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography
                  style={{
                    position: "relative",
                    top: "20px",
                    right: "180px",
                    textAlign: "left",
                  }}
                  variant="h6"
                >{UP TO 50% Daily Offer + Free Prime Shipping}</Typography>
              </Grid>

              <Grid item xs={2}>
                <Button
                  variant="contained"
                  style={{ marginTop: "20px" }}
                  className={classes.getOfferButton}
                >
                  Get Offer
                </Button>
              </Grid>

              <div
                className={classes.offerDetails}
                style={{ position: "relative", left: "150px", top: "0px" }}
              >
                <Typography>1.8k uses</Typography>
                <Typography
                  style={{ position: "relative", left: "10px" }}
                >{`✓ Verified `}</Typography>
                <Typography
                  style={{ position: "relative", left: "20px" }}
                  className={classes.daysLeft}
                >
                  3 days ago
                </Typography>
              </div>
            </Grid>
          </div>
        </div>
      </Paper>

      <Paper className={classes.paper1}>
        {/* <span>Feb ,2024</span> */}
        <div className={classes.offerDetails}>
          <div className="" style={{ marginTop: "0px" }}>
            <Typography variant="h6" style={{ marginTop: "0px" }}>
              {title}
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Typography>
                  {/* <span
                    style={{
                      fontSize: "30px",
                      fontWeight: "bold",
                      position: "relative",
                      top: "40px",
                      color: "#009995", // Font color set to #009995
                    }}
                  > */}
                  <Typography style={{ marginLeft: "30px", color: "#009975" }}>
                    <span style={{ fontSize: "15px", fontWeight: "bold" }}>
                      UP TO
                    </span>{" "}
                    <br />
                    <span style={{ fontSize: "25px", fontWeight: "bold" }}>
                      51%
                    </span>{" "}
                    <br />
                    <span style={{ fontSize: "25px", fontWeight: "bold" }}>
                      OFF
                    </span>
                  </Typography>
                  {/* </span> */}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  style={{
                    position: "relative",
                    top: "20px",
                    right: "180px",
                    textAlign: "left",
                  }}
                  variant="h6"
                >{$19 serviv permanent + Free Prime Shipping}</Typography>
              </Grid>

              <Grid item xs={2}>
                <Button
                  variant="contained"
                  style={{ marginTop: "20px" }}
                  className={classes.getOfferButton}
                >
                  Get Offer
                </Button>
              </Grid>

              <div
                className={classes.offerDetails}
                style={{ position: "relative", left: "150px", top: "0px" }}
              >
                <Typography>1.8k uses</Typography>
                <Typography
                  style={{ position: "relative", left: "10px" }}
                >{`✓ Verified `}</Typography>
                <Typography
                  style={{ position: "relative", left: "20px" }}
                  className={classes.daysLeft}
                >
                  3 days ago
                </Typography>
              </div>
            </Grid>
          </div>
        </div>
      </Paper>

      <Paper className={classes.paper1}>
        {/* <span>Feb ,2024</span> */}
        <div className={classes.offerDetails}>
          <div className="">
            <Typography variant="h6">{title}</Typography>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Typography>
                  <span
                    style={{
                      fontSize: "30px",
                      fontWeight: "bold",
                      position: "relative",
                      top: "40px",
                      color: "#009995", // Font color set to #009995
                    }}
                  >
                    SALE
                  </span>
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography
                  style={{
                    position: "relative",
                    top: "20px",
                    right: "180px",
                    textAlign: "left",
                  }}
                  variant="h6"
                >{Starting at $${price} + Free Prime Shipping}</Typography>
              </Grid>

              <Grid item xs={2}>
                <Button
                  variant="contained"
                  style={{ marginTop: "20px" }}
                  className={classes.getOfferButton}
                >
                  Get Offer
                </Button>
              </Grid>

              <div
                className={classes.offerDetails}
                style={{ position: "relative", left: "150px", top: "0px" }}
              >
                <Typography>1.8k uses</Typography>
                <Typography
                  style={{ position: "relative", left: "10px" }}
                >{`✓ Verified `}</Typography>
                <Typography
                  style={{ position: "relative", left: "20px" }}
                  className={classes.daysLeft}
                >
                  3 days ago
                </Typography>
              </div>
            </Grid>
          </div>
        </div>
      </Paper>

      <Paper className={classes.paper1}>
        {/* <span>Feb ,2024</span> */}
        <div className={classes.offerDetails}>
          <div className="" style={{ marginTop: "0px" }}>
            <Typography variant="h6" style={{ marginTop: "0px" }}>
              {title}
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Typography>
                  <span
                    style={{
                      fontSize: "30px",
                      fontWeight: "bold",
                      position: "relative",
                      top: "40px",
                      color: "#009995", // Font color set to #009995
                    }}
                  >
                    SALE
                  </span>
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography
                  style={{
                    position: "relative",
                    top: "20px",
                    right: "180px",
                    textAlign: "left",
                  }}
                  variant="h6"
                >{Starting at $${price} + Free Prime Shipping}</Typography>
              </Grid>

              <Grid item xs={2}>
                <Button
                  variant="contained"
                  style={{ marginTop: "20px" }}
                  className={classes.getOfferButton}
                >
                  Get Offer
                </Button>
              </Grid>

              <div
                className={classes.offerDetails}
                style={{ position: "relative", left: "150px", top: "0px" }}
              >
                <Typography>1.8k uses</Typography>
                <Typography
                  style={{ position: "relative", left: "10px" }}
                >{`✓ Verified `}</Typography>
                <Typography
                  style={{ position: "relative", left: "20px" }}
                  className={classes.daysLeft}
                >
                  3 days ago
                </Typography>
              </div>
            </Grid>
          </div>
        </div>
      </Paper>

      <Paper className={classes.paper1}>
        {/* <span>Feb ,2024</span> */}
        <div className={classes.offerDetails}>
          <div className="">
            <Typography variant="h6">{title}</Typography>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Typography>
                  <span
                    style={{
                      fontSize: "30px",
                      fontWeight: "bold",
                      position: "relative",
                      top: "40px",
                      color: "#009995", // Font color set to #009995
                    }}
                  >
                    SALE
                  </span>
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography
                  style={{
                    position: "relative",
                    top: "20px",
                    right: "180px",
                    textAlign: "left",
                  }}
                  variant="h6"
                >{Starting at $${price} + Free Prime Shipping}</Typography>
              </Grid>

              <Grid item xs={2}>
                <Button
                  variant="contained"
                  style={{ marginTop: "20px" }}
                  className={classes.getOfferButton}
                >
                  Get Offer
                </Button>
              </Grid>

              <div
                className={classes.offerDetails}
                style={{ position: "relative", left: "150px", top: "0px" }}
              >
                <Typography>1.8k uses</Typography>
                <Typography
                  style={{ position: "relative", left: "10px" }}
                >{`✓ Verified `}</Typography>
                <Typography
                  style={{ position: "relative", left: "20px" }}
                  className={classes.daysLeft}
                >
                  3 days ago
                </Typography>
              </div>
            </Grid>
          </div>
        </div>
      </Paper>

      <Paper className={classes.paper1}>
        {/* <span>Feb ,2024</span> */}
        <div className={classes.offerDetails}>
          <div className="" style={{ marginTop: "0px" }}>
            <Typography variant="h6" style={{ marginTop: "0px" }}>
              {title}
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Typography>
                  <span
                    style={{
                      fontSize: "30px",
                      fontWeight: "bold",
                      position: "relative",
                      top: "40px",
                      color: "#009995", // Font color set to #009995
                    }}
                  >
                    SALE
                  </span>
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography
                  style={{
                    position: "relative",
                    top: "20px",
                    right: "180px",
                    textAlign: "left",
                  }}
                  variant="h6"
                >{Starting at $${price} + Free Prime Shipping}</Typography>
              </Grid>

              <Grid item xs={2}>
                <Button
                  variant="contained"
                  style={{ marginTop: "20px" }}
                  className={classes.getOfferButton}
                >
                  Get Offer
                </Button>
              </Grid>

              <div
                className={classes.offerDetails}
                style={{ position: "relative", left: "150px", top: "0px" }}
              >
                <Typography>1.8k uses</Typography>
                <Typography
                  style={{ position: "relative", left: "10px" }}
                >{`✓ Verified `}</Typography>
                <Typography
                  style={{ position: "relative", left: "20px" }}
                  className={classes.daysLeft}
                >
                  3 days ago
                </Typography>
              </div>
            </Grid>
          </div>
        </div>
      </Paper>

      <Paper className={classes.paper1}>
        {/* <span>Feb ,2024</span> */}
        <div className={classes.offerDetails}>
          <div className="" style={{ marginTop: "0px" }}>
            <Typography variant="h6" style={{ marginTop: "0px" }}>
              {title}
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Typography>
                  <span
                    style={{
                      fontSize: "30px",
                      fontWeight: "bold",
                      position: "relative",
                      top: "40px",
                      color: "#009995", // Font color set to #009995
                    }}
                  >
                    SALE
                  </span>
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography
                  style={{
                    position: "relative",
                    top: "20px",
                    right: "180px",
                    textAlign: "left",
                  }}
                  variant="h6"
                >{Starting at $${price} + Free Prime Shipping}</Typography>
              </Grid>

              <Grid item xs={2}>
                <Button
                  variant="contained"
                  style={{ marginTop: "20px" }}
                  className={classes.getOfferButton}
                >
                  Get Offer
                </Button>
              </Grid>

              <div
                className={classes.offerDetails}
                style={{ position: "relative", left: "150px", top: "0px" }}
              >
                <Typography>1.8k uses</Typography>
                <Typography
                  style={{ position: "relative", left: "10px" }}
                >{`✓ Verified `}</Typography>
                <Typography
                  style={{ position: "relative", left: "20px" }}
                  className={classes.daysLeft}
                >
                  3 days ago
                </Typography>
              </div>
            </Grid>
          </div>
        </div>
      </Paper>

      <Paper className={classes.paper1}>
        {/* <span>Feb ,2024</span> */}
        <div className={classes.offerDetails}>
          <div className="" style={{ marginTop: "0px" }}>
            <Typography variant="h6" style={{ marginTop: "0px" }}>
              {title}
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Typography>
                  <span
                    style={{
                      fontSize: "30px",
                      fontWeight: "bold",
                      position: "relative",
                      top: "40px",
                      color: "#009995", // Font color set to #009995
                    }}
                  >
                    SALE
                  </span>
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography
                  style={{
                    position: "relative",
                    top: "20px",
                    right: "180px",
                    textAlign: "left",
                  }}
                  variant="h6"
                >{Starting at $${price} + Free Prime Shipping}</Typography>
              </Grid>

              <Grid item xs={2}>
                <Button
                  variant="contained"
                  style={{ marginTop: "20px" }}
                  className={classes.getOfferButton}
                >
                  Get Offer
                </Button>
              </Grid>

              <div
                className={classes.offerDetails}
                style={{ position: "relative", left: "150px", top: "0px" }}
              >
                <Typography>1.8k uses</Typography>
                <Typography
                  style={{ position: "relative", left: "10px" }}
                >{`✓ Verified `}</Typography>
                <Typography
                  style={{ position: "relative", left: "20px" }}
                  className={classes.daysLeft}
                >
                  3 days ago
                </Typography>
              </div>
            </Grid>
          </div>
        </div>
      </Paper>{" "}

      <Paper className={classes.paper1}>
        {/* <span>Feb ,2024</span> */}
        <div className={classes.offerDetails}>
          <div className="" style={{ marginTop: "0px" }}>
            <Typography variant="h6" style={{ marginTop: "0px" }}>
              {title}
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Typography>
                  <span
                    style={{
                      fontSize: "30px",
                      fontWeight: "bold",
                      position: "relative",
                      top: "40px",
                      color: "#009995", // Font color set to #009995
                    }}
                  >
                    SALE
                  </span>
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography
                  style={{
                    position: "relative",
                    top: "20px",
                    right: "180px",
                    textAlign: "left",
                  }}
                  variant="h6"
                >{Starting at $${price} + Free Prime Shipping}</Typography>
              </Grid>

              <Grid item xs={2}>
                <Button
                  variant="contained"
                  style={{ marginTop: "20px" }}
                  className={classes.getOfferButton}
                >
                  Get Offer
                </Button>
              </Grid>

              <div
                className={classes.offerDetails}
                style={{ position: "relative", left: "150px", top: "0px" }}
              >
                <Typography>1.8k uses</Typography>
                <Typography
                  style={{ position: "relative", left: "10px" }}
                >{`✓ Verified `}</Typography>
                <Typography
                  style={{ position: "relative", left: "20px" }}
                  className={classes.daysLeft}
                >
                  3 days ago
                </Typography>
              </div>
            </Grid>
          </div>
        </div>
      </Paper>{" "}

      <Paper className={classes.paper1}>
        {/* <span>Feb ,2024</span> */}
        <div className={classes.offerDetails}>
          <div className="" style={{ marginTop: "0px" }}>
            <Typography variant="h6" style={{ marginTop: "0px" }}>
              {title}
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Typography>
                  <span
                    style={{
                      fontSize: "30px",
                      fontWeight: "bold",
                      position: "relative",
                      top: "40px",
                      color: "#009995", // Font color set to #009995
                    }}
                  >
                    SALE
                  </span>
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography
                  style={{
                    position: "relative",
                    top: "20px",
                    right: "180px",
                    textAlign: "left",
                  }}
                  variant="h6"
                >{Starting at $${price} + Free Prime Shipping}</Typography>
              </Grid>

              <Grid item xs={2}>
                <Button
                  variant="contained"
                  style={{ marginTop: "20px" }}
                  className={classes.getOfferButton}
                >
                  Get Offer
                </Button>
              </Grid>

              <div
                className={classes.offerDetails}
                style={{ position: "relative", left: "150px", top: "0px" }}
              >
                <Typography>1.8k uses</Typography>
                <Typography
                  style={{ position: "relative", left: "10px" }}
                >{`✓ Verified `}</Typography>
                <Typography
                  style={{ position: "relative", left: "20px" }}
                  className={classes.daysLeft}
                >
                  3 days ago
                </Typography>
              </div>
            </Grid>
          </div>
        </div>
      </Paper>

      <Paper className={classes.root}>
        <Typography variant="h3" className={classes.title} id="why-trust-us">
          Why Trust Us?
        </Typography>
        <div className="">
          <Typography style={{ fontSize: "13px" }}>
            Not all coupon sites are created equal — that's because{" "}
            <a href="/" title="Offers.com Homepage">
              Offers.com
            </a>{" "}
            has a team and a process that sets us apart. Every day, our curation
            team sources thousands of coupons and deals from across the internet
            from all of your favorite retailers. Then our validation team takes
            over, who work overnight to test each and every new code to ensure
            they work. From there, our merchandising team sorts through
            validated codes and hand picks the best coupons for our users. Our
            team last verified Amazon's deals on February 23, 2024.
          </Typography>
        </div>
        <Typography variant="body1" className={classes.link}>
          <a href="/blog/post/why-trust-us/" className={classes.link}>
            Learn How We Verify Coupons
          </a>
        </Typography>
      </Paper>

      <Paper className={classes.root1}>
        <Typography variant="h6" component="h6" className={classes.title}>
          Expert Spotlight
        </Typography>
        <Link
          href="https://www.offers.com/about/experts/jodie/"
          className={classes.expert}
        >
          <Avatar
            src="https://i.offers.com/imagery/experts/avatars/01hh2mjteth7e8wm2kfrssmgwx.fit_limit.size_48x48.convert_webp.jpg.webp"
            alt="Jodie - Merchandising Coordinator"
            className={classes.avatar}
          />
          <div>
            <Typography
              variant="subtitle1"
              component="span"
              className={classes.name}
            >
              Jodie
            </Typography>
            <Typography
              variant="body2"
              component="span"
              className={classes.role}
            >
              Merchandising Coordinator
            </Typography>
          </div>
        </Link>
        {/* Repeat similar structure for other experts */}
        <Link
          href="https://www.offers.com/about/experts/michelle/"
          className={classes.expert}
        >
          <Avatar
            src="https://i.offers.com/imagery/experts/avatars/01hfafgaqnyv63tbm4zfy8n9k6.fit_limit.size_48x48.convert_webp.jpg.webp"
            alt="Michelle - Merchandising Manager"
            className={classes.avatar}
          />
          <div>
            <Typography
              variant="subtitle1"
              component="span"
              className={classes.name}
            >
              Michelle
            </Typography>
            <Typography
              variant="body2"
              component="span"
              className={classes.role}
            >
              Merchandising Manager
            </Typography>
          </div>
        </Link>
        {/* Repeat similar structure for other experts */}
        <Link
          href="https://www.offers.com/about/experts/ingrid/"
          className={classes.expert}
        >
          <Avatar
            src="https://i.offers.com/imagery/experts/avatars/01hgekhfnh782tkab35137xk5h.fit_limit.size_48x48.convert_webp.jpg.webp"
            alt="Ingrid - Content Writer"
            className={classes.avatar}
          />
          <div>
            <Typography
              variant="subtitle1"
              component="span"
              className={classes.name}
            >
              Ingrid
            </Typography>
            <Typography
              variant="body2"
              component="span"
              className={classes.role}
            >
              Content Writer
            </Typography>
          </div>
        </Link>
        {/* Link to meet the entire team */}
        <Link
          href="https://www.offers.com/about/experts/"
          className={classes.expert}
          title="Meet Our Team of Experts"
        >
          <Typography
            variant="body1"
            component="span"
            className={classes.boldUnderline}
          >
            Meet Our Entire Team
          </Typography>
        </Link>
      </Paper>

      <Paper className={classes.root3}>
        <h2 className={classes.my4}>Similar Stores</h2>
        <div>
          <Link href="/stores/walmart/" className={classes.link}>
            Walmart
          </Link>
          <Link href="/stores/samsung/" className={classes.link}>
            Samsung
          </Link>
          <Link href="/stores/wayfair/" className={classes.link}>
            Wayfair
          </Link>
          <Link href="/stores/overstock/" className={classes.link}>
            Overstock
          </Link>
          <Link href="/stores/target/" className={classes.link}>
            Target
          </Link>
          <Link href="/stores/ebay/" className={classes.link}>
            eBay
          </Link>
          <Link href="/stores/samsclub/" className={classes.link}>
            Sam's Club
          </Link>
          <Link href="/stores/safeway/" className={classes.link}>
            Safeway
          </Link>
          <Link href="/stores/stonewallkitchen/" className={classes.link}>
            Stonewall Kitchen
          </Link>
          <Link href="/stores/walgreens/" className={classes.link}>
            Walgreens
          </Link>
          <Link href="/stores/dollar-tree/" className={classes.link}>
            Dollar Tree
          </Link>
          <Link href="/stores/kroger/" className={classes.link}>
            Kroger
          </Link>
          <Link href="/stores/99-cent-store/" className={classes.link}>
            99¢ Only Stores
          </Link>
          <Link href="/stores/costco/" className={classes.link}>
            Costco
          </Link>
          <Link href="/stores/albertsons/" className={classes.link}>
            Albertsons
          </Link>
        </div>
      </Paper>

      <Paper className={classes.paper3}>
      <Typography variant="h6" className={classes.editorChoice4}>
        Hand Picked Daily
      </Typography>
      <Grid item xs={6}>
                <Typography
                style={{
                    position: "relative",
                    bottom: "30px",
                    left: "300px",
                    textAlign: "left",
                    fontWeight: "bold", // Make the text bold

                  }}
                  variant="h6"
                >Get Future Amazone Offers <br/>
                & Today's Top Deals
                </Typography>
                
              </Grid>
             
      </Paper>
      <br/><br/><br/>
      <FAQ/>
      <Reviews/>

      <Footer/>
    </section>
  );
};

export default Amazone;