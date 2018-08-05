<h1> What is Bamazon? </h1>
<p>An Amazon inspired storefront utilizing MySQL that runs in Terminal. Inquirer is used to interact with the customer. Product, inventory, and pricing information is stored in a MySQL table. I used a separate keys.js file to hide the MySQL connection information, so you would need to provide your own server connection if you wanted to clone and run this program yourself.</p>

<h2>Required NPM Packages</h2>
<ul>
  <li>Inquirer</li>
  <li>MySQL</li>
</ul>

<h2>Technologies Employed</h2>
<ul>
  <li>JavaScript</li>
  <li>node.js</li>
  <li>MySQL</li>
  <li>MAMP</li>
  <li>Terminal</li>
 </ul>
  
<h2>How does it work?</h2>
<p>When you start Bamazon, you will see the shop's inventory pulled from the products table in MySQL. For the customer view, each product is displayed with an item id, a product name, and the price. Inquirer prompts you to enter the item id of the product you want to purchase. This field will only accept numbers 1-10, as there are only 10 products in the store. Once you have selected your product, inquirer will prompt you for how many you would like to purchase. If there is enough inventory to fulfil your order, your total will be displayed. If not, you will see how many of your chosen product we have in stock so you can either lower your order quantity or select another item.

<h2>Demo</h2>
