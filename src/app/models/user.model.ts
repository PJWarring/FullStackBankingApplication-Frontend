export class User {
    id:number;
    username:string;
    password:string;
    firstname:string;
    lastname:string;
    email:string;
    role:string;

    constructor(id?:number, username?:string, password?:string, firstname?:string, lastname?:string, email?:string, role?:string) {
        if (id) {
            this.id = id;
        } else {
            this.id = 0;
        }
        if (username) {
            this.username = username;
        } else {
            this.username = "";
        }
        if (password) {
            this.password = password;
        } else {
            this.password = "";
        }
        if (firstname) {
            this.firstname = firstname;
        } else {
            this.firstname = "";
        }
        if (lastname) {
            this.lastname = lastname;
        } else {
            this.lastname = "";
        }
        if (email) {
            this.email = email;
        } else {
            this.email = "";
        }
        if (role) {
            this.role = role;
        } else {
            this.role = "USER";
        }
    }
}