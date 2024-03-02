import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const OfferCard = () => {
  return (
    <>
    <Card variant="outlined" sx={{ maxWidth:{ xs: 400, md: 1000 }, margin: 'auto', mb: 4,mt:2,border:"5px solid #1F618D" }}>
      <CardContent>
        <Typography variant="overline"  sx={{position:"relative",top:"-16px",right:"20px", bgcolor: '#1F618D', color: 'primary.contrastText', borderRadius: '0 0px 0 0', px: 1, py: 1, mb: 1 }}>
          Editor's Choice
        </Typography>
     
        <Typography variant="caption" color="text.secondary" sx={{ marginLeft: { xs: 0, md: 90 }}} gutterBottom>
          Mar 02, 2024
        </Typography>
        <div>
          <div style={{ display: 'flex' }}>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1, textAlign: 'left', color: 'teal',mt:3,fontWeight:"bold" }}>
              SALE
            </Typography>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }}>
            <Typography variant="h6" sx={{ marginTop: { xs: -5, md: -8 }, marginLeft:{xs:"80px",md:"0"}, flexGrow: 1 ,fontSize:{xs:"15px",md:"20px"},textAlign: 'center',fontWeight:"bold"}}>
              Crocs Clearance Styles as Low as $9 + Free Prime Shipping
            </Typography>
            <Button variant="contained" sx={{ display:{xs:"none",md:"flex"}, marginTop: { xs: 0, md: -8 },bgcolor: 'teal', color: 'white', '&:hover': { bgcolor: 'teal.dark' } }}>
              Get Offer
            </Button>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', mt: 1 }}>
            <Typography variant="caption" sx={{ ml: 2,flexGrow: 1,textAlign: 'center' , marginTop: { xs: 0, md: 0 }}}>
              1.9k Uses
            </Typography>
            <Typography variant="caption" sx={{ color: 'success.main',flexGrow: 1,textAlign: 'left',position:"relative",right:"20px"  }}>
              ✓ Verified 2 days ago
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>



<Card variant="outlined" sx={{ maxWidth:{ xs: 400, md: 1000 }, margin: 'auto', mb: 4,mt:2 }}>
<CardContent>
  <div>
    <div style={{ display: 'flex' }}>
      <Typography variant="h5" component="div" sx={{ flexGrow: 1, textAlign: 'left', color: 'teal',mt:3,fontWeight:"bold" }}>
        SALE
      </Typography>
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }}>
      <Typography variant="h6" sx={{ marginTop: { xs: -5, md: -8 }, marginLeft:{xs:"80px",md:"0"},fontSize:{xs:"15px",md:"20px"}, flexGrow: 1 ,textAlign: 'center',fontWeight:"bold"}}>
        Crocs Clearance Styles as Low as $9 + Free Prime Shipping
      </Typography>
      <Button variant="contained" sx={{ display:{xs:"none",md:"flex"}, marginTop: { xs: 0, md: -8 },bgcolor: 'teal', color: 'white', '&:hover': { bgcolor: 'teal.dark' } }}>
        Get Offer
      </Button>    
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', mt: 1 }}>
      <Typography variant="caption" sx={{ ml: 2,flexGrow: 1,textAlign: 'center' , marginTop: { xs: 0, md: 0 }}}>
        1.9k Uses
      </Typography>
      <Typography variant="caption" sx={{ color: 'success.main',flexGrow: 1,textAlign: 'left',position:"relative",right:"10px"  }}>
        ✓ Verified 2 days ago
      </Typography>
      <Typography variant="caption" color="text.secondary" sx={{mr:1}} gutterBottom>
    2 DAYS LEFT
  </Typography>
    </div>
  </div>
</CardContent>
</Card>
</>
  );
}

export default OfferCard;
