export class Account {
    id:number;
    balance:number;
    status:string;
    type:string;

    constructor(id?:number, balance?:number, status?:string, type?:string) {
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
    }
}