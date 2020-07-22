import React from 'react';
import styles from '../styles/FinancialDetails.css';

const InterestRate = (props) => {
  const {
    interestRateFormat, setInterestRate, interestRate,
  } = props;

  return (
    <div className={styles.gridCellBox && styles.gridFlex}>
      <div className={styles.inputContainer}>
        <div className={styles.financialDetail}>
          <div className={styles.textContainer}>
            Interest Rate
          </div>
          <input id="InterestRateInput" className={styles.interestRateInput} style={{ width: '75px' }} type="text" onChange={(e) => setInterestRate(e.target.value)} value={interestRateFormat} />
        </div>
        <div className="slider-container">
          <input className="range" type="range" min="0.1" max="6.50" step="0.10" onChange={(e) => setInterestRate(e.target.value)} value={interestRate} />
        </div>
      </div>
    </div>
  );
};

export default InterestRate;
