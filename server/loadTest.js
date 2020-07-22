import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  // vus: 1500,
  // duration: '30s'
  stages: [
    { duration: '1s', target: 500 },
    { duration: '10s', target: 1000 },
    { duration: '10s', target: 2000 },
    { duration: '1m', target: 2500 }
  ]
};

export default function() {
  const listingId = Math.floor(Math.random() * (80000000)) + 1;
  http.get(`http://localhost:3000/api/homes/${listingId}`);
  // http.get(`http://localhost:3000/api/homes/1`);
  sleep(1);
}