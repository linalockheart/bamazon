DROP DATABASE IF EXISTS products_DB;

CREATE DATABASE products_DB;

USE products_DB;

CREATE TABLE products (
  item_id INTEGER NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(30) NOT NULL,
  department_name VARCHAR(30) NOT NULL,
  price DECIMAL(5,2) NOT NULL,
  stock_quantity INTEGER (10) NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cat Eye Sunglasses", "Accessories", 16.00, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Crescent Moon Necklace", "Accessories", 27.00, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Butterfly Hair Clip", "Accessories", 8.00, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Heart Shaped Hoop Earrings", "Accessories", 12.00, 6);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Vintage Polka Dot Dress", "Apparel", 68.00, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Black Denim Overalls", "Apparel", 59.00, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Linen Shirt Dress", "Apparel", 44.00, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Indigo Shibori Duster", "Apparel", 128.00, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Black Heeled Boots", "Footwear", 98.00, 9);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Ballerina Flats", "Footwear", 54.00, 10);

SELECT * FROM products