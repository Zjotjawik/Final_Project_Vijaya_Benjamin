import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import axios from "axios";

const SearchBar = ({ setCriteria, setResults, results }) => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const fetchData = async (value) => {
    try {
      let { data } = await axios.get("http://localhost:3000/treatments");
      if (data) {
        const result = data.data.filter(
          (ele) =>
            ele.englishName.some((name) =>
              name?.toLowerCase().includes(value.toLowerCase())
            ) ||
            ele.hindiName.some((name) =>
              name?.toLowerCase().includes(value.toLowerCase())
            ) ||
            ele.medicalUses.some((use) =>
              use?.symptom?.toLowerCase().includes(value.toLowerCase())
            )
            );
        setResults(result);

        const resultWithCriteria = data.data.map((ele) => {
          const foundIn = [];
          if (
            ele.englishName.some((name) =>
              name?.toLowerCase().includes(value.toLowerCase())
            )
          ) {
            foundIn.push("English Name");
          }
          if (
            ele.hindiName.some((name) =>
              name?.toLowerCase().includes(value.toLowerCase())
            )
          ) {
            foundIn.push("Hindi Name");
          }
          if (
            ele.medicalUses.some((use) =>
              use?.symptom?.toLowerCase().includes(value.toLowerCase())
            )
          ) {
            foundIn.push("Medical Uses");
          }
          return { data: ele, foundIn };
        });

        const filteredResults = resultWithCriteria.filter(
          (result) => result.foundIn.length > 0
        );

        const longestFoundIn = filteredResults.reduce((longest, result) => {
          if (result.foundIn.length > longest.length) {
            return result.foundIn;
          }
          return longest;
        }, []);

        // setResults(filteredResults)
        setCriteria({
          criteria: longestFoundIn[0],
          search: value,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(input);
    setTimeout(() => {
      navigate('/ingredients')
    }, 150);
  };

  const handleChange = (value) => {
    setInput(value);
    // fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <form onSubmit={handleSubmit}>
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

export default SearchBar;

// setData(prev => [...prev, filteredHindi])
// https://www.developerway.com/posts/debouncing-in-react
// const Input = () => {
//   const onChange = (e) => {
//     // send data from input field to the backend here
//     // will be triggered 500 ms after the user stopped typing
//   }
