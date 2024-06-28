// src/components/ImageText.js
// import React from 'react';
import PropTypes from 'prop-types';

const Detail = ({ imagePath, text }) => {
  return (
    <div className="flex items-center space-x-4">
      <img src={imagePath} alt="Image" className="w-16 h-16 " />
      <span className=' text-[28px] font-bold'>{text}</span>
    </div>
  );
};

Detail.propTypes = {
  imagePath: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Detail;
