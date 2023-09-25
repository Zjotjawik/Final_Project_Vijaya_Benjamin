import React from 'react'
import '../styles/AyurIngredients.css';
import { useState, useEffect } from 'react';
import Axios from 'axios';

export const AyurIngredients = () => {

  const [data, setData] = useState([]);
  useEffect(() => {
    Axios.get('http://localhost:3000/treatments').then(res => {
        setData(res.data)
        console.log(res.data);
    }).catch(err => console.log(err))
}, [])

  // useEffect(() => {
  //   // Replace 'apiEndpoint' with the actual URL of your API endpoint
  //  fetch('http://localhost:3000/treatments')
  //     .then((response) => response.json())
  //     .then((data) => setData(data))
  //     .catch((error) => console.error('Error fetching data: ', error));
  // }, []);
  console.log(data);
  
  return (
    <>
      { data.map((item) =>  (

<table> <div key={item._id} className='container flex mt-16'>
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
))}

 
    </>
  );
}

