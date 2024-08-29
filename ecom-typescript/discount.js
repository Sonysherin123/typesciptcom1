"use strict";
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
exports.FlatDiscount = exports.PercentageDiscount = exports.Discount = void 0;
var Discount = /** @class */ (function () {
    function Discount() {
    }
    return Discount;
}());
exports.Discount = Discount;
var PercentageDiscount = /** @class */ (function (_super) {
    __extends(PercentageDiscount, _super);
    function PercentageDiscount(percentage) {
        var _this = _super.call(this) || this;
        _this.percentage = percentage;
        return _this;
    }
    PercentageDiscount.prototype.applyDiscount = function (total) {
        return total - (total * this.percentage) / 100;
    };
    return PercentageDiscount;
}(Discount));
exports.PercentageDiscount = PercentageDiscount;
var FlatDiscount = /** @class */ (function (_super) {
    __extends(FlatDiscount, _super);
    function FlatDiscount(amount) {
        var _this = _super.call(this) || this;
        _this.amount = amount;
        return _this;
    }
    FlatDiscount.prototype.applyDiscount = function (total) {
        return total - this.amount;
    };
    return FlatDiscount;
}(Discount));
exports.FlatDiscount = FlatDiscount;
