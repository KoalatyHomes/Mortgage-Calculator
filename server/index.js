require('newrelic')
const path = require('path');
const cluster = require('cluster');
var numCPUs = require('os').cpus().length;
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const db = require('../database/index.js')

if (cluster.isMaster) {
  for (var i = 0; i < numCPUs; i++) {
      // Create a worker
      cluster.fork();
  }
} else {
  const port = 3333;
  const app = express();

  // Fix cross origin
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.static('./public'));

  app.get('/api/homes/:id', (req, res) => {
    const { id } = req.params;
    const { homeZip } = req.body;
    let queryStr = `SELECT home_price FROM listings WHERE listing_id=${id}`;
    db.query(queryStr, (err, results) => {
      if (err) {
        console.log(err.stack);
      } else {
        res.status(200).send(results.rows);
      }
    });
  })

  app.post('/api/homes', (req, res) => {
    var currentRowCount = 0;
    db.query(`SELECT MAX(listing_id) from listings`, (err, result) => {
      if (err) {
        console.log(err.stack);
      } else {
        nextRowCount = result.rows[0].max + 1;
        const { homePrice, homeAddress, homeZip } = req.body;
        let queryStr = `INSERT INTO listings(listing_id, home_price, home_address, home_zip) VALUES (${nextRowCount}, ${homePrice}, '${homeAddress}', '${homeZip}')`;
        db.query(queryStr, (err, results) => {
          if (err) {
            console.log(err.stack);
          } else {
            res.status(201).send(results.rows);
          }
        })
      }
    });
  })

  app.patch('/api/homes/:id', (req, res) => {
    const { id } = req.params;
    const { newPrice } = req.body;
    let queryStr = `UPDATE listings SET home_price=${newPrice} WHERE listing_id=${id}`;
    db.query(queryStr, (err, results) =>  {
      if (err) {
        console.log(err.stack);
      } else {
        res.status(201).send(results.rows);
      }
    });
  })


  app.listen(port, () => console.log(`\nlistening at 54.241.113.24:${port}`));
}
