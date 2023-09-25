import React from 'react'
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import axios from 'axios';

// import './App.css';
const SearchBar = ({setResults}) => {
    const [input, setInput] = useState("");

    const fetchData = async (value) => {
      // const searchValue = value.toLowerCase
      try{
        let {data} = await axios.get("http://localhost:3000/treatments")
        if(data){
          const result = data.data.filter(ele => 
            ele.englishName.some((name) => name.toLowerCase().includes(value.toLowerCase())) ||
            ele.hindiName.some((name) => name.toLowerCase().includes(value.toLowerCase())) ||
            ele.medicalUses.some((use) => use.symptom.toLowerCase().includes(value.toLowerCase()))
          )
          console.log(result)
          setResults(result)
        }
      }catch(err){
        console.log(err)
      }
    };
const handelSubmit = (e) => {
  e.preventDefault()
  console.log(input)
}

      const handleChange = (value) => {
        setInput(value);
        fetchData(value);
      };

      
  return (
    <div  className="input-wrapper">
       <FaSearch id="search-icon" />
       <form onSubmit={handelSubmit}>
      <input
      name="search-name"
      type="text"
      placeholder="Type to search..."
      value={input}
      onChange={(e) => handleChange(e.target.value)}
      />
      {/* <button type='submit'>Submit</button> */}
      </form>
    </div>
  );
};

export default SearchBar
