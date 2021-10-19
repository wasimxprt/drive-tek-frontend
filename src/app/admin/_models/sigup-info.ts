export class SignUpInfo {
    fname: string;
    lname: string;
    email: string;
    role: string[];
    password: string;
 
    constructor(fname: string, lname: string, email: string, password: string) {
        this.fname = fname;
        this.lname = lname;
        this.email = email;
        this.password = password;
        this.role = ['user'];
    }
}
