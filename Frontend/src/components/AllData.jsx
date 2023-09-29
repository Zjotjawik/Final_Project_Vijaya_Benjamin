import { useState, useEffect } from 'react';

const AllData = ({data, setData}) => {
  return (
    <>
      { data.length > 0 && data.map((item) => { return (
        <table key={item._id}> 
            <div key={item._id} className='container flex '>
              <div className='parallel'>
                  <tr> 
                    <th><h2 className='hindi-names'>Hindi Names: {item.hindiName.join(', ')}</h2> </th> 
                    <th> <h2 className='english-names'>English Names: {item.englishName.join(', ')}</h2></th>  
                    <th> <h3 className='medical-uses'>Medical Uses:</h3></th>
                  </tr>
                  <ul className='text-left'>
                    {item.medicalUses.map((use, index) => (
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
    )})}
    </>
  );
}
export default AllData;