/* eslint-disable max-len */
import React from 'react';
import HomePrice from './HomePrice';
import DownPayment from './DownPayment';
import InterestRate from './InterestRate';
import LoanType from './LoanType';
import styles from '../styles/FinancialDetails.css';

const FinancialDetails = (props) => {
  const {
    sethomePriceVal, homePriceVal, setDownPaymentTotal, downPaymentRate, setPaymentRate, interestRate, setInterestRate, loanType, setLoanType, downPaymentTotal,
  } = props;
  const nf = new Intl.NumberFormat(); // adds commas

  const homePriceFormat = `$${nf.format(homePriceVal)}`;
  const downPaymentFormat = `$${nf.format(downPaymentTotal)}`;
  const downPaymentRateFormat = `${downPaymentRate}%`;
  const interestRateFormat = `${interestRate}%`;

  return (
    <div className={styles.inputContainer}>
      <div className={styles.flexContainerPadding}>
        <div className={styles.gridContainerPadding}>
          <HomePrice homePriceVal={homePriceVal} homePriceFormat={homePriceFormat} sethomePriceVal={sethomePriceVal} />

          <DownPayment setDownPaymentTotal={setDownPaymentTotal} downPaymentFormat={downPaymentFormat} setPaymentRate={setPaymentRate} downPaymentRateFormat={downPaymentRateFormat} downPaymentRate={downPaymentRate} />

          <InterestRate interestRateFormat={interestRateFormat} setInterestRate={setInterestRate} interestRate={interestRate} />

          <LoanType loanType={loanType} setInterestRate={setInterestRate} setLoanType={setLoanType} />

        </div>
      </div>
    </div>
  );
};

export default FinancialDetails;
