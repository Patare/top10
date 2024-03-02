import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Menu, MenuItem, Grid } from '@mui/material';

const Navbar = () => {
    // State for menu anchor element
    const [anchorEl, setAnchorEl] = React.useState(null);

    // Function to handle menu open
    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    // Function to handle menu close
    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Grid container alignItems="center">
                    <Grid item xs={6} md={3}>
                        <Typography variant="h6">
                            Ninja Top 10
                        </Typography>
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <Grid container justifyContent="center" spacing={2}>
                            <Grid item>
                                <Button color="inherit">Top 10</Button>
                            </Grid>
                            <Grid item>
                                <Button color="inherit">Free Apps</Button>
                            </Grid>
                            <Grid item>
                                <Button color="inherit">Over 50</Button>
                            </Grid>
                            <Grid item>
                                <Button color="inherit">Gay</Button>
                            </Grid>
                            <Grid item>
                                <Button color="inherit">Lesbian</Button>
                            </Grid>
                            <Grid item>
                                <Button color="inherit">Christian</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Grid container justifyContent="flex-end">
                            <Button color="inherit" onClick={handleMenuOpen}>
                                Reviews
                            </Button>
                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleMenuClose}
                            >
                                <MenuItem onClick={handleMenuClose}>Item 1</MenuItem>
                                <MenuItem onClick={handleMenuClose}>Item 2</MenuItem>
                                <MenuItem onClick={handleMenuClose}>Item 3</MenuItem>
                            </Menu>
                            <Button color="inherit">Learn</Button>
                            <Button color="inherit">Compare</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
