abstract class Discount{
    abstract applyDiscount(total : number): number;
}

class PercentageDiscount extends Discount{
    constructor(private percentage : number){
        super();
    }

    applyDiscount(total: number): number {
        return total - (total * this.percentage)/100;
    }
}

class FlatDiscount extends Discount {
    constructor(private amount: number){
        super();
    }

    applyDiscount(total: number): number {
        return total - this.amount;
    }
}

export { Discount, PercentageDiscount, FlatDiscount};