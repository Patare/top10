import { Typography, Button } from '@material-ui/core'
import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText, Paper, ListItemIcon, Grid } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift, faMapMarker, faSitemap, faShield } from '@fortawesome/free-solid-svg-icons';
const useStyles = makeStyles((theme) => ({
    
    sub: {
        textTransform: "uppercase",
        fontSize: "1.4rem",
        fontWeight: 600,
        marginBottom: "10px",
        padding: "30px",
        color: "#5537ed",
        [theme.breakpoints.down("xs")]: {
            fontSize: "1.2rem", // Adjust font size for extra small screens
        },
    },
    title: {
        textAlign: "center",
        padding: "30px",
    },
    subtitle: {
        fontSize: "2.7rem",
        fontWeight: 600,
        marginBottom: "20px",
    },
    body1: {
        fontSize: "1rem",
        fontWeight: 300,
        fontFamily: "Montserrat",
        lineHeight: 2.3,
        color: "#6a6a6a",
        [theme.breakpoints.up("md")]: {
            fontSize: "1.3rem", // Increase font size for medium screens and above
        },
    },
    root: {
        flexGrow: 1,
        padding: theme.spacing(4),
        background: "#f8f9fa",
        padding: '50px 30px'
    },
    card: {
        marginBottom: theme.spacing(2),
    },
    codeSample: {
        marginTop: "10px",
        backgroundColor: 'white',
        padding: theme.spacing(2),
        borderRadius: theme.shape.borderRadius,
    },

    body: {
        fontSize: "1rem",
        fontWeight: 300,
        fontFamily: "Montserrat",
        lineHeight: 2.3,
        color: "#6a6a6a",
        [theme.breakpoints.up("md")]: {
            fontSize: "1.3rem", // Increase font size for medium screens and above
        },
    },
    body1: {
        fontSize: "1rem",
        fontWeight: 300,
        fontFamily: "Montserrat",
        lineHeight: 1.8,
        color: "#6a6a6a",
        [theme.breakpoints.up("md")]: {
            fontSize: "1.3rem", // Increase font size for medium screens and above
        },
    },
    h3: {
        marginBottom: '0.5rem',
        fontWeight: 500,
        paddingTop: '25px',
        fontSize: '23px',
        fontWeight: "bold",
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.4rem',
        },
    },

    h4: {
        marginBottom: '0.5rem',
        fontWeight: 500,
        paddingTop: '25px',
        fontSize: '21px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.4rem',
        },
    },

    pinkButton: {
        backgroundColor: '#FFFFFE',
        color: 'blue',
        cursor: 'pointer',
        display: 'inline-block',
        textTransform: 'uppercase',
        fontWeight: 600,
        fontSize: '.9rem',
        padding: '15px 30px',
        marginTop: 'auto',
    },
    greyBgLink: {
        color: 'blue',
    },
    data: {
        textAlign: 'left',
        whiteSpace: 'pre',
        wordSpacing: 'normal',
        wordBreak: 'normal',
        wordWrap: 'normal',
        color: '#90a4ae',
        background: '#fff',
        fontSize: '.95em',
        lineHeight: '1.5em',
        padding: '30px'
    },
    navTabs: {
        backgroundColor: theme.palette.background.paper,
      },
}));

