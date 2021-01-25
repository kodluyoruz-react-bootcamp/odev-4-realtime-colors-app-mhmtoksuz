import React from 'react';
import styles from './ColorCode.module.css';

function ColorCode({ color }) {
  return (
  
    <p className={styles.colorcode}>
      Color Code: {color}
    </p>
    

  )
}

export default ColorCode;