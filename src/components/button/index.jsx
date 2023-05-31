import React from 'react';

const Button = ({text}) => {
  const style = {
    backgroundColor: '#00B332',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '20px',
    border: 'none',
    cursor: 'pointer',
    width:'127px'
  };

  return (
    <button style={style}>
     {text}
    </button>
  );
};

export default Button;