const ClientJavascript = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState('free');
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <>
            <Typography variant="h6" className={classes.h3} >Using Javascript in the browsers</Typography>
            <Typography variant="body1" className={classes.body}>
                In order to use the API in a web browser you have to use your public key. Paid API service users have the option to <Link>enable their public key</Link>  in the API dashboard.
            </Typography>
            <Typography variant="h6" className={classes.h3}>dbip.js</Typography>
            <Typography variant="body1" className={classes.body}>
                dbip.js is the easiest way to write location-aware client side applications, it provides easy access to the following features :
            </Typography>


            <List>
                <ListItem>
                    <Link>Visitor IP address lookup</Link>
                </ListItem>
                <ListItem>
                    <Link>Form elements autofill</Link>
                </ListItem>
                <ListItem>
                    <Link>Live conversions into visitor currency</Link>
                </ListItem>
                <ListItem>
                    <Link>Augmented browser geolocation</Link>
                </ListItem>
            </List>

            <Button className={`${classes.pinkButton} ${classes.greyBgLink}`}
                variant="contained"

                onClick={() => {

                }}
            >
                <i className="fa fa-bookmark" aria-hidden="true"></i>`{'</>'}`Javascript API Documentation
            </Button>
            <Typography variant="h3" className={classes.h3} style={{ paddingTop: '100px' }}>Direct calls with jQuery</Typography>
            <Typography variant="body1" className={classes.body}>
                You may also call the API directly using the standard Javascript XMLHttpRequest or its jQuery helper :

            </Typography>
            <Typography variant="body1" className={classes.body}>
                Sample jQuery code
            </Typography>

            <Paper variant="outlined" className={classes.codeSample}>
                Hello
            </Paper>
            <Typography variant="h3" className={classes.h3} style={{ paddingTop: '100px' }}>Localization</Typography>
            <Typography variant="body1" className={classes.body}>
                The place names are localized using the language information present in the standard Accept-Language HTTP request header. This header is automatically passed from the client browser to the API if you are using the official PHP client or making calls directly from Javascript in the browser
            </Typography>
            <Typography variant="body1" className={classes.body} style={{ paddingTop: '10px' }}>
                Localized names are available with paid API keys only, and are provided for most medium and big cities in the world, and several small ones.
            </Typography>
            <Typography variant="body1" className={classes.body} style={{ paddingTop: '10px' }}>
                We have plans to add more localization options in the future, at the moment this is available for the following data fields :
            </Typography>

            <List className="feat-list">
                <ListItem>
                    <ListItemIcon style={{ color: ' #28a745' }}>
                        <CheckIcon className="text-success" />
                    </ListItemIcon>
                    <ListItemText className={classes.body} primary="countryName" />
                </ListItem>
                <ListItem>
                    <ListItemIcon style={{ color: ' #28a745' }}>
                        <CheckIcon className="text-success" />
                    </ListItemIcon>
                    <ListItemText className={classes.body} primary="stateProv" />
                </ListItem>
                <ListItem>
                    <ListItemIcon style={{ color: ' #28a745' }}>
                        <CheckIcon className="text-success" />
                    </ListItemIcon>
                    <ListItemText className={classes.body} primary="district" />
                </ListItem>
                <ListItem>
                    <ListItemIcon style={{ color: ' #28a745' }}>
                        <CheckIcon className="text-success" />
                    </ListItemIcon>
                    <ListItemText className={classes.body} primary="city" />
                </ListItem>
            </List>
            <Typography variant="body1" className={classes.body}>
                You will find below a few samples of localized responses for the above example query, along with their respective Accept-Language request header :
            </Typography>
            <Grid container spacing={4} style={{ paddingTop: '20px' }} >
                <Grid item xs={12} lg={6}>
                    <Paper variant="outlined" className="code-sample language-json">
                        <Typography variant="body1" className={classes.data}>
                            <b >Accept-Language</b>: en-US
                            <br /><br />
                            <span className="token property">"countryName"</span>: <span className="token string">"United States"</span>,
                            <br />
                            <span className="token property">"stateProv"</span>: <span className="token string">"California"</span>,
                            <br />
                            <span className="token property">"district"</span>: <span className="token string">"Santa Clara County"</span>,
                            <br />
                            <span className="token property">"city"</span>: <span className="token string">"Mountain View"</span>,
                            <br />
                        </Typography>
                    </Paper>

                </Grid>
                <Grid item xs={12} lg={6}>
                    <Paper variant="outlined" className="code-sample language-json">
                        <Typography variant="body1" className={classes.data}>
                            <b >Accept-Language</b>: fr-FR
                            <br /><br />
                            <span className="token property">"countryName"</span>: <span className="token string">"États-Unis"</span>,
                            <br />
                            <span className="token property">"stateProv"</span>: <span className="token string">"Californie"</span>,
                            <br />
                            <span className="token property">"district"</span>: <span className="token string">"Comté de Santa Clara"</span>,
                            <br />
                            <span className="token property">"city"</span>: <span className="token string">"Mountain View"</span>,
                            <br />
                        </Typography>
                    </Paper>

                </Grid>
            </Grid>
            <Grid container spacing={4} style={{ paddingTop: '20px' }} >
                <Grid item xs={12} lg={6}>
                    <Paper variant="outlined" className="code-sample language-json">
                        <Typography variant="body1" className={classes.data}>
                            <b >Accept-Language</b>: en-US
                            <br /><br />
                            <span className="token property">"countryName"</span>: <span className="token string">"United States"</span>,
                            <br />
                            <span className="token property">"stateProv"</span>: <span className="token string">"California"</span>,
                            <br />
                            <span className="token property">"district"</span>: <span className="token string">"Santa Clara County"</span>,
                            <br />
                            <span className="token property">"city"</span>: <span className="token string">"Mountain View"</span>,
                            <br />
                        </Typography>
                    </Paper>

                </Grid>
                <Grid item xs={12} lg={6}>
                    <Paper variant="outlined" className="code-sample language-json">
                        <Typography variant="body1" className={classes.data}>
                            <b >Accept-Language</b>: fr-FR
                            <br /><br />
                            <span className="token property">"countryName"</span>: <span className="token string">"États-Unis"</span>,
                            <br />
                            <span className="token property">"stateProv"</span>: <span className="token string">"Californie"</span>,
                            <br />
                            <span className="token property">"district"</span>: <span className="token string">"Comté de Santa Clara"</span>,
                            <br />
                            <span className="token property">"city"</span>: <span className="token string">"Mountain View"</span>,
                            <br />
                        </Typography>
                    </Paper>

                </Grid>
            </Grid>

            <Typography variant="h3" className={classes.h3} style={{ paddingTop: '100px' }}>Batch queries
            </Typography>
            <Typography variant="body1" className={classes.body}>
                If this is compatible with your usage pattern, you may significantly improve query performance by making multiple IP address lookups in a single API query.
            </Typography>
            <Typography variant="body1" className={classes.body}>
                Furthermore, batch queries are given a 10% bonus regarding daily quotas, it means that your quota will only be decremented by 9 for a batch query of 10 addresses, by 45 for 50 addresses, etc ...            </Typography>
            <Typography variant="body1" className={classes.body}>
                In order to fetch information about multiple IP addresses at once, you need to build a request URL of the following form :            </Typography>
            <Paper variant="outlined" className={classes.codeSample}>
                heloo
            </Paper>
            <Typography variant="body1" className={classes.body}>
                The two parameters are defined as follows :
            </Typography>
            <Typography variant="h3" className={classes.h3} style={{ paddingTop: '15px' }}>
                apiKey
            </Typography>
            <Typography variant="body1" className={classes.body}>
                Your API key
            </Typography>
            <Typography variant="h3" className={classes.h3} style={{ paddingTop: '15px' }}>
                ipAddressList
            </Typography>
            <Typography variant="body1" className={classes.body}>
                A comma separated list of IPv4 and/or IPv6 address
            </Typography>

            <Typography variant="h3" className={classes.h3} style={{ paddingTop: '100px' }}>Example
            </Typography>
            <Typography variant="body1" className={classes.body}>
                Sample command line for fetching information about multiple IP address in a single API call with the resulting JSON response :            </Typography>


            <Paper variant="outlined" className={classes.codeSample}>
                heloo
            </Paper>
            <Typography variant="body1" className={classes.body}>
                The server responds with JSON encoded set of key-value pairs where the key is an IP address and the value either an object of the format described above for single address queries or an error object.
            </Typography>

            <Typography variant="h3" className={classes.h3} style={{ paddingTop: '100px' }}>Get IP address details
            </Typography>
            <Typography variant="body1" className={classes.body}>
                In order to fetch information about an IP address, you need to build a request URL of the following form :
            </Typography>
            <Paper variant="outlined" className={classes.codeSample}>
                heloo
            </Paper>
            <Typography variant="body1" className={classes.body}>
                The three parameters are defined as follows :
            </Typography>

            <Typography variant="h3" className={classes.h3} style={{ paddingTop: '15px' }}>apiKey
            </Typography>

            <Typography variant="body1" className={classes.body}>
                Your API key or the string "free" for the free AP
                I</Typography>
            <Typography variant="h3" className={classes.h3} style={{ paddingTop: '15px' }}>apiKey
            </Typography>

            <Typography variant="body1" className={classes.body}>
                Your API key or the string "free" for the free AP
                I</Typography>
            <Typography variant="h3" className={classes.h3} style={{ paddingTop: '15px' }}>ipAddress
            </Typography>

            <Typography variant="body1" className={classes.body}>
                IPv4 / IPv6 address or the string "self" to lookup the calling address
                I</Typography>
            <Typography variant="h3" className={classes.h3} style={{ paddingTop: '15px' }}>propertyName
            </Typography>

            <Typography variant="body1" className={classes.body}>
                [optional] specify a single field name to request instead of the whole address details
                I</Typography>


            <Typography variant="h3" className={classes.h3} style={{ paddingTop: '100px' }}>Example
            </Typography>
            <Typography variant="body1" className={classes.body}>
                Here are a few examples for fetching IP address information from the command line :
            </Typography>
            <Typography variant="body1" className={classes.body} style={{ paddingTop: '10px' }}>
                Fetch address details from free API
            </Typography>
            <Paper variant="outlined" className={classes.codeSample}>
                heloo
            </Paper>
            <Typography variant="body1" className={classes.body} style={{ paddingTop: '30px' }}>
                Determine whether to apply EU regulations
            </Typography>
            <Paper variant="outlined" className={classes.codeSample}>
                heloo
            </Paper>
            <Typography variant="body1" className={classes.body} style={{ paddingTop: '30px' }}>

                Find my own IP address using the free API
            </Typography>
            <Paper variant="outlined" className={classes.codeSample}>
                heloo
            </Paper>

            <Typography variant="h3" className={classes.h3} style={{ paddingTop: '100px' }}>Response details
            </Typography>
            <Typography variant="body1" className={classes.body}>
                The server responds with a JSON encoded object with some or all of the following properties :
            </Typography>

            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                className={classes.navTabs}
                aria-label="response tabs"
                id="resp_details_tabs"
            >
                <Tab
                    label={
                        <div>
                            <FontAwesomeIcon icon={faGift} />&nbsp;&nbsp;Free API
                        </div>
                    }
                    value="free"
                    aria-controls="response-free"
                />
                <Tab
                    label={
                        <div>
                            <FontAwesomeIcon icon={faMapMarker} />&nbsp;&nbsp;Basic API
                        </div>
                    }
                    value="basic"
                    aria-controls="response-basic"
                />
                <Tab
                    label={
                        <div>
                            <FontAwesomeIcon icon={faSitemap} />&nbsp;&nbsp;Core API
                        </div>
                    }
                    value="core"
                    aria-controls="response-core"
                />
                <Tab
                    label={
                        <div>
                            <FontAwesomeIcon icon={faShield} />&nbsp;&nbsp;Extended API
                        </div>
                    }
                    value="extended"
                    aria-controls="response-extended"
                />
            </Tabs>
            {/* <Typography variant="h3" className={classes.h3} style={{ paddingTop: '15px' }}>
                API key
            </Typography>
            <Paper variant="outlined" className={classes.codeSample}>
                heloo
            </Paper>
            <Typography variant="h3" className={classes.h3} style={{ paddingTop: '100px' }}>Get IP address details
            </Typography>
            <Typography variant="body1" className={classes.body}>
                The server responds with a JSON encoded object with some or all of the following properties :
            </Typography>
            <Typography variant="h3" className={classes.h3} style={{ paddingTop: '15px' }}>
                Free API
            </Typography> */}

        </>
    )
}

export default ClientJavascript
