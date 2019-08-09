export class Discount {

    constructor(_id = '', percentage = 0,reason = '',){
        this._id = _id;
        this.percentage = percentage;
        this.reason = reason;
        

    }
    _id: string;
    percentage: number;
    reason: string;
}
