const fs = require('fs');
const faker = require('faker');
const csvWriter = require('csv-write-stream');

const genListings = (start, end, filenum) => {
  const writer = csvWriter();
  writer.pipe(fs.createWriteStream(`./data/listings${filenum}.csv`));
  for (let id = start; id <= end; id++) {
    writer.write({
      listing_id: id,
      home_price: faker.random.number({min: 250000, max: 20000000}),
      region_id: faker.random.number({min: 1, max: 50})
    })
  }
}

// genListings(1, 10000000, 1);
// genListings(10000001, 20000000, 2);
// genListings(20000001, 30000000, 3);
// genListings(30000001, 40000000, 4);
// genListings(40000001, 50000000, 5);
// genListings(50000001, 60000000, 6);
// genListings(60000001, 70000000, 7);
// genListings(70000001, 80000000, 8);