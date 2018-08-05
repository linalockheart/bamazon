
var inquirer = require("inquirer");
var connection = require("./keys.js");

var productChosen;
var quantityOrdered;

connection.connect(function(err) {
    if (err) throw err;
    displayInventory();
  });
  
function displayInventory() {

  console.log("Welcome to Bamazon!\nPlease see our list of product offerings below.");
  console.log("=============================================================");

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
                return true;
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

            if (quantityOrdered > res[0].stock_quantity) {
                console.log("Insufficient quantity! Sorry, your order cannot be completed.");
                console.log("We only have " + res[0].stock_quantity + " " + res[0].product_name + " in stock.");
                console.log("Please update your order quantity or select another product.");
                console.log("=============================================================");
                displayInventory();
                }

            else {

                console.log("Your total is $" + res[0].price * quantityOrdered + ". Thanks for using Bamazon!");
                console.log("=============================================================");

                connection.query ("UPDATE products SET ? WHERE ?", [
                    {
                    stock_quantity: res[0].stock_quantity - quantityOrdered
                    },
                    {
                    item_id: res[0].item_id
                    }
                ],
                function(err, restart) {
                    if (err) throw err;
                    else {
                      displayInventory();
                    }
                  }
                )
            }
     })
  })
}
