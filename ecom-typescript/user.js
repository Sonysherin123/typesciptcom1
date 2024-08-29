"use strict";
// user.ts
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = exports.Customer = exports.User = void 0;
// Base class for users
var User = /** @class */ (function () {
    function User(name, email) {
        this.name = name;
        this.email = email;
    }
    User.prototype.displayInfo = function () {
        console.log("Name: ".concat(this.name, ", Email: ").concat(this.email));
    };
    return User;
}());
exports.User = User;
// Customer class inherits from User
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer(name, email, customerId) {
        var _this = _super.call(this, name, email) || this; // Call base class constructor
        _this.customerId = customerId;
        return _this;
    }
    Customer.prototype.placeOrder = function (order) {
        console.log("".concat(this.name, " placed an order with ID: ").concat(order.orderId));
    };
    return Customer;
}(User));
exports.Customer = Customer;
// Admin class inherits from User
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(name, email, adminId) {
        var _this = _super.call(this, name, email) || this;
        _this.adminId = adminId;
        return _this;
    }
    Admin.prototype.manageProduct = function (product) {
        console.log("".concat(this.name, " is managing product: ").concat(product.name));
    };
    return Admin;
}(User));
exports.Admin = Admin;
