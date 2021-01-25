import React, { createContext, useState, useEffect } from 'react';

const savedColor = localStorage.getItem('background') || '#000'

const ColorContext = createContext();

export const ColorContextProvider = ({ children }) => {

  const [color, setColor] = useState(savedColor);

  const values = {
    color,
    setColor
  };
  console.log(color);
  useEffect(() => {
    setColor(color);
    localStorage.setItem('background', color);
  }, [color])

  return (
    <ColorContext.Provider value={values}>
      {children}
    </ColorContext.Provider>
  );
};

export default ColorContext;