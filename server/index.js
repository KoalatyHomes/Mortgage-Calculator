/* eslint-disable no-console */
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();

const port = 3333;
const Mortgage = require('../database/Mortgage.js'); // the model

// Fix cross origin
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./public'));

app.get('/api/homes/:id', (req, res) => {
  Mortgage.find({"homeNum" : req.params.id}, (err, results) => {
    if (err) {
      res.status(400).send('Error fetching data');
    } else {
      res.status(200).send(results);
    }
  });
});

app.post('/api/homes', (req, res) => {
  Mortgage.create(
    {
      homeNum: req.body.homeNum,
      city: req.body.city,
      homePrice: req.body.mortgagePrice,
      downPaymentRate: req.body.downPaymentRate,
      homeIns: req.body.homeIns,
      interestRate: req.body.interestRate,
      propertyTaxRate: req.body.propertyTaxRate,
    }, (err, results) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(201).send(results);
      }
    })
})

app.patch('/api/homes/:id', (req, res) => {
  Mortgage.updateOne(
    {"homeNum": req.params.id},
      { $set: {"homePrice": req.body.homePrice, "downPaymentRate": req.body.downPaymentRate, "interestRate": req.body.interestRate}}, (err, results) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(204).send(results);
      }
    }
  )
})

app.delete('/api/homes/:id', (req, res) => {
  Mortgage.deleteOne({"homeNum":req.params.id}, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(204).send(results);
    }
  })
})

app.listen(port, () => console.log(`\nlistening at http://localhost:${port}`));
