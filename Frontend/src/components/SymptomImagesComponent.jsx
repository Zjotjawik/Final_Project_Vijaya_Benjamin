import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import LoadingSpinner from '../components/LoadingSpinner';

export const SymptomImagesComponent = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Axios.get('http://localhost:3000/treatments')
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
    <div className='container'>
      <h2>Symptoms and Pictures</h2>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className='symptom-images'>
          {data.map((item) => (
            <div key={item._id} className='symptom-image'>
              <h3 className='symptom'>{item.symptom}</h3>
              <img src={item.picture} alt={item.symptom} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
