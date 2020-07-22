import React from 'react';
import styles from '../styles/DonutGraph.css';

const Empty = () => {
  return (
    <div className={styles.donutSize}>
      <svg viewBox="0 0 36 36">
        <circle cx="18" cy="18" r="12" fill="#fff" role="presentation"> </circle>

        <circle cx="18" cy="18" r="15.915494309189533" fill="transparent" stroke="rgb(194, 213, 0)" strokeWidth="3.8" strokeDasharray="100 0" strokeDashoffset="25"> </circle>
      </svg>
    </div>
  );
};

export default Empty;
