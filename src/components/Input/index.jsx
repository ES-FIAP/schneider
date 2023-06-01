import React from 'react';

const Input = ({placeholder}) => {
  const style = {
    backgroundColor: '#f2f2f2',
    border: 'none',
    borderRadius: '6px',
    padding: '15px',
    fontSize: '16px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    width: '300px',
    position:'relative',
    marginBottom:'20px',
    outline: 'none',
  };

  return (
    <input type="text" style={style} placeholder={placeholder} />
  );
};

export default Input;
