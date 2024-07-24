import React, { useState, useEffect } from 'react';
import log from "../../assets/logements";

function Carrousel({ id }) {
  const logement = log.find(l => l.id === id);
  const [currentIndex, setCurrentIndex] = useState(0);
  const pictures = logement.pictures;

  useEffect(() => {
    if (pictures.length === 1) {
      document.getElementById('numC').style.display = "none";
      document.getElementById('butL').style.display = "none";
      document.getElementById('butR').style.display = "none";
      document.getElementById('imgC').style.marginLeft = "0";
    }
  }, [pictures.length]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
  };

  return (
    <div>
      <div className="carrousel">
        <button onClick={prevImage} id="butL">
          <svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white" />
          </svg>
        </button>
        <img src={pictures[currentIndex]} id="imgC" alt="Carrousel" />
        <button onClick={nextImage} id="butR">
          <svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white" />
          </svg>
        </button>
      </div>
      <div id="numC">{currentIndex + 1}/{pictures.length}</div>
    </div>
  );
}

export default Carrousel;