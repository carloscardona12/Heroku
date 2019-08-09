export class Client {

    constructor(_id = '', nameC='', credit = 0){
        this._id = _id;
        this.nameC = nameC;
        this.credit = credit;
    }

    _id: string;
    nameC: string;
    credit: number;
}
