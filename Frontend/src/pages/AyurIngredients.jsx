import React from 'react'
import '../styles/AyurIngredients.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import AllData from '../components/AllData.jsx';
import ResultsData from '../components/ResultsData.jsx';
import LoadingSpinner from '../components/LoadingSpinner.jsx';


export const AyurIngredients = ({data, setData, results, criteria}) => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    axios.get('http://localhost:3000/treatments')
      .then((res) => {
        setData(res.data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
   }, []);

  return (
    <>
      {isLoading ? (
            <LoadingSpinner />
          ) : (
            <>
              {results.length > 0 ? (
                <ResultsData results={results} criteria={criteria} />
              ) : (
                <AllData data={data} setData={setData} results={results} />
        )}
    </>
  )
}
</>
)}

