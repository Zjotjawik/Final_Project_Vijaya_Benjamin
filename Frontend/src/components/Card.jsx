import React from "react";
import "../styles/Card.css";

// export const Card = ({id, picture, medicalUses, hindiName, englishName}) => {
  export const Card = ({ picture,  medicalUses, hindiName, buttonText,
    link}) => {
  return (
   
       <div className="card-container">
            {picture && (
            <img src={picture} alt=""  className="card-picture" />
            )}
          <article className="card-content">
            <div className="card-image">
            </div>
            <div className="card-data">
              {hindiName && <h3 className="card-title">{hindiName[0]} </h3>}
                {/* {medicalUses && <h4 className="card-symptom"> {medicalUses} </h4>}
                {description && <p className="card-description">{description}</p>} */}
                 <ul className='medical-data'>
                      <li >
                        <p  className='card-symptom text-center'>Symptom: {medicalUses[0].symptom} </p>
                        <p   className='card-description'>Description: {medicalUses[0].description}</p>
                      </li>
                  </ul>
                
                {/* {buttonText && link && ( */}
                 <a href="/ingredients" className="card-btn">
                Learn More ...
                 </a>
                 {/* )} */}
            </div>
     </article>
    </div>
    
  );
};

// export default Card
