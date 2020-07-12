const fs = require('fs');
const faker = require('faker');
const csvWriter = require('csv-write-stream');
let writer = csvWriter();

const genLoanType = () => {
  writer.pipe(fs.createWriteStream(`./data/LoanType.csv`));
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
  writer.end();
}

const genInterestRate = () => {
  writer.pipe(fs.createWriteStream(`./data/interestRate.csv`));
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
  writer.end();
}

const genPropertyTax = () => {
  writer.pipe(fs.createWriteStream(`./data/proertyTax.csv`));
  for (let id = 1; id <= 50; id++) {
    let rate = faker.random.number({min: 0.50, max: 2.95, precision: 0.01});
    rate = rate.toFixed(2);
    writer.write({
      property_tax_id: id,
      ptax_rate: rate
    })
  }
}

const genListings = () => {
  writer.pipe(fs.createWriteStream(`./data/listings.csv`));
  for (let id = 1; id <= 1000; id++) {
    writer.write({
      listing_id: id,
      home_price: faker.random.number({min: 250000, max: 20000000}),
      region_id: faker.random.number({min: 1, max: 50})
    })
  }

}

const genBuyers = () => {
writer.pipe(fs.createWriteStream(`./data/buyers.csv`));
  for (let id = 1; id <= 1000; id++) {
    let downPaymentRates = [0.00, 0.05, 0.10, 0.15, 0.20, 0.25, 0.30];
    writer.write({
      buyer_id: id,
      region_id: faker.random.number({min: 1, max: 50}),
      down_payment_rate: downPaymentRates[getRandomIntInclusive(0, 6)],
      loan_type_id: faker.random.number({min: 1, max: 4}),
      interest_rate_id: faker.random.number({min: 1, max: 4}),
      property_tax_rate_id: faker.random.number({min: 1, max: 50})
    })
  }
}

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max-min + 1)) + min;
}

// genLoanType();
// genInterestRate();
// genPropertyTax();
// genListings();
// genBuyers();
