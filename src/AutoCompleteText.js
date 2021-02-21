import React from 'react'
import Select from 'react-select'




function AutoCompleteText({style, label, options, onChange, onInputChange}){
  return  <div style = {style}>
    <h1> {label} </h1>
    <Select options={options} onChange={onChange} onInputChange={onInputChange} isMulti></Select>
  </div>
}

export default AutoCompleteText;