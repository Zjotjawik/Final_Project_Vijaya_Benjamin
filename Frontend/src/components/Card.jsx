import React from "react";
import "../styles/Card.css";
// export const Card = ({id, picture, medicalUses, hindiName, englishName}) => {
  export const Card = ({picture, imgAlt, symptom, hindiName, description, buttonText,
    link}) => {
  return (
   
       <div className="card-container">
          <article className="card-content">
            <div className="card-image">
            {picture && imgAlt && (
            <img src={picture} alt={imgAlt} className="card-picture" />
            )}
            </div>
            <div className="card-data">
              {hindiName && <h3 className="card-title">{hindiName} </h3>}
                {symptom && <h4 className="card-symptom"> {symptom} </h4>}
                {description && <p className="card-description">{description}</p>}
                {buttonText && link && (
                 <a href={link} className="card-btn">
                {buttonText}
                 </a>
                 )}
            </div>
     </article>
    </div>
    
  );
};

// export default Card
