import React from 'react';
import styles from './ColorPalet.module.css';

function ColorPalet({ color, colorChangeHandler }) {
  return <input className={styles.colorPalet} type="color" onChange={colorChangeHandler} value={color} />;
}

export default ColorPalet;