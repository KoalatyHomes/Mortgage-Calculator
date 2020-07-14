const fs = require('fs');
const faker = require('faker');
const csvWriter = require('csv-write-stream');

const genBuyers = (start, end, filenum) => {
  const writer = csvWriter();
  writer.pipe(fs.createWriteStream(`./data/buyers${filenum}.csv`));
  let downPaymentRates = [0.00, 0.05, 0.10, 0.15, 0.20, 0.25, 0.30];
  for (let id = start; id <= end; id++) {
    writer.write({
      buyer_id: id,
      region_id: faker.random.number({min: 1, max: 50}),
      down_payment_rate: downPaymentRates[getRandomIntInclusive(0, 6)],
      loan_type_id: faker.random.number({min: 1, max: 4}),
      interest_rate_id: faker.random.number({min: 1, max: 4}),
      property_tax_rate_id: faker.random.number({min: 1, max: 50})
    });
  }
}


const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max-min + 1)) + min;
}

// genBuyers(1, 10000000, 1);
// genBuyers(10000001, 20000000, 2);
// genBuyers(20000001, 30000000, 3);
// genBuyers(30000001, 40000000, 4);
// genBuyers(40000001, 50000000, 5);
// genBuyers(50000001, 60000000, 6);
// genBuyers(60000001, 70000000, 7);
// genBuyers(70000001, 80000000, 8);