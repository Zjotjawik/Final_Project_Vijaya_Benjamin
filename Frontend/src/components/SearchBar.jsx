import React from 'react'
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
// import './App.css';
const SearchBar = ({setResults}) => {
    const [input, setInput] = useState("");
    const fetchData = (value) => {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then((response) => response.json())
          .then((json) => {
            // console.log(json);
            const results = json.filter((user) => {
              return (
                value &&
                user &&
                user.name &&
                user.name.toLowerCase().includes(value)
              );
            });
            // console.log(results);
             setResults(results);
          });
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
      <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default SearchBar
