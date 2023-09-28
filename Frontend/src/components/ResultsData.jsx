import { useState, useEffect } from "react";
import Axios from "axios";

const ResultsData = ({ results, criteria }) => {
//   {
//     "_id": "6502c341af33db80455701ab",
//     "hindiName": [
//         "Agastya",
//         "Agasti",
//         "chogache",
//         "gaach-munga",
//         "agathiya",
//         "Sadabasna"
//     ],
//     "englishName": [
//         "West Indian pea",
//         "white dragon tree",
//         "August flower",
//         "Flamingo Bill"
//     ],
//     "medicalUses": [
//         {
//             "symptom": "Worm infestation",
//             "description": "Intake of agastya leaves juice 10-20ml in empty stomach, early morning for 2 weeks can expel the intestinal worms."
//         },
//         {
//             "symptom": "Headache",
//             "description": "2 - 3 drops of agastya leaves juice is used as nasal drops in the morning to cure sinusitis and headache."
//         },
//         {
//             "symptom": "Fever",
//             "description": "The paste of agastya leaves can be externally applied over the body to subside the fever."
//         },
//         {
//             "symptom": "Night Blindness",
//             "description": "Administration of 3gms of agastya flowers paste processed in ghee recommended for night blindness."
//         },
//         {
//             "symptom": "Colic",
//             "description": "5 grams of agastya bark powder is boiled in 100ml of water till it reduced to 25ml. Oral administration of this decoction added with salt and hing relieve abdominal colic."
//         },
//         {
//             "symptom": "Arthritis",
//             "description": "Root and bark paste of agastya is applied externally to relieve pain and inflammation associated with arthirtis and gout."
//         }
//     ],
//     "picture": "https://res.cloudinary.com/dsagberfp/image/upload/v1695023052/Agastya_eaoa0j.png"
// }

  return (
    <>
      {results.length > 0 &&
        results.map((item) => {
          return (
            <table key={item._id}>
              {/* {" "} */}
              <div  className="container flex ">
                <div className="parallel">
                  <tr>
                    {/* {" "} */}
                    <th>
                      <h2 className="hindi-names">
                        Hindi Names: {item.hindiName.join(", ")}
                      </h2> 
                      {/* {" "} */}
                    </th>
                    <th>
                      {/* {" "} */}
                      <h2 className="english-names">
                        English Names: {item.englishName.join(", ")}
                      </h2>
                    </th>
                    <th>
                      {/* {" "} */}
                      <h3 className="medical-uses">Medical Uses:</h3>
                    </th>
                  </tr>
                  <ul className="text-left">
                    {
                    criteria.criteria == "Medical Uses" ?
                    //  item.medicalUses
                    // //  TO DO FILTER 
                    //   .filter((use) =>
                    //   // use &&
                    //   // use.symptom &&
                    //   use.symptom.includes(criteria.search)
                    //   )
                    item.medicalUses?.filter((use) =>
    use.symptom?.toLowerCase().includes(criteria.search?.toLowerCase())
    )?.map((use, index) => (
                      <li key={index}>
                        <strong className="symptom">Symptom:</strong>
                        {use.symptom}
                        <p className="description">
                          Description:{use.description}
                        </p>
                      </li>
                    ))
                    :
                    item.medicalUses.map((use, index) => (
                      <li key={index}>
                        <strong className="symptom">Symptom:</strong>{" "}
                        {use.symptom}
                        <p className="description">
                          Description:{use.description}
                        </p>
                      </li>
                    ))
                  }
                  </ul>
                </div>
                <div className="parallel">
                  <img className="picture" src={item.picture} alt="Plant" />
                </div>
              </div>
            </table>
          );
        })}
    </>
  );
};
export default ResultsData;
