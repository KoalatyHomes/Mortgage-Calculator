const fs = require('fs');
const faker = require('faker');
const csvWriter = require('csv-write-stream');

const genLoanType = () => {
  let writer = csvWriter();
  writer.pipe(fs.createWriteStream(`./csv/loanType.csv`));
  for (let id = 1; id <= 4; id++) {
    if (id === 1) {
      writer.write({
        loan_id: id,
        loan_type: "10-year fixed"
      })
    }
    if (id === 2) {
      writer.write({
        loan_id: id,
        loan_type: "15-year fixed"
      })
    }
    if (id === 3) {
      writer.write({
        loan_id: id,
        loan_type: "20-year fixed"
      })
    }
    if (id === 4) {
      writer.write({
        loan_id: id,
        loan_type: "30-year fixed"
      })
    }
  }
}

genLoanType();