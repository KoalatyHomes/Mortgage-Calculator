const mongoose = require('mongoose');

// Connect to mongo container to microservice contain
// mongoose.connect('mongodb://localhost/Mortgage', { useNewUrlParser: true })
const mortgage = 'mongodb://localhost/Mortgage';

mongoose.set('useUnifiedTopology', true);
const db = mongoose.connect(mortgage, { useNewUrlParser: true });

// Schema
const mortgageSchema = new mongoose.Schema({
  homeNum: Number,
  city: String,
  homePrice: Number,
  downPaymentRate: Number,
  homeIns: Number,
  interestRate: Number,
  propertyTaxRate: Number,
});

// Model
const Mortgage = mongoose.model('Mortgage', mortgageSchema);
module.exports = Mortgage;
