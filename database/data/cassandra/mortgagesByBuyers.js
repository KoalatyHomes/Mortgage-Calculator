const fs = require('fs');
const faker = require('faker');
const csvWriter = require('csv-write-stream');

const genBuyers = (start, end, filenum) => {
  const writer = csvWriter();
  writer.pipe(fs.createWriteStream(`./csv/buyers${filenum}.csv`));

  let loanTypes = ["10-year fixed", "15-year fixed", "20-year fixed", "30-year fixed"];
  let interestRates = [2.83, 2.74, 3.10, 3.23];

  for (let id = start; id <= end; id++) {
    writer.write({
      buyer_id: id,
      name: faker.name.firstName() + ' ' + faker.name.lastName(),
      credit_score: faker.random.number({min: 300, max: 850}),
      loan_type: loanTypes[getRandomIntInclusive(0, 3)],
      mortgage: faker.random.number({min: 2000, max: 10000}),
      interest_rate: interestRates[getRandomIntInclusive(0, 3)]
    })
  }
}

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max-min + 1)) + min;
}

genBuyers(1, 10000000, 1);
genBuyers(10000001, 20000000, 2);
genBuyers(20000001, 30000000, 3);
// genBuyers(30000001, 40000000, 4);
// genBuyers(40000001, 50000000, 5);