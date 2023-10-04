import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import LoadingSpinner from '../components/LoadingSpinner';
import {useNavigate} from 'react-router-dom';
import axios from "axios";

export const SymptomImagesComponent = ({ setCriteria, setResults, results }) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Axios.get('https://final-project-1lrc.onrender.com/treatments')
      .then((res) => {
        // Filter the data to include only entries with ailment and picture fields
        const filteredData = res.data.data.filter((item) => {
          return item.ailment && item.picture;
        });
        setData(filteredData);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, []);


  // ----------------
  const [input, setInput] = useState("");


  const fetchData = async (value) => {
    try {
      let { data } = await axios.get("https://final-project-1lrc.onrender.com/treatments");
      console.log(data);
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
  
  const handleClick = async (e) => {
    e.preventDefault();
    console.log(e.target.alt)
    await fetchData(e.target.alt);
    setTimeout(() => {
      navigate('/ingredients')
    }, 150);
  };

  const handleChange = (value) => {
    setInput(value);
    // fetchData(value);
  };
  // ----------------
  // ----------------
  // const handleClick = ( e ) => {  

  //   e.preventDefault();
  //   console.log(e.target.alt)

  //   // navigate(`/treatment`);
  // }

  return (
    <div className='container'>
      <h2>Symptoms and Pictures</h2>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className='symptom-images '>
          {data.map((item) => (
            <div key={item._id.$oid} className='symptom-image  justify-center m-4'>
              <h3 className='ailment '>{item.ailment}</h3>
              <img className='ailment-image bg-yellow-300 w-60 h-25 p-2  '  src={item.picture} alt={item.ailment} onClick={handleClick}/>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
