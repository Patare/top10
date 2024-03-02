import React from "react";
import { Typography, Grid, Paper } from "@mui/material";
import { Button, IconButton } from "@mui/material";
import Navbar from "../LifeStyle/navbar";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Header from "../LifeStyle/header";

function Buissess() {
  return (
    <>
    <Navbar/>
    <div className="page-header__container" style={{ margin: "0 60px" }}>
      <div className="page-header__text">
        <Typography
          variant="h1"
          className="page-header__text__title"
          style={{ fontSize: "1rem", marginBottom: "2px" }}
        >
          <span className="page-header__text__title__primary">Home/ </span>
          <span className="page-header__text__title__alt">Business</span>
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <div className="page-header__text">
              <Typography
                variant="h1"
                className="page-header__text__title"
                style={{ fontSize: "2rem", marginBottom: "20px" }}
              >
                <span className="page-header__text__title__primary">
                  Top 10{" "}
                </span>
                <span
                  className="page-header__text__title__alt"
                  style={{ color: "red", fontSize: "inherit" }}
                >
                  Business
                </span>
                <span className="page-header__text__title__primary">
                  {" "}
                  Lists
                </span>
              </Typography>

              <Typography
                variant="subtitle1"
                className="page-header__text__subtitle"
                style={{
                  marginTop: "20px",
                  fontStyle: "italic",
                  fontFamily: "Arial, sans-serif", // Example font family
                  color: "#555", // Example color
                  fontSize: "1.2rem", // Increased font size
                }}
              >
                From website builders to accounting software, find tools to
                compare the products and services that businesses need
              </Typography>
            </div>
          </Grid>
          <Grid
            item
            xs={6}
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Paper
                  style={{
                    width: "260px",
                    height: "auto",
                    position: "relative",
                    marginTop: "20px",
                    marginRight: "20px",
                  }}
                >
                  <img
                    src="https://umbrella.data.naturalint.com/production/categories/images/business/website-builders.jpg"
                    alt="Image 1"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      width: "100%",
                      height: "auto",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "95%",
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      color: "white",
                      padding: "5px",
                    }}
                  >
                    Top10 Website Builders
                  </div>
                  <Button
                    variant="contained"
                    color="error"
                    style={{
                      position: "absolute",
                      bottom: 10,
                      right: 5,
                      width: 30,
                      height: 30,
                    }}
                  >
                    <ArrowForwardIcon style={{ color: "white" }} />
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper
                  style={{ width: "260px", height: "auto", marginTop: "10px" }}
                >
                  <img
                    src="https://umbrella.data.naturalint.com/production/categories/images/business/pos.jpg"
                    alt="Image 2"
                    style={{ width: "100%", height: "auto" }}
                  />
                  
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>


<br/><br/><br/><br/>
<Grid container spacing={2}>
  
  <Grid item xs={6}>
  {/* <Typography variant="h1" component="span" style={{ fontSize: "3rem", marginRight: "10px" }}>1</Typography> */}
  
  <Grid container alignItems="center">
      <Grid item xs={1}>
      <Typography variant="h1" style={{ fontSize: "3rem", color: "#757575" }}>1.</Typography>

      </Grid>
      <Grid item xs={11}>
        <div className="page-header__text">
          <Typography
            variant="h1"
            className="page-header__text__title"
            style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "20px" }}

          >
            <span className="page-header__text__title__primary">
              Our Best{" "}
            </span>
            <span
              className="page-header__text__title__alt"
              style={{ color: "red", fontSize: "inherit" }}
            >
              Website Builders
            </span>
            <span className="page-header__text__title__primary">
              {" "}
              of 2024
            </span>
            <Typography
              variant="subtitle1"
              className="page-header__text__subtitle"
              style={{
                // fontStyle: "italic",
                // fontFamily: "Arial, sans-serif", // Example font family
                color: "#75575", // Example color
                fontSize: "1.0rem", // Increased font size
              }}
            >
              Get the tools you need to turn your vision into reality
          </Typography>
          </Typography>
   
         
        </div>
      </Grid>
    </Grid>  
  </Grid>
  
  <Grid item xs={6}>
    <Paper
      style={{
        width: "260px",
        height: "auto",
        position: "relative",
        marginBottom: "10px",
        marginRight: "20px",
      }}
    >
      
      <img
        src="https://umbrella.data.naturalint.com/production/categories/images/business/website-builders.jpg"
        alt="Image 1"
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
          width: "100%",
          height: "auto",
        }}
      />
    </Paper>
   
  </Grid>
