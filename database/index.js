const { Client } = require('pg')

const client = new Client({
  user: 'postgres',
  password: 'lasers',
  host: '54.219.99.141',
  database: 'mortgage',
  port: 5432
})

client.connect()
console.log('Connected');

module.exports = client;
