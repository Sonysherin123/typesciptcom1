import {Customer, Admin} from './user';
import { Product } from './product';
import { Order } from './order';
import { PercentageDiscount, FlatDiscount } from './discount';

const customer1 = new Customer("John Doe", "john@example.com", 101);
const admin1 = new Admin("Alice Admin", "alice@admin.com", 1);

const product1 = new Product(1, "Laptop", 1000);
const product2 = new Product(2, "Phone", 500);

admin1.manageProduct(product1);

const order1 = new Order(201, customer1);
order1.addProduct(product1);
order1.addProduct(product2);

console.log("Order Total:", order1.getTotal());

const percentageDiscount = new PercentageDiscount(10); // 10% discount
const flatDiscount = new FlatDiscount(50); // Flat $50 discount

console.log("Total after percentage discount:", percentageDiscount.applyDiscount(order1.getTotal()));
console.log("Total after flat discount:", flatDiscount.applyDiscount(order1.getTotal()));

customer1.placeOrder(order1);