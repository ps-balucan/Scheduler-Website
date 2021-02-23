import { AppBar, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import {makeStyles} from '@material-ui/styles';
import { Grid } from '@material-ui/core'


const useStyles = makeStyles({
    typographyStyles: {
        flex: 1
    },
    color:{
        backgroundColor: "white",
        color: "black",
        boxShadow: "none"
        
    }
});

const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position="static" className={classes.color}>
            <Toolbar>
                <Grid item xs={0} sm={1}> </Grid>
                <Grid item xs={12} sm={6}> 
                    <Typography className={classes.typographyStyles}> CRS Scheduler </Typography>
                </Grid>
                <Grid item xs={0} sm={5}> </Grid>
            </Toolbar>
        </AppBar>
    );
    
};


export default Header;