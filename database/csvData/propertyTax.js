const fs = require('fs');
const faker = require('faker');
const csvWriter = require('csv-write-stream');
let writer = csvWriter();

const genPropertyTax = () => {
  writer.pipe(fs.createWriteStream(`./data/propertyTax.csv`));
  for (let id = 1; id <= 50; id++) {
    let rate = faker.random.number({min: 0.50, max: 2.95, precision: 0.01});
    rate = rate.toFixed(2);
    writer.write({
      property_tax_id: id,
      ptax_rate: rate
    })
  }
}

genPropertyTax();