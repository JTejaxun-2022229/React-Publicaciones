import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';


const Header = ({ images = [], interval = 3000 }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        if (images.length === 0) return;

        const timer = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, interval);

        return () => clearInterval(timer);
    }, [images, interval]);

    if (images.length === 0) {
        return <div className="text-center p-4">No hay imagenes para mostrar</div>;
    }

    return (
        <header className="relative w-full h-96 overflow-hidden">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </header>
      );
};

Header.propTypes = {

    images: PropTypes.arrayOf(PropTypes.string),
    interval: PropTypes.number,
};

export default Header;
