const fs = require('fs');
const faker = require('faker');
const csvWriter = require('csv-write-stream');

const genListings = (start, end, filenum) => {
  const writer = csvWriter();
  writer.pipe(fs.createWriteStream(`./csv/listings${filenum}.csv`));
  let loanTypes = ["10-year fixed", "15-year fixed", "20-year fixed", "30-year fixed"];
  let downPaymentRates = [0.00, 0.05, 0.10, 0.15, 0.20, 0.25, 0.30];
  let interestRates = [2.83, 2.74, 3.10, 3.23];
  let propertyTaxRate = faker.random.number({min: 0.50, max: 2.95, precision: 0.01});
  propertyTaxRate = propertyTaxRate.toFixed(2);
  let mortgage = [2500, 3700, 5100, 6800];

  for (let id = start; id <= end; id++) {
    let listingObject = {
      property_id: id,
      street: faker.address.streetAddress(),
      city: faker.address.city(),
      home_price: faker.random.number({min: 250000, max: 20000000}),
      down_payment_rate: downPaymentRates[getRandomIntInclusive(0, 5)],
      interest_rate: interestRates[getRandomIntInclusive(0, 3)],
      property_tax_rate: propertyTaxRate,
      home_insurance: faker.random.number({min: 100, max:500}),
      loan_type: loanTypes[getRandomIntInclusive(0, 3)]
    }

      for (let i = 0; i <= 3; i++) {
        listingObject['mortgage'] = mortgage[i];
        writer.write(listingObject);
      }
  }
}

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max-min + 1)) + min;
}

genListings(1, 2500000, 1);
genListings(2500001, 5000000, 2);
genListings(5000001, 7500000, 3);
genListings(7500001, 10000000, 4);

