"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
var Order = /** @class */ (function () {
    function Order(orderId, customer) {
        this.orderId = orderId;
        this.customer = customer;
        this.products = [];
    }
    Order.prototype.addProduct = function (product) {
        this.products.push(product);
    };
    Order.prototype.getTotal = function () {
        return this.products.reduce(function (total, product) { return total + product.price; }, 0);
    };
    return Order;
}());
exports.Order = Order;
