import React from "react";
import "../styles/Card.css";
export const Card = ({
  imgSrc,
  imgAlt,
  title,
  Ailment,
  description,
  buttonText,
  link,
}) => {
  return (
    <div className="card-container">
      {imgSrc && imgAlt && (
        <img src={imgSrc} alt={imgAlt} className="card-img" />
      )}
      {title && <h1 className="card-title">{title} </h1>}
      {Ailment && <h2 className="card-ailment"> {Ailment} </h2>}
      {description && <p className="card-description">{description}</p>}
      {buttonText && link && (
        <a href={link} className="card-btn">
          {buttonText}
        </a>
      )}
    </div>
  );
};

// export default Card