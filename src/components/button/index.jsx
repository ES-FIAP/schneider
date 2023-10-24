import React from 'react';
import './button.css';
const Button = ({text, click}) => {

  return (
    <button className='button' onClick={() => click()}>
     {text}
    </button>
  );
};

export default Button;