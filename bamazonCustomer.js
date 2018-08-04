var mysql = require("mysql");
var inquirer = require("inquirer");

////////////////////////////////////////need to hide keys
require("dotenv").config();
var keys = require("./keys.js");
///////////////////////////////////////
var connection = mysql.createConnection({
  host: "localhost",

  port: 8889,

  user: "root",

  password: "root",
  database: "products_DB"
});

var productChosen;
var quantityOrdered;

connection.connect(function(err) {
    if (err) throw err;
    console.log("Welcome to Bamazon!\nPlease see our list of product offerings below.");
    console.log("=============================================================");
    displayInventory();
  });
  
function displayInventory() {
    var query = "SELECT item_id,product_name,price FROM products";
      connection.query(query, function(err, res) {
        for (var i = 0; i < res.length; i++) {
          console.log(
            "Item ID: " +
              res[i].item_id +
              " || Product: " +
              res[i].product_name +
              " || Price: " +
              res[i].price);
        }
        startInquirer();
      })
    }

  
  function startInquirer() {
    inquirer
      .prompt([
        {
            name: "choice",
            type: "input",
            message: "Please enter the item ID of the product you wish to purchase: ",
            validate: function(value) {
                if (isNaN(value) === false && parseInt(value) <= 10 && parseInt(value) > 0) {
                productChosen = parseInt(value);
                // console.log("\n Chosen input: " + productChosen);
                return true;
                // selectQuantity();
                }
                else {
                console.log("\nSorry, that is not a valid item ID.");
                return false;
                }
            }
        },

        {
            name: "quantity",
            type: "input",
            message: "How many would you like to purchase?",
            validate: function(value) {
                if (isNaN(value) === false) {
                quantityOrdered = parseInt(value);
                // console.log("\n Quantity ordered: " + quantityOrdered);
                return true;
                }
                else {
                console.log("\nPlease enter a valid quanity.");
                return false;
              }
            }
        }
    ])
      .then(function(answer) {
        connection.query("SELECT * FROM products WHERE ?", { item_id: productChosen }, function(err, res) {
            console.log(res);
            if (quantityOrdered > res[0].stock_quantity) {
                console.log("Insufficient quantity! Sorry, your order cannot be completed.")
                console.log("We have " + res[0].stock_quantity + re[0].produce_name "in stock.")
                inquirer
                    .prompt([
                        name: "updateOrRestart",
                        type: "list",
                        message: "Would you like to update your order quantity or view the product listings?",
                        choices: "Update order quantity", "Return to product listing"
                    ])
                    .then(function(failedOrder) {
                        if (failedOrder.choices === "Update order quantity") {
                            //call update quantity function here

                        }
                        if (failedOrder.choices === "Return to product listing") {
                            displayInventory();
                        }
                    }

            }
            // else {
            //     connection.query (`UPDATE products SET
            //     //subtract quantity ordered from stock
            //     console.log("Your total is " + ${products[0].price} + "Thanks for using Bamazon!");
            // }
        })
     })
  }
