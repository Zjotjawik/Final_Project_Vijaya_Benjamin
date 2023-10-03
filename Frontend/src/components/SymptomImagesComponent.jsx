import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import LoadingSpinner from '../components/LoadingSpinner';

export const SymptomImagesComponent = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Axios.get('http://localhost:3000/treatments')
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
              <img className='ailment-image bg-yellow-300 w-60 h-25 p-2  '  src={item.picture} alt={item.ailment} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
