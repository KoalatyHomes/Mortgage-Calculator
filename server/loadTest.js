import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  stages: [
    { duration: '1s', target: 1000 },
    { duration: '1m', target: 2000 },
  ],
};

export default function() {
  const listingId = Math.floor(Math.random() * (80000000)) + 1;
  http.get(`http://localhost:3000/api/homes/${listingId}`);
  sleep(1);
}