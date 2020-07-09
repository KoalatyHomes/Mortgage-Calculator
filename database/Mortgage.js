const mongoose = require('mongoose');

// Connect to mongo container to microservice contain
// mongoose.connect('mongodb://172.17.0.2/trulia', { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.connect('mongodb://database/trulia', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect('mongodb://localhost/Mortgage')

mongoose.Promise = global.Promise;
const db = mongoose.connection; // the connection

db.once('open', () => {
  console.log(`Connected to MongoDB on ${db.host}:${db.port}`);
});

// Schema
const mortgageSchema = new mongoose.Schema({
  homeNum: String,
  city: String,
  mortgagePrice: Number,
  downPaymentRate: Number,
  homeIns: Number,
  interestRate: Number,
  propertyTaxRate: Number,
});

// Model
const Mortgage = mongoose.model('Mortgage', mortgageSchema);
module.exports = Mortgage;
