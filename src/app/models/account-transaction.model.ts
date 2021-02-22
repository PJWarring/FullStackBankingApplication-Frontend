import { Account } from "./account.model";

export class AccountTransaction {
    srcId:number;
    destId:number;
    method:string;
    amount:number;

    constructor(srcId?:number, destId?:number, method?:string, amount?:number) {
        if (srcId) {
            this.srcId = srcId;
        }
        if (destId) {
            this.destId = destId;
        }
        if (method) {
            this.method = method;
        }
        if (amount) {
            this.amount = amount;
        }
    }
}
