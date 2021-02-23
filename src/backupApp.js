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

import { Grid } from '@material-ui/core'
import Header from './components/Header';
import CustomCard from './components/CustomCard';
import {makeStyles} from '@material-ui/styles';

import Content from './components/Content'
const animatedComponents = makeAnimated();


const useStyles = makeStyles({
  color: {
    backgroundColor: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    background: 'rgb(153,0,17)'
    }
});

function App() {
  const [data, setData] = useState([]);
  const [selectedOption, setSelectedOption] = useState([]);
  const [myInputValue, setMyInputValue] = useState( "" );
  const [outputSchedule, setOutputSchedule] = useState( [] );

  useEffect(() => {
    csv(myfile).then(setData);
    console.log("Loaded data");
  }, []);

  var col2 = map(data, function(d){
    return d.name
  })
  console.log("Going here.");
  console.log(data)

  const filterOptions = (inputValue: string) => {
    return data.filter( i => 
      i.label.toLowerCase().includes(inputValue.toLowerCase())
      );
  };
  
  const promiseOptions = inputValue =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(filterOptions(inputValue));
      }, 1000);
    });
  
  function customTheme(theme){
    return{
      ... theme,
      colors:{
        ...theme.colors
      }
    }
  }

  function generateSchedule()
  {

    let mything = ["Math 10 " , "Span 10"]
    axios.get("https://6wyc8n688h.execute-api.ap-southeast-1.amazonaws.com/dev/echo/main", { params: { message: mything } })
            .then(response =>{
                console.log(response)
                setOutputSchedule(response.data)
            })
            .catch(error => {
                console.log(error)
            })  
  }

  const classes = useStyles();
  return (
    
    <Grid container direction="column" spacing={2}>
      <Grid item>
      <Header/>
      </Grid>
      <Grid item container className={classes.color} >
          <Grid item xs={0} sm={2} ></Grid>
          <Grid item xs={12} sm={8}>
          This is where the content will be This is where the content will be This is where the content will be
          This is where the content will be This is where the content will be This is where the content will be
          This is where the content will be This is where the content will be This is where the content will be
          This is where the content will be This is where the content will be This is where the content will be
          <CustomCard></CustomCard>
          <Content> </Content>
          </Grid>
          <Grid item xs={0} sm={2}></Grid>
      </Grid>
    </Grid>
    
  );
}

export default App;
