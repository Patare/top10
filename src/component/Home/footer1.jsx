import React from 'react'
import { Grid, Paper, Typography,Link } from '@mui/material';
import SvgIcon from '@mui/material/SvgIcon';
const footer1 = () => {
  const footerData=[
    {
      data:"Top10.com is designed to help users make confident decisions online, this website contains information about a wide range of products and services. Certain details, including but not limited to prices and special offers, are provided to us directly from our partners and are dynamic and subject to change at any time without prior notice. Though based on meticulous research, the information we share does not constitute legal or professional advice or forecast, and should not be treated as such."
    }
  ]
  return (
   <React.Fragment>
    <Grid container spacing={2} sx={{position:"relative",top:"100px",background:"#154360"}}>
      <Grid item xs={4}>
      <SvgIcon  viewBox="0 0 133 35" sx={{width:"100%",height:"18%", color:"white",position:"relative",right:"100px"}}>
      <g fill="inherit" fillRule="inherit">
        <g transform="translate(2.202 .162)">
          <mask id="b" fill="inherit">
            <use xlinkHref="#a"></use>
          </mask>
          <path d="M10.313 2.665c3.649 0 6.12.606 7.132 1.087-1.013.48-3.483 1.087-7.132 1.087-3.648 0-6.119-.607-7.131-1.087 1.012-.48 3.483-1.087 7.131-1.087m0 4.78c2.464 0 4.796-.265 6.566-.746 2.348-.636 3.538-1.628 3.538-2.947C20.417.238 12 .06 10.313.06 7.85.06 5.518.324 3.747.804 1.4 1.441.21 2.434.21 3.752c0 3.514 8.417 3.692 10.104 3.692" fill="inherit"></path>
        </g>
        <g transform="translate(0 9.022)">
          <mask id="d" fill="inherit">
            <use xlinkHref="#c"></use>
          </mask>
          <path d="M16.31 20.242H9.327c-3.916 0-7.101-3.205-7.101-7.144s3.185-7.144 7.1-7.144h6.984c3.916 0 7.101 3.205 7.101 7.144 0 3.94-3.185 7.144-7.1 7.144M12.818.127C5.739.127-.001 5.9-.001 13.022s5.74 12.896 12.82 12.896 12.818-5.774 12.818-12.896C25.637 5.9 19.898.127 12.82.127" fill="inherit"></path>
        </g>
        <path d="M17.03 22.33a1.296 1.296 0 0 1-1.293-1.3c0-.718.578-1.3 1.292-1.3.714 0 1.293.582 1.293 1.3 0 .719-.579 1.3-1.293 1.3m-8.421 0a1.296 1.296 0 0 1-1.293-1.3c0-.718.579-1.3 1.293-1.3s1.293.582 1.293 1.3c0 .719-.579 1.3-1.293 1.3m7.702-4.748H9.327c-2.488 0-4.511 2.036-4.511 4.539 0 2.502 2.023 4.538 4.51 4.538h6.984c2.488 0 4.512-2.036 4.512-4.538 0-2.503-2.024-4.539-4.512-4.539M43.626 14.97h-10.76v2.866h3.844v11.399h3.133V17.836h3.783zM48.589 26.779c-1.505 0-2.665-1.187-2.665-2.702 0-1.493 1.16-2.7 2.665-2.7 1.485 0 2.664 1.207 2.664 2.7 0 1.515-1.18 2.702-2.664 2.702m0-8.166c-3.174 0-5.696 2.415-5.696 5.464 0 3.05 2.522 5.464 5.696 5.464 3.153 0 5.696-2.415 5.696-5.464 0-3.049-2.543-5.464-5.696-5.464M61.403 26.656c-1.485 0-2.685-1.126-2.685-2.579 0-1.452 1.2-2.578 2.685-2.578 1.464 0 2.604 1.126 2.604 2.578 0 1.453-1.14 2.579-2.604 2.579m.55-7.92c-1.567 0-2.767.655-3.052 1.535v-1.35H55.87v14.263H58.9v-5.3c.285.9 1.485 1.535 3.051 1.535 2.91 0 5.086-2.374 5.086-5.342 0-2.987-2.177-5.34-5.086-5.34M67.646 17.836h2.075v11.398h3.133V14.971h-5.208zM82.557 26.656c-2.503 0-4.435-1.965-4.435-4.523 0-2.496 1.932-4.522 4.435-4.522 2.501 0 4.434 2.046 4.434 4.522 0 2.517-1.953 4.523-4.434 4.523m0-11.91c-4.191 0-7.568 3.254-7.568 7.387 0 4.155 3.377 7.388 7.568 7.388 4.21 0 7.567-3.233 7.567-7.388 0-4.133-3.357-7.387-7.567-7.387M91.79 26.104c-.895 0-1.668.736-1.668 1.657 0 .92.773 1.658 1.668 1.658.895 0 1.668-.737 1.668-1.658 0-.92-.773-1.657-1.668-1.657M99.58 21.356c1.058 0 1.73.389 2.36 1.064l1.912-1.903c-1.302-1.433-2.746-1.924-4.272-1.924-3.132 0-5.655 2.313-5.655 5.464 0 3.152 2.523 5.443 5.655 5.443 1.526 0 2.97-.49 4.272-1.923l-1.912-1.903c-.63.675-1.302 1.064-2.36 1.064-1.464 0-2.624-1.126-2.624-2.681 0-1.576 1.16-2.701 2.624-2.701M110.177 26.779c-1.505 0-2.664-1.187-2.664-2.702 0-1.493 1.16-2.7 2.664-2.7 1.485 0 2.665 1.207 2.665 2.7 0 1.515-1.18 2.702-2.665 2.702m0-8.166c-3.173 0-5.695 2.415-5.695 5.464 0 3.05 2.522 5.464 5.695 5.464 3.153 0 5.696-2.415 5.696-5.464M129.359 18.695c-1.445 0-2.747.348-3.418 1.638-.467-1.065-1.383-1.638-2.787-1.638-1.26 0-2.278.614-2.664 1.515v-1.29h-3.031v10.314h3.03v-5.791c0-1.208.713-2.046 1.689-2.046.997 0 1.526.757 1.526 1.944v5.893h3.03v-5.791c0-1.208.713-2.046 1.71-2.046.996 0 1.525.757 1.525 1.944v5.893H133v-6.262c0-2.66-1.3-4.277-3.64-4.277" fill="inherit"></path>
      </g>
    </SvgIcon>
    <Typography textAlign="left" sx={{position:"relative",left:"40px",top:"10px",color:"white",fontSize:"12px"}}>Copyright © 2009 - 2024 Natural Intelligence Ltd.<br/> All Rights Reserved.</Typography>
    <Typography textAlign="left" sx={{position:"relative",left:"40px",top:"10px",color:"white",fontSize:"12px"}}>
    Mailing address: <br/><span>4023 Kennett Pike #50055 <br/> Wilmington, DE 19807</span>
    </Typography>
      </Grid>
      <Grid item xs={8}>
        {/* <Paper>Content for second half</Paper> */}
        <nav data-testid="navigation-menu" style={{marginTop:"20px",textAlign:"left"}}>
      <Link href="/about-us" className="ni-art7qp" underline="none" variant="body2" sx={{fontWeight:"bold",color:"white",padding:"5px"}}>About Us</Link>
      <Link href="/cookie" className="ni-art7qp" underline="none" variant="body2" sx={{fontWeight:"bold",color:"white",padding:"5px"}}>Cookie Policy</Link>
      <Link href="/terms-of-use" className="ni-art7qp" underline="none" variant="body2" sx={{fontWeight:"bold",color:"white",padding:"5px"}}>Terms of Use</Link>
      <Link href="/privacy-policy" className="ni-art7qp" underline="none" variant="body2" sx={{fontWeight:"bold",color:"white",padding:"5px"}}>Privacy Policy</Link>
      <Link href="/sitemap" className="ni-art7qp" underline="none" variant="body2" sx={{fontWeight:"bold",color:"white",padding:"5px"}}>Sitemap</Link>
      <Link href="/partner-with-us" className="ni-art7qp" underline="none" variant="body2" sx={{fontWeight:"bold",color:"white",padding:"5px"}}>Partner With Us</Link>
    </nav>
    <Typography textAlign="left" sx={{marginRight:"100px", marginTop:"30px",color:"white",fontSize:"12px"}}>
      {footerData[0].data} </Typography>
      <Typography textAlign="left" sx={{mt:2,color:"white",fontSize:"12px"}}>Reproduction in whole or in part is strictly prohibited <br/> <br/> As an Amazon Associate we earn from qualifying purchases.</Typography>
      </Grid>
    </Grid>
   </React.Fragment>
  )
}

export default footer1;
