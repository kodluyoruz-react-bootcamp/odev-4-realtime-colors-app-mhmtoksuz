import React, { useEffect, useContext } from 'react';
import { initSocket, disconnectSocket, setBackground, subToBg } from './services';
import ColorContext from './context/ColorContext';
import ColorCode from './components/ColorCode/ColorCode';
import ColorChanger from './components/ColorPalet/ColorPalet';
import styles from './App.module.css';

function App() {
  const { color, setColor } = useContext(ColorContext);
  useEffect(() => {
    initSocket();
    subToBg (background => {
      setColor(background);
    })
    return () => disconnectSocket();
  }, [setColor]);

  const colorChangeHandler = (e) => {
    setColor(e.target.value);
    setBackground(e.target.value);
  }

  return (
    <div className={styles.container} style={{ backgroundColor: color }}>
      <ColorCode color={color} />
      <ColorChanger colorChangeHandler={colorChangeHandler} color={color} />
    </div>
  );
}
export default App;
