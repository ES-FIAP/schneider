import React from 'react';
import './button.css';
const Button = ({text, click, width, type}) => {

  return (
    <button className='button' onClick={() => click()} style={{ width: width}} type={type}>
     {text}
    </button>
  );
};

export default Button;