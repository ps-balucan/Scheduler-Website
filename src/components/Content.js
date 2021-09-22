import React from 'react';
import {makeStyles} from '@material-ui/styles';
import { csv, map } from 'd3'
import { useState , useEffect} from 'react';
import myfile from '../classes.csv'
import axios from 'axios'
import makeAnimated from 'react-select/animated';
import AsyncCreatable from 'react-select/async-creatable'
import { Button } from '@material-ui/core';
import { Grid , Container} from '@material-ui/core';
const useStyles = makeStyles({
  root: {
    marginTop: 20,
  },
  buttons: {
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 5,
  }
});

const animatedComponents = makeAnimated();



export default function CustomCard(props) {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [selectedOption, setSelectedOption] = useState([]);
  // const [myInputValue, setMyInputValue] = useState( "" );
  // const [outputSchedule, setOutputSchedule] = useState( [] );
  // const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    csv(myfile).then(setData);
    console.log("Loaded data");
  }, []);

  var col2 = map(data, function(d){
    return d.name
  })

  console.log("Going here.");
  console.log(data)


  //This makes the suggestions upon typing in the search  bar NOT case sensitive
  const filterOptions = (inputValue: string) => {
    return data.filter( i => 
      i.label.toLowerCase().includes(inputValue.toLowerCase())
      );
  };

  //referenced in the asynccreatable below as load options
  const promiseOptions = inputValue =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(filterOptions(inputValue));
      }, 1000);
    });

  //generate schedules by querying the api
  function generateSchedule()
  {
    props.isLoading(true)
    console.log("is loading: ")
    var query = map(selectedOption, function(d){
        return d.value
      })
    console.log(query)
    axios.get("https://6wyc8n688h.execute-api.ap-southeast-1.amazonaws.com/dev/echo/main", { params: { message: query } })
            .then(response =>{
                console.log(response)
                // setOutputSchedule(response.data)
                props.data([response.data] )
                props.isLoading(false)
            })
            .catch(error => {
                console.log(error)
                props.isLoading(false)
                props.data([["Error: One of the subjects you input does not exist."]] )
            })
      
  }

  const handleChange= (selectedOption) =>
  {
    setSelectedOption(selectedOption)
    console.log("input changed!!")
    console.log(selectedOption)
  }

  return (
    <>      
      <AsyncCreatable 
      cacheOptions 
      defaultOptions 
      loadOptions={promiseOptions}
      size ="large"
      isMulti 
      onChange={handleChange}
      value={selectedOption}
      components={animatedComponents}
      className={classes.root}
      />    
      <Button id="btn-go" onClick={generateSchedule} className={classes.buttons} variant="outlined" size="large" > Generate </Button>   
    </>
  );
}