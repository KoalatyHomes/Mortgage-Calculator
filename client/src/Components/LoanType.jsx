import React from 'react';
import PropTypes from 'prop-types';

const LoanType = (props) => {
  const {
    loanType, setInterestRate, setLoanType,
  } = props;
  return (
    <div className="grid-cell-box grid-flex">
      <div className="input-container ">
        <div className="financial-detail ">
          <div className="text-container">
            {/* <label forhtml="LoanTypeInput">Loan Type</label> */}
            Loan Type
          </div>
        </div>
        <div className="select-container">
          <div className="drop-down-container">
            <div className="drop-down-arrow ">
              {loanType}
            </div>
            <div className="svg-container">
              <svg className="svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.961 18.183l7.056-7.147 1.893 1.868-8.951 9.068-8.927-9.069 1.896-1.866z" fill="#869099"> </path>
              </svg>
            </div>
          </div>
          <select id="LoanTypeInput" value={loanType} className="select-input" onChange={(e) => { setInterestRate(Number((e.target.value).slice(0, 4))); setLoanType((e.target.value).slice(5)); }}>
            <option value="3.49 30-year fixed">30-year fixed</option>
            <option value="3.27 20-year fixed">20-year fixed</option>
            <option value="2.86 15-year fixed">15-year fixed</option>
            <option value="2.97 10-year fixed">10-year fixed</option>
            <option value="3.06 FHA 30-year fixed">FHA 30-year fixed</option>
            <option value="2.89 FHA 15-year fixed">FHA 15-year fixed</option>
            <option value="2.84 VA 30-year fixed">VA 30-year fixed</option>
            <option value="2.69 VA 15-year fixed">VA 15-year fixed</option>
          </select>
        </div>
      </div>
    </div>
  );
};

LoanType.propTypes = {
  loanType: PropTypes.string.isRequired,
  setInterestRate: PropTypes.func.isRequired,
  setLoanType: PropTypes.func.isRequired,
};

export default LoanType;
