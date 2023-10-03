import React from 'react';
import '../styles/AllData.css';

const AllData = ({ data, setData }) => {
  // Filter out entries that contain the key "ailment"
  const filteredData = data.filter((item) => !item.hasOwnProperty('ailment'));

  return (
    <>
      {filteredData.length > 0 &&
        filteredData.map((item) => {
          return (
            <div key={item._id} className='container-innertext'>
              <div key={item._id} className='row-alldata'>
                <div className='col-md-4 '>
                  <img
                    className='img-responsive rounded-end '
                    src={item.picture}
                    alt='Plant'
                  />
                </div>
                <div className='col-md-8'>
                  <h2 className='hindi-names text-center font-bold'>
                    <span className='span-hindi'>Hindi Names:</span> {''}
                    {item.hindiName.join(', ')}
                  </h2>
                  <h2 className='english-names text-center font-bold'>
                    {' '}
                    <span className='span-english '>English Names:</span> {''}
                    {item.englishName.join(', ')}
                  </h2>
                  <ul className='text-left'>
                    <h3 className='medical-uses font-bold'>Medical Uses:</h3>
                    {item.medicalUses.map((use, index) => (
                      <li key={index}>
                        <p className='symptom-name'>
                          <strong className='symptom'>Symptom:</strong>{' '}
                          {use.symptom}{' '}
                        </p>
                        <p className='description-all'>
                          {' '}
                          <strong>Description:</strong> {use.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default AllData;