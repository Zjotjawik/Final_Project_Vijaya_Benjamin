import React from 'react'
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import axios from 'axios';

// import './App.css';
const SearchBar = ({setResults}) => {
// const SearchBar = ({setCriteria, setResults, results}) => {
    const [input, setInput] = useState("");

    // RESEARCH VERSION

    // 

    const fetchData = async (value) => {
      // const searchValue = value.toLowerCase
      console.log(value);
      try{
        let {data} = await axios.get("http://localhost:3000/treatments")
        console.log(data)
        if(data){


          // OLDER VERSION
          const result = data.data.filter(ele => 
            ele.englishName.some((name) => name?.toLowerCase().includes(value.toLowerCase())) ||
            ele.hindiName.some((name) => name?.toLowerCase().includes(value.toLowerCase())) ||
            ele.medicalUses.some((use) => use?.symptom?.toLowerCase().includes(value.toLowerCase()))
          )

          console.log(result)
          setResults(result)

          // NEWER VERSION
          // const resultWithCriteria = data.data.map(ele => {
          //   const foundIn = []
          //   if(ele.englishName.some((name) => name?.toLowerCase().includes(value.toLowerCase()))){
          //     foundIn.push("English Name")
          //   }
          //   if(ele.hindiName.some((name) => name?.toLowerCase().includes(value.toLowerCase()))){
          //     foundIn.push("Hindi Name")
          //   }
          //   if(ele.medicalUses.some((use) => use?.symptom?.toLowerCase().includes(value.toLowerCase()))){
          //     foundIn.push("Medical Uses")
          //   }
          //   return {data: ele, foundIn}
          // })

          // const filteredResults = resultWithCriteria.filter(result => result.foundIn.length > 0)

          // const longestFoundIn = filteredResults.reduce((longest, result) => {
          //   if (result.foundIn.length > longest.length) {
          //     return result.foundIn;
          //   }
          //   return longest;
          // }, []);
          
          // console.log(longestFoundIn);  // ---New version ---

          // console.log(filteredResults)
          // setResults(filteredResults)

          // console.log({value, results: filteredResults})
          //--- new version---
          // setCriteria({
          //   criteria: longestFoundIn[0],
          //   search: value
          // })
 // NEWER VERSION


        }
      }catch(err){
        console.log(err)
      }
    };
const handleSubmit = (e) => {
  e.preventDefault()
  
  // setInput(e.target.value);
   fetchData(input);
  // console.log(input)
}

      const handleChange = (value) => {
        setInput(value);
        console.log(value);
        // fetchData(value);
      };

      
  return (
    <div  className="input-wrapper">
       <FaSearch id="search-icon" />
       <form onSubmit={ handleSubmit}>
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

 // setData(prev => [...prev, filteredHindi])
    // https://www.developerway.com/posts/debouncing-in-react
// const Input = () => {
//   const onChange = (e) => {
//     // send data from input field to the backend here
//     // will be triggered 500 ms after the user stopped typing
//   }