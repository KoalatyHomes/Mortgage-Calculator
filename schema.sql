CREATE TABLE listings (
  listing_id SERIAL PRIMARY KEY,
  home_price INTEGER NOT NULL,
  home_address VARCHAR(128) NOT NULL,
  home_zip VARCHAR(5) NOT NULL
);

CREATE TABLE loan (
  loan_id SERIAL PRIMARY KEY,
  loan_type VARCHAR(30) NOT NULL
);

CREATE TABLE interest_rate (
  interest_id SERIAL PRIMARY KEY,
  interest_rate FLOAT NOT NULL
);

CREATE TABLE buyers (
  buyer_id SERIAL PRIMARY KEY,
  listing_id INT NOT NULL REFERENCES listings(listing_id),
  down_payment_rate FLOAT NOT NULL,
  loan_type_id SMALLINT NOT NULL REFERENCES loan(loan_id),
  interest_rate_id SMALLINT NOT NULL REFERENCES interest_rate(interest_id)
);