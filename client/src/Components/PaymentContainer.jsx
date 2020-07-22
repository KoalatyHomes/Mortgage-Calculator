import React from 'react';
import styles from '../styles/PaymentContainer.css';

const PaymentContainer = (props) => {
  const nf = new Intl.NumberFormat(); // adds commas
  const {
    principal, taxes, homeIns, mortgage,
  } = props;
  return (
    <div>
      {/* **************** PRINCIPLE AND INTEREST **************** */}
      <div className={styles.seperateCols}>
        <div className={styles.paymentCell}>
          <div className={styles.paymentContent}>
            <div className={styles.paymentCell} style={{ width: '100%' }}>
              <div className={styles.principalDot}> </div>
              <div className={styles.paymentContent}>
                Principal & Interest
              </div>
            </div>
          </div>
          <div className={styles.priceText}>
            $
            {nf.format(principal)}
          </div>
        </div>
      </div>

      {/* **************** PROPERTY TAX **************** */}
      <div className={styles.seperateCols}>
        <div className={styles.paymentCell}>
          <div className={styles.paymentContent}>
            <div className={styles.paymentCell} style={{ width: '100%' }}>
              <div className={styles.propertyTaxDot}> </div>
              <div className={styles.paymentContent}>
                Property Taxes
              </div>
            </div>
          </div>
          <div className={styles.priceText}>
            $
            {nf.format(taxes)}
          </div>
        </div>
      </div>

      {/* **************** HOME INSURANCE **************** */}
      <div className={styles.seperateCols}>
        <div className={styles.paymentCell}>
          <div className={styles.paymentContent}>
            <div className={styles.paymentCell} style={{ width: '100%' }}>
              <div className={styles.homeInsuranceDot}> </div>
              <div className={styles.paymentContent}>
                Home Insurance
              </div>
            </div>
          </div>
          <div className={styles.priceText}>
            $
            {homeIns}
          </div>
        </div>
      </div>

      {/* **************** MORTGAGE INS. & OTHER **************** */}
      <div className={styles.seperateCols}>
        <div className={styles.paymentCell}>
          <div className={styles.paymentContent}>
            <div className={styles.paymentCell} style={{ width: '100%' }}>
              <div className={styles.mortgageInsDot}> </div>
              <div className={styles.paymentContent}>
                Mortgage ins. & other
              </div>
            </div>
          </div>
          <div className={styles.priceText}>
            $
            {nf.format(mortgage)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentContainer;
