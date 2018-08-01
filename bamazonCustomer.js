var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  port: 8889,

  user: "root",

  password: "root",
  database: "products_DB"
});

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
    };

  
  function startInquirer() {
    inquirer
      .prompt([
        {
            name: "itemID",
            type: "input",
            message: "Please enter the item ID of the product you wish to purchase: ",
            validate: function(value) {
                if (isNaN(value) === false && parseInt(value) <= 10 && parseInt(value) > 0) {
                return true;
                }
                else {
                console.log("\nSorry, that is not a valid item ID.")
                return false;
                }
            }
        },
        {
            name: "quantity",
            type: "input",
            message: "How many would you like to purchase?",
            validate: function(value) {
                if (isNaN(value)) {
                return true;
                }
                else {
                console.log("\nPlease enter a valid quanity.")
                return false;
              }
            }
        }
    ])
      .then(function(answer) {
        console.log("test")
      });
  }
  
