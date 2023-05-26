import React from 'react';

const Button = ({text}) => {
  const style = {
    backgroundColor: '#42b4e6',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    width:'200px'
  };

  return (
    <button style={style}>
     {text}
    </button>
  );
};

export default Button;