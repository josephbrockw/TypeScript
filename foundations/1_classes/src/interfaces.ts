interface Authenticatable {
    email: string;
    password: string;

    login(email: string, password: string): boolean;
    logout(): void;
}

class AuthenticatableUser implements Authenticatable {
    constructor(
        public userName: string,
        public email: string, 
        public password: string,
        private _isLoggedIn: boolean = false
    ) {}

    login(email: string, password: string): boolean {
        if (this.email === email && this.password === password) {
            this._isLoggedIn = true;
            console.log(`${this.email} has logged in.`);
            return true;
        }
        return false;
    }

    logout(): void {
        this._isLoggedIn = false;
        console.log(`${this.email} has logged out.`);
    }
}

let esme = new AuthenticatableUser('granny', 'esme@lancre.gov', 'testpass');
esme.login('esme@lancre.gov', 'testpass');
esme.logout();

let user: Authenticatable;

// Interface as object type
user = {
    email: 'gytha@lancre.gov',
    password: 'testpass',
    login(email: string, password: string) {
        return this.email === email && this.password === password;
    },
    logout() {
        console.log(`${this.email} has logged out.`);
    }
};

