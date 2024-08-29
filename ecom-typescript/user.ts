import { Order } from './order';  
import { Product } from './product';  

// Base class for users
class User {
    constructor(public name: string, public email: string) {}

    displayInfo(): void {
        console.log(`Name: ${this.name}, Email: ${this.email}`);
    }
}

// Customer class inherits from User
class Customer extends User {
    constructor(name: string, email: string, public customerId: number) {
        super(name, email); // Call base class constructor
    }

    placeOrder(order: Order): void {
        console.log(`${this.name} placed an order with ID: ${order.orderId}`);
    }
}

// Admin class inherits from User
class Admin extends User {
    constructor(name: string, email: string, public adminId: number) {
        super(name, email);
    }

    manageProduct(product: Product): void {
        console.log(`${this.name} is managing product: ${product.name}`);
    }
}

export { User, Customer, Admin };
