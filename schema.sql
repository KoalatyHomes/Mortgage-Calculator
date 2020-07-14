CREATE TABLE listings (
  listing_id SERIAL PRIMARY KEY,
  home_price INTEGER NOT NULL,
  region_id SMALLINT NOT NULL
);


CREATE TABLE loan (
  loan_id SERIAL PRIMARY KEY,
  loan_type VARCHAR(30) NOT NULL
);

CREATE TABLE interest_rate (
  interest_id SERIAL PRIMARY KEY,
  interest_rate FLOAT NOT NULL
);

CREATE TABLE property_tax (
  property_tax_id SERIAL PRIMARY KEY,
  ptax_rate FLOAT NOT NULL
);

CREATE TABLE buyers (
  buyer_id SERIAL PRIMARY KEY,
  listing_id SMALLINT NOT NULL REFERENCES listings(listing_id),
  down_payment_rate FLOAT NOT NULL,
  loan_type_id SMALLINT NOT NULL REFERENCES loan(loan_id),
  interest_rate_id SMALLINT NOT NULL REFERENCES interest_rate(interest_id),
  property_tax_rate_id SMALLINT NOT NULL REFERENCES property_tax(property_tax_id)
);