</Grid>

<Grid container spacing={2} >
  
  <Grid item xs={6} style={{  borderTop:'1px solid #dfdfdf' }}>
  {/* <Typography variant="h1" component="span" style={{ fontSize: "3rem", marginRight: "10px" }}>1</Typography> */}
  
  <Grid container alignItems="center"  >
      <Grid item xs={1}>
      <Typography variant="h1" style={{ fontSize: "3rem", color: "#757575", }}>2.</Typography>

      </Grid>
      <Grid item xs={11}>
        <div className="page-header__text">
          <Typography
            variant="h1"
            className="page-header__text__title"
            style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "20px" }}

          >
            <span className="page-header__text__title__primary">
             Compare Our Best Buissness{" "}
            </span>
            <span
              className="page-header__text__title__alt"
              style={{ color: "red", fontSize: "inherit" }}
            >
             Communication Toolss
            </span>
            <span className="page-header__text__title__primary">
              {" "}
             Provider of 2024
            </span>
            <Typography
              variant="subtitle1"
              className="page-header__text__subtitle"
              style={{
                // fontStyle: "italic",
                // fontFamily: "Arial, sans-serif", // Example font family
                color: "#75575", // Example color
                fontSize: "1.0rem", // Increased font size
              }}
            >
              Get the tools you need to turn your vision into reality
          </Typography>
          </Typography>
   
         
        </div>
      </Grid>
    </Grid>  
  </Grid>
  
  <Grid item xs={6} >
    <Paper
      style={{
        width: "260px",
        height: "auto",
        position: "relative",
        marginBottom: "20px",
        marginRight: "20px",
        
      }}
    >
      
      <img
        src="https://images.top10.com/f_auto,q_auto/v1/production/categories/images/business/communication-tools.jpg"
        alt="Image 1"
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
          width: "100%",
          height: "auto",

        }}
      />
    </Paper>
   
  </Grid>
</Grid>

<Grid container spacing={2}>
  
  <Grid item xs={6} style={{  borderTop:'1px solid #dfdfdf' }} >
  {/* <Typography variant="h1" component="span" style={{ fontSize: "3rem", marginRight: "10px" }}>1</Typography> */}
  
  <Grid container alignItems="center">
      <Grid item xs={1}>
      <Typography variant="h1" style={{ fontSize: "3rem", color: "#757575" }}>3.</Typography>

      </Grid>
      <Grid item xs={11}>
        <div className="page-header__text">
          <Typography
            variant="h1"
            className="page-header__text__title"
            style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "10px" }}

          >
            <span className="page-header__text__title__primary">
              Our Best{" "}
            </span>
            <span
              className="page-header__text__title__alt"
              style={{ color: "red", fontSize: "inherit" }}
            >
              Website Builders
            </span>
            <span className="page-header__text__title__primary">
              {" "}
              of 2024
            </span>
            <Typography
              variant="subtitle1"
              className="page-header__text__subtitle"
              style={{
                // fontStyle: "italic",
                // fontFamily: "Arial, sans-serif", // Example font family
                color: "#75575", // Example color
                fontSize: "1.0rem", // Increased font size
              }}
            >
              Get the tools you need to turn your vision into reality
          </Typography>
          </Typography>
   
         
        </div>
      </Grid>
    </Grid>  
  </Grid>
  
  <Grid item xs={6}>
    <Paper
      style={{
        width: "260px",
        height: "auto",
        position: "relative",
        marginBottom: "20px",
        marginRight: "20px",
      }}
    >
      
      <img
        src="https://images.top10.com/f_auto,q_auto/v1/production/categories/images/business/accounting.jpg"
        alt="Image 1"
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
          width: "100%",
          height: "auto",
        }}
      />
    </Paper>
   
  </Grid>
