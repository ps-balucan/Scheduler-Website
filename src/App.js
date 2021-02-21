import logo from './logo.svg';
import './App.css';
import { useState , useEffect} from 'react';
import { csv, map } from 'd3'
import myfile from './classes.csv'
import {createFilter} from 'react-select';

import makeAnimated from 'react-select/animated';
import AsyncCreatable from 'react-select/async-creatable'

const animatedComponents = makeAnimated();

function App() {
  const [data, setData] = useState([]);
  const [selectedOption, setSelectedOption] = useState([]);
  const [myInputValue, setMyInputValue] = useState( "" );

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
  
  
  return (
    <div style={{width:"90%", justifyContent:"center", display:"flex"}}>
      <div className="App">
        <h3 style={{color:"red"}}>CRS Class Scheduler</h3>
        <AsyncCreatable 
        cacheOptions 
        defaultOptions 
        loadOptions={promiseOptions} 
        isMulti 
        components={animatedComponents}
        />


      </div>
    </div>
  );
}

export default App;
