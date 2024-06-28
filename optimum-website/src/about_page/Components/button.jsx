// src/components/ButtonWithIcon.js
// import React from 'react';
import PropTypes from 'prop-types';
import { FaArrowRight } from 'react-icons/fa'; 

const ButtonWithIcon = ({ text , handleClick }) => {
  // const handleClick = () => {
  //   console.log('Button clicked!');
  // };

  return (
    <button
      onClick={handleClick}
      className="bg-mypink text-white font-bold  py-2 px-4 rounded-2xl inline-flex items-center space-x-2"
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
