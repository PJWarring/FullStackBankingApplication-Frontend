export class Account {
    id:number;
    balance:number;
    status:string;
    type:string;
    ownerid:number;

    constructor(id?:number, balance?:number, status?:string, type?:string, ownerid?:number) {
        if (id) {
            this.id = id;
        } else {
            this.id = 0;
        }
        if (balance) {
            this.balance = balance;
        } else {
            this.balance = 0;
        }
        if (status) {
            this.status = status;
        } else {
            this.status = "";
        }
        if (type) {
            this.type = type;
        } else {
            this.type = "";
        }
        if (ownerid) {
            this.ownerid= ownerid;
        } else {
            this.ownerid= 0;
        }
    }

    //This method may not be nessecary - TODO: remove this if it is not used
    public setownerid(ownerid:number):void {
        this.ownerid = ownerid;
    }
}