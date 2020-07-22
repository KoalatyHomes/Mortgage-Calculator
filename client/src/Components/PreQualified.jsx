/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styles from '../styles/PaymentContainer.css';

const PreQualified = () => {
  function handleSearch() {
    window.location.assign('https://www.trulia.com/mortgages/pre-qualified/#/first-time');
  }

  return (
    <div className={styles.preQualifiedContainer}>
      <div className={styles.paymentCell && styles.centerCell}>
        <div className={styles.paymentContent}>
          <div className={styles.qualifiedCenter}>
            <button type="button" className={styles.preQualifiedBtn} onClick={handleSearch}>Get Pre-Qualified</button>
          </div>
        </div>
      </div>

      <div className={styles.seperateCols}>
        <div className={styles.paymentCell && styles.centerCell}>
          <div className={styles.paymentContent}>
            <div className={styles.qualifiedCenter}>
              <div className={styles.otherText}>
                or
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.seperateCols}>
        <div className={styles.paymentCell && styles.centerCell}>
          <div className={styles.qualifiedCenter}>
            <div className={styles.otherText} style={{ color: 'teal' }}>
            <a href="https://www.trulia.com/mortgage-rates/Palo_Alto,CA/?cta=rates&auto=true&value=4798000&down=959600&zip=94306&loantype=purchase#request=ZR-YCFXMGBP">See today's mortgage rates</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreQualified;
