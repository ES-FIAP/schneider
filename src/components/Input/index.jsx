import React from 'react';

const Input = ({placeholder}) => {
  const style = {
    backgroundColor: '#f2f2f2',
    border: 'none',
    borderRadius: '4px',
    padding: '10px',
    fontSize: '16px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    width: '200px',
  };

  return (
    <input type="text" style={style} placeholder={placeholder} />
  );
};

export default Input;