</Grid>

<Grid container spacing={2}> 
  
  <Grid item xs={6} style={{  borderTop:'1px solid #dfdfdf' }} >
  {/* <Typography variant="h1" component="span" style={{ fontSize: "3rem", marginRight: "10px" }}>1</Typography> */}
  
  <Grid container alignItems="center">
      <Grid item xs={1}>
      <Typography variant="h1" style={{ fontSize: "3rem", color: "#757575" }}>4.</Typography>

      </Grid>
      <Grid item xs={11}>
        <div className="page-header__text">
          <Typography
            variant="h1"
            className="page-header__text__title"
            style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "20px" }}

          >
            <span className="page-header__text__title__primary">
              Our Best{" "}
            </span>
            <span
              className="page-header__text__title__alt"
              style={{ color: "red", fontSize: "inherit" }}
            >
              Website Builders
            </span>
            <span className="page-header__text__title__primary">
              {" "}
              of 2024
            </span>
            <Typography
              variant="subtitle1"
              className="page-header__text__subtitle"
              style={{
                // fontStyle: "italic",
                // fontFamily: "Arial, sans-serif", // Example font family
                color: "#75575", // Example color
                fontSize: "1.0rem", // Increased font size
              }}
            >
              Get the tools you need to turn your vision into reality
          </Typography>
          </Typography>
   
         
        </div>
      </Grid>
    </Grid>  
  </Grid>
  
  <Grid item xs={6}>
    <Paper
      style={{
        width: "260px",
        height: "auto",
        position: "relative",
        marginBottom: "20px",
        marginRight: "20px",
      }}
    >
      
      <img
        src="https://images.top10.com/f_auto,q_auto/v1/production/categories/images/business/payroll.jpg"
        alt="Image 1"
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
          width: "100%",
          height: "auto",
        }}
      />
    </Paper>
   
  </Grid>
</Grid>

<Grid container spacing={2}> 
  
  <Grid item xs={6} style={{  borderTop:'1px solid #dfdfdf' }} >
  {/* <Typography variant="h1" component="span" style={{ fontSize: "3rem", marginRight: "10px" }}>1</Typography> */}
  
  <Grid container alignItems="center">
      <Grid item xs={1}>
      <Typography variant="h1" style={{ fontSize: "3rem", color: "#757575" }}>5.</Typography>

      </Grid>
      <Grid item xs={11}>
        <div className="page-header__text">
          <Typography
            variant="h1"
            className="page-header__text__title"
            style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "20px" }}

          >
            <span className="page-header__text__title__primary">
              Our Best{" "}
            </span>
            <span
              className="page-header__text__title__alt"
              style={{ color: "red", fontSize: "inherit" }}
            >
              Website Builders
            </span>
            <span className="page-header__text__title__primary">
              {" "}
              of 2024
            </span>
            <Typography
              variant="subtitle1"
              className="page-header__text__subtitle"
              style={{
                // fontStyle: "italic",
                // fontFamily: "Arial, sans-serif", // Example font family
                color: "#75575", // Example color
                fontSize: "1.0rem", // Increased font size
              }}
            >
              Get the tools you need to turn your vision into reality
          </Typography>
          </Typography>
   
         
        </div>
      </Grid>
    </Grid>  
  </Grid>
  
  <Grid item xs={6}>
    <Paper
      style={{
        width: "260px",
        height: "auto",
        position: "relative",
        marginBottom: "10px",
        marginRight: "20px",
      }}
    >
      
      <img
        src="https://images.top10.com/f_auto,q_auto/v1/production/categories/images/business/payroll.jpg"
        alt="Image 1"
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
          width: "100%",
          height: "auto",
        }}
      />
    </Paper>
   
  </Grid>
