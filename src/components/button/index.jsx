import React from 'react';

const Button = ({text, click}) => {
  const style = {
    backgroundColor: '#00B332',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '20px',
    border: 'none',
    cursor: 'pointer',
    margin: '10px',
    fontSize:'16px'
  };

  return (
    <button style={style} onClick={() => click()}>
     {text}
    </button>
  );
};

export default Button;