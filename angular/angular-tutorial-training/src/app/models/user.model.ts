export interface Auth {
    email: string;
    password: string;
}

export class User implements Auth {
    public email: string;
    public password: string;
    public fullName: string;
    public address: string;
    
}