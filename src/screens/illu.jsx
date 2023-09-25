import React, { useState } from 'react';
import '../App.css';
import data from '../arts';

const Illu = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const toggleDetails = (index) => {
    setSelectedImage(index);
    setShowDetails(!showDetails);
  };

  return (
    <div className="App">
      {data.map((item, index) => (
        <div key={index} className="image-container">
          <img
            className="img"
            src={item.image}
            alt={item.title}
            onClick={() => toggleDetails(index)}
          />
          {showDetails && selectedImage === index && (
            <div className="details">
              <p>Title: {item.name}</p>
              <p>Category: {item.category}</p>
              <p>Description: {item.description}</p>
              {/* Add other details here */}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Illu;
