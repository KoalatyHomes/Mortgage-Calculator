const mongoose = require('mongoose');
const faker = require('faker');
const Mortgage = require('./Mortgage.js');

const homes = [];

const generateHome = (n) => {
  for (let i = 0; i < n; i += 1) {
    const mortgageObj = {
      homeNum: i + 1,
      city: faker.address.county(),
      homePrice: Number(faker.commerce.price(3000000, 4000000).slice(0, -3)),
      downPaymentRate: Number(faker.random.number(10, 15)),
      homeIns: faker.random.number({ min: 50, max: 80 }),
      interestRate: Number(faker.finance.amount(2, 4, 2)),
      propertyTaxRate: 0.01,
    };
    homes.push(mortgageObj);
  }
};

generateHome(100);


const insertHomeData = () => {
  Mortgage.create(homes)
    .then(() => mongoose.disconnect());
};

insertHomeData();

// run seeding - npm run db:setup
