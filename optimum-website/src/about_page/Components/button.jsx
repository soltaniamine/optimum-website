// src/components/ButtonWithIcon.js
// import React from 'react';
import PropTypes from 'prop-types';
import { FaArrowRight } from 'react-icons/fa'; 

const ButtonWithIcon = ({ text , handleClick }) => {

  return (
    <button
      onClick={handleClick}
      className="bg-mypink text-xs md:text-base  text-white font-bold p-2  md:py-2 md:px-4 rounded-2xl inline-flex items-center space-x-2"
    >
      <span>{text}</span>
      <FaArrowRight />
    </button>
  );
};

ButtonWithIcon.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};

export default ButtonWithIcon;
