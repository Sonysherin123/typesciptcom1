import { Product } from './product';
import { Customer } from './user';
class Order{
    public products: Product[] = [];

    constructor(public orderId : number, public customer: Customer){}

    addProduct(product: Product): void{
        this.products.push(product);
    }
    getTotal(): number{
        return this.products.reduce((total, product)=> total + product.price, 0);
    }
}

export { Order };