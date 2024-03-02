import React from 'react'
import { List, ListItem, Link,Grid, Paper } from '@mui/material';
const Allcategories = () => {
    const linksData = [
    [
        { url: '/accounting-software', text: 'Accounting Software' },
        { url: '/ad-blockers', text: 'Ad Blockers' },
        { url: '/adventure-travel-companies', text: 'Adventure Travel Companies' },
        { url: '/affordable-art-sites', text: 'Affordable Art Sites' },
        { url: '/air-purifiers', text: 'Air Purifiers' },
        { url: '/allergy-apps', text: 'Allergy Apps' },   
      ],
   [
        {url: '/android Games', text:'android Games'},
        {url:'/android-navigation-apps', text:"Android Navigation Apps"},
        {url:'/anti-procrastination-apps' ,text:'Anti-Procrastination Apps'},
        {url:'/antivirus' , text:'Antivirus'},
        {url:'/applet-tv-apps' ,text:'Apple TV Apps'},
        {url:'/apps-for-Night', text:"Apps for a Night Out"}
      ],
     [
        {url: '/android Games', text:'  Apps for Anxiety'},
        {url:'/android-navigation-apps', text:"Apps For Beer Lovers"},
        {url:'/anti-procrastination-apps' ,text:'Apps for Better Sleep'},
        {url:'/antivirus' , text:'Apps for Charitable Giving'},
        {url:'/applet-tv-apps' ,text:'Apps for College Studentss'},
        {url:'/apps-for-Night', text:"Apps for Dog Owners"}
      ],
    [
        {url: '/android Games', text:'Apps For Gluten Free Living'},
        {url:'/android-navigation-apps', text:"Apps for Hikers"},
        {url:'/anti-procrastination-apps' ,text:'Apps For Surviving Flu Season'},
        {url:'/antivirus' , text:'Apps for the Podcast Addict'},
        {url:'/applet-tv-apps' ,text:'Apps for the Smart Traveler'},
        {url:'/apps-for-Night', text:"Apps for Wine-Lovers"}
      ],
     [
        {url: '/android Games', text:' Apps to Curb Smartphone Addiction'},
        {url:'/android-navigation-apps', text:"Apps to Make You Smarter"},
        {url:'/anti-procrastination-apps' ,text:'AR games'},
        {url:'/antivirus' , text:'Automated Investment Services'},
        {url:'/applet-tv-apps' ,text:'Baby Clothing Websites'},
        {url:'/apps-for-Night', text:"Baby Shower Registries"}
      ]
    ]
  return (
    <Paper sx={{marginTop:"350px",background:"#F0F3F4"}}>
    <Grid container spacing={2}>
    <Grid item xs={1}></Grid>
      <Grid item xs={2}>
        <List>
          {linksData[0].map((link, index) => (
            <ListItem key={index}>
              <Link href={link.url} color="primary" sx={{textDecoration: 'none',fontWeight:"bold"}}>
                {link.text}
              </Link>
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid item xs={2}>
        <List>
          {linksData[1].map((link, index) => (
            <ListItem key={index}>
              <Link href={link.url} color="primary" sx={{textDecoration: 'none',fontWeight:"bold"}}>
                {link.text}
              </Link>
            </ListItem>
          ))}
        </List>
      </Grid>

      <Grid item xs={2}>
        <List>
          {linksData[2].map((link, index) => (
            <ListItem key={index}>
              <Link href={link.url} color="primary" sx={{textDecoration: 'none',fontWeight:"bold"}}>
                {link.text}
              </Link>
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid item xs={2}>
        <List>
          {linksData[3].map((link, index) => (
            <ListItem key={index}>
              <Link href={link.url} color="primary" sx={{textDecoration: 'none',fontWeight:"bold"}}>
                {link.text}
              </Link>
            </ListItem>
          ))}
        </List>
      </Grid>
      
      <Grid item xs={2}>
        <List>
          {linksData[4].map((link, index) => (
            <ListItem key={index}>
              <Link href={link.url} color="primary" sx={{textDecoration: 'none',fontWeight:"bold"}}>
                {link.text}
              </Link>
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
    </Paper>
  )
}

export default Allcategories
