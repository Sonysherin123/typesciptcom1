"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = require("./user");
var product_1 = require("./product");
var order_1 = require("./order");
var discount_1 = require("./discount");
var customer1 = new user_1.Customer("John Doe", "john@example.com", 101);
var admin1 = new user_1.Admin("Alice Admin", "alice@admin.com", 1);
var product1 = new product_1.Product(1, "Laptop", 1000);
var product2 = new product_1.Product(2, "Phone", 500);
admin1.manageProduct(product1);
var order1 = new order_1.Order(201, customer1);
order1.addProduct(product1);
order1.addProduct(product2);
console.log("Order Total:", order1.getTotal());
var percentageDiscount = new discount_1.PercentageDiscount(10); // 10% discount
var flatDiscount = new discount_1.FlatDiscount(50); // Flat $50 discount
console.log("Total after percentage discount:", percentageDiscount.applyDiscount(order1.getTotal()));
console.log("Total after flat discount:", flatDiscount.applyDiscount(order1.getTotal()));
customer1.placeOrder(order1);