</Grid>

<Grid container spacing={2}> 
  
  <Grid item xs={6} style={{  borderTop:'1px solid #dfdfdf' }} >
  {/* <Typography variant="h1" component="span" style={{ fontSize: "3rem", marginRight: "10px" }}>1</Typography> */}
  
  <Grid container alignItems="center">
      <Grid item xs={1}>
      <Typography variant="h1" style={{ fontSize: "3rem", color: "#757575" }}>6.</Typography>

      </Grid>
      <Grid item xs={11}>
        <div className="page-header__text">
          <Typography
            variant="h1"
            className="page-header__text__title"
            style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "20px" }}

          >
            <span className="page-header__text__title__primary">
              Our Best{" "}
            </span>
            <span
              className="page-header__text__title__alt"
              style={{ color: "red", fontSize: "inherit" }}
            >
              Website Builders
            </span>
            <span className="page-header__text__title__primary">
              {" "}
              of 2024
            </span>
            <Typography
              variant="subtitle1"
              className="page-header__text__subtitle"
              style={{
                // fontStyle: "italic",
                // fontFamily: "Arial, sans-serif", // Example font family
                color: "#75575", // Example color
                fontSize: "1.0rem", // Increased font size
              }}
            >
              Get the tools you need to turn your vision into reality
          </Typography>
          </Typography>
   
         
        </div>
      </Grid>
    </Grid>  
  </Grid>
  
  <Grid item xs={6}>
    <Paper
      style={{
        width: "260px",
        height: "auto",
        position: "relative",
        marginBottom: "20px",
        marginRight: "20px",
      }}
    >

      <img
        src="https://images.top10.com/f_auto,q_auto/v1/production/categories/images/business/payroll.jpg"
        alt="Image 1"
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
          width: "100%",
          height: "auto",
        }}
      />
    </Paper>
  </Grid>
</Grid>

<Grid container spacing={2}> 
  
  <Grid item xs={6} style={{  borderTop:'1px solid #dfdfdf' }} >
  {/* <Typography variant="h1" component="span" style={{ fontSize: "3rem", marginRight: "10px" }}>1</Typography> */}
  
  <Grid container alignItems="center">
      <Grid item xs={1}>
      <Typography variant="h1" style={{ fontSize: "3rem", color: "#757575" }}>7.</Typography>
      </Grid>
      <Grid item xs={11}>
        <div className="page-header__text">
          <Typography
            variant="h1"
            className="page-header__text__title"
            style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "20px" }}

          >
            <span className="page-header__text__title__primary">
              Our Best{" "}
            </span>
            <span
              className="page-header__text__title__alt"
              style={{ color: "red", fontSize: "inherit" }}
            >
              Website Builders
            </span>
            <span className="page-header__text__title__primary">
              {" "}
              of 2024
            </span>
            <Typography
              variant="subtitle1"
              className="page-header__text__subtitle"
              style={{
                // fontStyle: "italic",
                // fontFamily: "Arial, sans-serif", // Example font family
                color: "#75575", // Example color
                fontSize: "1.0rem", // Increased font size
              }}
            >
              Get the tools you need to turn your vision into reality
          </Typography>
          </Typography>
   
         
        </div>
      </Grid>
    </Grid>  
  </Grid>
  
  <Grid item xs={6}>
    <Paper
      style={{
        width: "260px",
        height: "auto",
        position: "relative",
        marginBottom: "20px",
        marginRight: "20px",
      }}
    >
      
      <img
        src="https://images.top10.com/f_auto,q_auto/v1/production/categories/images/business/payroll.jpg"
        alt="Image 1"
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
          width: "100%",
          height: "auto",
        }}
      />
    </Paper>
   
  </Grid>
