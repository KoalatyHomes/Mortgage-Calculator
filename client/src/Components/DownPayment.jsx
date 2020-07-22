import React from 'react';
import styles from '../styles/FinancialDetails.css';

const DownPayment = (props) => {
  const {
    setDownPaymentTotal, downPaymentFormat, setPaymentRate, downPaymentRateFormat, downPaymentRate,
  } = props;

  function handleDownPayment(e) {
    const val = e.target.value;
    setDownPaymentTotal(val);
  }
  return (
    <div className={styles.gridCellBox && styles.gridFlex}>
      <div className={styles.inputContainer}>
        <div className={styles.financialDetail}>

          <div className={styles.textContainer}>
            Down Payment
          </div>

          <div className={styles.downPaymentWrapper}>
            {/* left payment */}
            <input className={styles.leftSplitFinancialInput} id="DownPaymentInput" style={{ width: '100px' }} type="text" onChange={handleDownPayment} value={downPaymentFormat} />
            {/* Down Payment right Textarea */}
            <input className={styles.rightSplitFinancialInput} style={{ width: '56px' }} type="text" onChange={(e) => setPaymentRate(e.target.value)} value={(downPaymentRateFormat)} />
          </div>
        </div>

        <div className="slider-container">
          {/* Down Paypment Slider */}

          <input className="range" type="range" min="0" max="30" onChange={(e) => setPaymentRate(e.target.value)} value={downPaymentRate} />

        </div>
      </div>
    </div>
  );
};

export default DownPayment;
