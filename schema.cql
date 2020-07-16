CREATE KEYSPACE IF NOT EXISTS listings WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 1};

USE listings;

DROP TABLE IF EXISTS mortgages_by_property;

CREATE TABLE mortgages_by_property (
  property_id int,
  street text,
  city text,
  mortgage int,
  home_price int,
  down_payment_rate float,
  interest_rate float,
  property_tax_rate float,
  home_insurance int,
  loan_type text,
  PRIMARY KEY (property_id, property_tax_rate)
);

DROP TABLE IF EXISTS mortgages_by_buyers;

CREATE TABLE mortgages_by_buyers (
  buyer_id int,
  name text,
  credit_score int,
  loan_type text,
  mortgage int,
  interest_rate float,
  PRIMARY KEY (buyer_id, loan_type)
);