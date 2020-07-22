const fs = require('fs');
const faker = require('faker');
const csvWriter = require('csv-write-stream');

const genInterestRate = () => {
  let writer = csvWriter();
  writer.pipe(fs.createWriteStream(`./csv/interestRate.csv`));
  for (let id = 1; id <= 4; id++) {
    if (id === 1) {
      writer.write({
        interest_id: id,
        interest_rate: 2.83
      })
    }
    if (id === 2) {
      writer.write({
        interest_id: id,
        interest_rate: 2.74
      })
    }
    if (id === 3) {
      writer.write({
        interest_id: id,
        interest_rate: 3.10
      })
    }
    if (id === 4) {
      writer.write({
        interest_id: id,
        interest_rate: 3.23
      })
    }
  }
}

genInterestRate();