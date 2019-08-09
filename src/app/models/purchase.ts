export class Purchase {

    constructor(_id = '',name = '', supplier = '',product = '', amount = 0){
        this._id = _id;
        this.name = name;
        this.supplier = supplier;
        this.product = product;
        this.amount = amount;

    }
    _id: string;
    name: string;
    supplier: string;
    product: string;
    amount: number;
}
