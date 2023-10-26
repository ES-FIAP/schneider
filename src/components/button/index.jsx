import React from 'react';
import './button.css';
const Button = ({text, click, width}) => {

  return (
    <button className='button' onClick={() => click()} style={{ width: width}}>
     {text}
    </button>
  );
};

export default Button;