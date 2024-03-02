import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { SvgIcon, Typography, ListItem, List, Link, Paper, Grid,} from "@material-ui/core";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: "0 15px",
    marginBottom: theme.spacing(2),
    boxSizing: "border-box",
    margin: 0,
    minWidth: 0,
    padding: 0,
    fontFamily: "hurmegeometricsans_no3_6, Gilroy, Almarai, Arial, sans-serif",
    fontWeight: 400,
    fontSize: 14,
    position: "relative",
    width: "100%",
  },
  ribbon: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(1),
  },
  ribbonIcon: {
    marginRight: theme.spacing(1),
  },
  logo: {
    padding: "48px 0px 28px 0px",
    height: " 50px",
    width: " 130px",
    objectFit: "contain",
  },
  attributes: {
    paddingLeft: theme.spacing(1),
  },
}));

const ProductCard = () => {
  const classes = useStyles();

  return (
    
<Paper className={classes.root} style={{ padding: "15px", width: "60%", marginLeft: "20%", marginRight: "20%" }}>
        <div  className={classes.ribbon}>
        <SvgIcon
              viewBox="0 0 15 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={classes.ribbonIcon}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.25 6.452c-.068 1.896-.795 5.592-2.304 5.991-1.622.43-2.796.47-5.605-.142-.582-.089-1.169-.137-1.758-.143a.196.196 0 01-.191-.197V6a.188.188 0 01.075-.154c.382-.272.611-.985 1.023-1.353.774-.692 1.365-.899 1.884-1.29.892-.674 1.056-1.529 1.339-2.2.232-.55.614-.942 1.186-.687.577.258 1.179 1.306.456 2.796-.21.433-.511.748-.788 1.512-.063.177-.078.458.125.445a20.274 20.274 0 013.401.03 1.313 1.313 0 011.157 1.353zM3.642 12.086V5.585a.392.392 0 00-.393-.392H1.142a.392.392 0 00-.392.392v6.501a.395.395 0 00.392.393H3.25a.395.395 0 00.393-.393z"
                fill="currentColor"
              />
            </SvgIcon>
            <Typography variant="body3" className={classes.ribbonText}>
              Our Most Popular
            </Typography>
        </div>
      <Grid container spacing={6}>
        <Grid item xs={12} lg={4}>

          <img
            src="//umbrella.data.naturalint.com/production/partners/uploads/photo/2023_Logo_CollegeHUNKS.20231108094904.svg"
            alt="College HUNKS Hauling Junk & Moving®"
            className={classes.logo}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Typography
            variant="body1"
            data-testid="bottom-line-product-name"
            style={{ fontWeight: "400", fontSize: "15px" }}
          >
            College HUNKS Hauling Junk &amp; Moving® -{" "}
          </Typography>
          <Typography variant="body2" data-testid="bottom-line-text">
            Moving millions across North America for over 15 years
          </Typography>
          <List data-testid="product-attributes">
            <ListItem data-testid="product-attribute">
              <SvgIcon
                fontSize="small"
                width="1em"
                height="1em"
                viewBox="0 0 16 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 6.002l4.6 4.6a.093.093 0 00.133 0L15 1.335"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </SvgIcon>
              <Typography variant="body2">
                200+ locations across the US
              </Typography>
            </ListItem>
            <ListItem data-testid="product-attribute">
              <SvgIcon
                fontSize="small"
                width="1em"
                height="1em"
                viewBox="0 0 16 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 6.002l4.6 4.6a.093.093 0 00.133 0L15 1.335"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </SvgIcon>
              <Typography variant="body2">
                Professionally trained & insured team
              </Typography>
            </ListItem>
            <ListItem data-testid="product-attribute">
              <SvgIcon
                fontSize="small"
                width="1em"
                height="1em"
                viewBox="0 0 16 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 6.002l4.6 4.6a.093.093 0 00.133 0L15 1.335"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </SvgIcon>
              <Typography variant="body2">
                Local & office solutions, junk pick-up
              </Typography>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} lg={2}>
  <div className="css-j91ud">
    <Grid container alignItems="center" className="css-mln3q">
      <Grid item>
        <Typography variant="body1" className="css-2ggun4">
          Excellent
        </Typography>
      </Grid>
      <Grid item>
        <SvgIcon viewBox="0 0 74.5 12.5" fontSize="inherit" className="product-stars" data-testid="rating-stars">
          {/* Add your SVG paths here */}
        </SvgIcon>
      </Grid>
      <Grid item>
        <Button
          data-testid="popover-trigger"
          data-role="product-cta"
          data-product-id="14193"
          data-product-name="College HUNKS Hauling Junk & Moving®"
          rel="nofollow noreferrer"
          className="nilink css-gquxlj"
          href="/v?product_id=14193&amp;url=https%3A%2F%2Fwww.tkqlhce.com%2Fclick-100111480-15551426%3Fsid%3DDES_%5Btracking-subid%5D&amp;cms_platform=xsite&amp;rank=1&amp;bi=%7B%22blrs%22%3A82369%2C%22utm_source%22%3A%22Other%22%7D&amp;comp_iid=fea8b9f3-60ad-4439-9977-4da192893bcd&amp;uid=836m0Mf3OjDX5X322vz5&amp;riid=z92KxMyzDar1k0724wdr&amp;tkn=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiY21zIiwidmVyc2lvbiI6MSwiaGFzaCI6Imx5Wi9kWTJhZE0zVm5nVC9IbXUxbTBsLzhKTT0iLCJpYXQiOjE3MDkyODg1MjIsImV4cCI6MTcwOTM3NDkyMn0.gA1TMczJpiSoRdmi-VyAAEeNtq7eXU_yI1CuWduBlww&amp;gid=500726099.1707197081"
          target="_blank"
          style={{ backgroundColor: "#FF4A64" }}
        >
          <span>Visit Site</span>
          <div className="endIcon css-k15e0p">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.405 6.613l-4.022 3.89a.718.718 0 000 1.039.779.779 0 001.074 0l5.32-5.144a.718.718 0 000-1.039L6.458.215A.771.771 0 005.92 0a.771.771 0 00-.537.215.718.718 0 000 1.04l4.022 3.889H.76c-.42 0-.76.329-.76.734 0 .406.34.735.76.735h8.645z"
              fill="currentColor"
            ></path>
          </div>
        </Button>
      </Grid>
    </Grid>
  </div>
</Grid>

    

      </Grid>
    </Paper>
  );
};

export default ProductCard;
