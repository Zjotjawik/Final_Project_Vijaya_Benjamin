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

      {/* { data.length > 0 && data.map((item) => { return (

<table> <div key={item._id} className='container flex pt-16'>
   <div className='parallel'>
  <tr> <th><h2 className='hindi-names'>Hindi Names: {item.hindiName.join(', ')}</h2> </th> 
  <th> <h2 className='english-names'>English Names: {item.englishName.join(', ')}</h2></th>  
  <th> <h3 className='medical-uses'>Medical Uses:</h3></th></tr>
   <ul className='text-left'>
     {item.medicalUses.map((use,index) => (
       <li key={index}>
         <strong className='symptom'>Symptom:</strong> {use.symptom}
         <p className='description'>Description:{use.description}</p>
       </li>
     ))}
   </ul>
   </div>
   <div className='parallel'> 
   <img className='picture' src={item.picture} alt="Plant" />
   </div>
 </div>
 </table>
)} )} */}


 {results.length > 0 ? <ResultsData results={results} criteria={criteria}/> : <AllData results={results} /> }
 {isLoading ? (
      <LoadingSpinner />
    ) : (
      <>
        {results.length > 0 ? (
          <ResultsData results={results} criteria={criteria} />
        ) : (
          <AllData />
  )}


    </>
  )
}
</>
)}

