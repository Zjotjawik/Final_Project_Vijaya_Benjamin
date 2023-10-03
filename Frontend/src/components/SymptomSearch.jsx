// import React, { useState } from 'react';
// import axios from 'axios';

// export const SymptomSearch = () => {
//     const [searchTerm, setSearchTerm] = useState('');
//     const [filteredData, setFilteredData] = useState([]);


//  const fetchData = async (value) => {
//         // const searchValue = value.toLowerCase
//         console.log(value);
//         try{
//           let {data} = await axios.get("http://localhost:3000/treatments")
//           console.log(data)
//         } catch (err) {
//             console.log(err)
//         }

//         const handleSearch = () => {
//             const lowerSearchTerm = searchTerm.toLowerCase();
//             const filteredSymptoms = data.filter(item =>
//               item.symptom.toLowerCase().includes(lowerSearchTerm)
//             );
//             setFilteredData(filteredSymptoms);
//           };
//           setFilteredData(filteredSymptoms);
//       };
      
//     return (
//       <div>
//         <input
//           type="text"
//           placeholder="Search for a symptom"
//           value={searchTerm}
//           onChange={e => setSearchTerm(e.target.value)}
//           onClick={handleSearch}
//         />
//         {/* <button >Search</button> */}
  
//         {filteredData.map((item, index) => (
//           <div key={index}>
//             <h2>Symptom: {item.symptom}</h2>
//             <p>English Names: {item.englishNames}</p>
//             <p>Hindi Names: {item.hindiNames}</p>
//             <p>Description: {item.description}</p>
//           </div>
//         ))}
//       </div>
//     );
//   }
  
// //   export default SymptomSearch;