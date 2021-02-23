import logo from './logo.svg';
import './App.css';
import { useState , useEffect} from 'react';
import { csv, map } from 'd3'
import myfile from './classes.csv'
import {createFilter} from 'react-select';

import makeAnimated from 'react-select/animated';
import AsyncCreatable from 'react-select/async-creatable'
import { Button } from '@material-ui/core';

import PostList from './components/PostList'
import axios from 'axios'

import { Grid , Box, CssBaseline, Container} from '@material-ui/core'
import Header from './components/Header';
import CustomCard from './components/CustomCard';
import {makeStyles} from '@material-ui/styles';


import Content from './components/Content'
import ButtonContext from './Context/ButtonContext';
const animatedComponents = makeAnimated();


const useStyles = makeStyles({
  color: {
    background: 'rgb(153,0,17)'
    }
});

function App() {
  const [schedules, setSchedules] = useState([]);
  const classes = useStyles();
  return (
    <Box> <CssBaseline/>
      <Grid container direction="column" justify="center" spacing={2}>
        <Grid item>
        <Header/>
        </Grid>
        <Grid item container className={classes.color} >
            <Grid item xs={"auto"} sm={2} ></Grid>
            <Grid item xs={12} sm={8} align="center">
                <Content data={setSchedules} currentSchedules={schedules}>
                </Content>
            </Grid>
            <Grid item xs={"auto"} sm={2} >  </Grid>
        </Grid>
        <Grid item container>
          <Grid item xs={"auto"} sm={2} ></Grid>
          <Grid item xs={"12"} sm={8} >
            <CustomCard schedules={schedules}></CustomCard>
          </Grid>
          <Grid item xs={"auto"} sm={2} ></Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
