CREATE DATABASE pernproduct;

CREATE TABLE product(
  product_id integer NOT NULL,
  product_name character varying(50) NOT NULL,
  product_price money NOT NULL,
  product_description character varying(100) NOT NULL,
  PRIMARY KEY (product_id)
);