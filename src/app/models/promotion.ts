export class Promotion {
        constructor(_id = '', discount = 0,reason = '',){
            this._id = _id;
            this.discount = discount;
            this.reason = reason;
            
    
        }
        _id: string;
        discount: number;
        reason: string;
    }
    