</Grid>
<Grid container spacing={2}> 
  
  <Grid item xs={6} style={{  borderTop:'1px solid #dfdfdf' }} >
  {/* <Typography variant="h1" component="span" style={{ fontSize: "3rem", marginRight: "10px" }}>1</Typography> */}
  
  <Grid container alignItems="center">
      <Grid item xs={1}>
      <Typography variant="h1" style={{ fontSize: "3rem", color: "#757575" }}>8.</Typography>

      </Grid>
      <Grid item xs={11}>
        <div className="page-header__text">
          <Typography
            variant="h1"
            className="page-header__text__title"
            style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "20px" }}

          >
            <span className="page-header__text__title__primary">
              Our Best{" "}
            </span>
            <span
              className="page-header__text__title__alt"
              style={{ color: "red", fontSize: "inherit" }}
            >
              Website Builders
            </span>
            <span className="page-header__text__title__primary">
              {" "}
              of 2024
            </span>
            <Typography
              variant="subtitle1"
              className="page-header__text__subtitle"
              style={{
                // fontStyle: "italic",
                // fontFamily: "Arial, sans-serif", // Example font family
                color: "#75575", // Example color
                fontSize: "1.0rem", // Increased font size
              }}
            >
              Get the tools you need to turn your vision into reality
          </Typography>
          </Typography>
   
         
        </div>
      </Grid>
    </Grid>  
  </Grid>
  
  <Grid item xs={6}>
    <Paper
      style={{
        width: "260px",
        height: "auto",
        position: "relative",
        marginBottom: "20px",
        marginRight: "20px",
      }}
    >
      
      <img
        src="https://images.top10.com/f_auto,q_auto/v1/production/categories/images/business/payroll.jpg"
        alt="Image 1"
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
          width: "100%",
          height: "auto",
        }}
      />
    </Paper>
   
  </Grid>
</Grid>

<Grid container spacing={2}> 
  
  <Grid item xs={6} style={{  borderTop:'1px solid #dfdfdf' }} >
  {/* <Typography variant="h1" component="span" style={{ fontSize: "3rem", marginRight: "10px" }}>1</Typography> */}
  
  <Grid container alignItems="center">
      <Grid item xs={1}>
      <Typography variant="h1" style={{ fontSize: "3rem", color: "#757575" }}>10.</Typography>

      </Grid>
      <Grid item xs={11}>
        <div className="page-header__text">
          <Typography
            variant="h1"
            className="page-header__text__title"
            style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "20px" }}

          >
            <span className="page-header__text__title__primary">
              Our Best{" "}
            </span>
            <span
              className="page-header__text__title__alt"
              style={{ color: "red", fontSize: "inherit" }}
            >
              Website Builders
            </span>
            <span className="page-header__text__title__primary">
              {" "}
              of 2024
            </span>
            <Typography
              variant="subtitle1"
              className="page-header__text__subtitle"
              style={{
                // fontStyle: "italic",
                // fontFamily: "Arial, sans-serif", // Example font family
                color: "#75575", // Example color
                fontSize: "1.0rem", // Increased font size
              }}
            >
              Get the tools you need to turn your vision into reality
          </Typography>
          </Typography>
   
         
        </div>
      </Grid>
    </Grid>  
  </Grid>
  
 
</Grid>
<Grid item xs={6}>
    <Paper
      style={{
        width: "260px",
        height: "auto",
        position: "relative",
        marginBottom: "20px",
        marginRight: "20px",
      }}
    >
      
      <img
        src="https://images.top10.com/f_auto,q_auto/v1/production/categories/images/business/payroll.jpg"
        alt="Image 1"
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
          width: "100%",
          height: "auto",
        }}
      />
    </Paper>
   
  </Grid>


</div>

<Header/>
</>
  );
}

export default Buissess;
