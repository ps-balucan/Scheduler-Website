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
    marginBottom: 20,
    marginTop:100,
  },
  buttons: {
    justifyContent: 'center',
  }
});

const animatedComponents = makeAnimated();



export default function CustomCard(props) {
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
    var query = map(selectedOption, function(d){
        return d.value
      })
    console.log("sending")
    console.log(query)
    axios.get("https://6wyc8n688h.execute-api.ap-southeast-1.amazonaws.com/dev/echo/main", { params: { message: query } })
            .then(response =>{
                console.log(response)
                setOutputSchedule(response.data)
                props.data([...props.currentSchedules , response.data] )
            })
            .catch(error => {
                console.log(error)
                props.data([...props.currentSchedules , ["Error: One of the subjects you input does not exist."]] )
            })
      
  }

  const handleChange= (selectedOption) =>
  {
    setSelectedOption(selectedOption)
    console.log("input changed!!")
    console.log(selectedOption)
  }

  return (
    <Container>
      <Grid container xs={12} spacing={2} direction="column" className={classes.root}>
        <Grid item>
        <AsyncCreatable 
        cacheOptions 
        defaultOptions 
        loadOptions={promiseOptions}
        size ="large"
        isMulti 
        onChange={handleChange}
        value={selectedOption}
        components={animatedComponents}
        />
        </Grid>
        <Grid item  align="center">
        <Button id="btn-go" onClick={generateSchedule} className={classes.buttons} variant="contained" color="primary" size="large" >  Go </Button> 
        </Grid>
      </Grid>  
      
      </Container>
  );
}