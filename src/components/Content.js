import React from 'react';
import {makeStyles} from '@material-ui/styles';
import { csv, map } from 'd3'
import { useState , useEffect} from 'react';
import myfile from '../classes.csv'
import axios from 'axios'
import makeAnimated from 'react-select/animated';
import AsyncCreatable from 'react-select/async-creatable'
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  }
});

const animatedComponents = makeAnimated();

export default function CustomCard() {
  const classes = useStyles();
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

  return (
    <div style={{width:"90%", justifyContent:"center", display:"flex"}}>
      <div className="App">
        <h3 style={{color:"red"}}>CRS Class Scheduler</h3>
        <AsyncCreatable 
        cacheOptions 
        defaultOptions 
        loadOptions={promiseOptions}
        size ="large"
        width='300px'
        isMulti 
        
        components={animatedComponents}
        />
      <Button onClick={generateSchedule} variant="contained" color="primary" size="small" >  Go </Button>
      

      </div>
    </div>
  );
}