class AuthenticatableUser {
    userName;
    email;
    password;
    _isLoggedIn;
    constructor(userName, email, password, _isLoggedIn = false) {
        this.userName = userName;
        this.email = email;
        this.password = password;
        this._isLoggedIn = _isLoggedIn;
    }
    login(email, password) {
        if (this.email === email && this.password === password) {
            this._isLoggedIn = true;
            console.log(`${this.email} has logged in.`);
            return true;
        }
        return false;
    }
    logout() {
        this._isLoggedIn = false;
        console.log(`${this.email} has logged out.`);
    }
}
let esme = new AuthenticatableUser('granny', 'esme@lancre.gov', 'testpass');
esme.login('esme@lancre.gov', 'testpass');
esme.logout();
let user;
// Interface as object type
user = {
    email: 'gytha@lancre.gov',
    password: 'testpass',
    login(email, password) {
        return this.email === email && this.password === password;
    },
    logout() {
        console.log(`${this.email} has logged out.`);
    }
};
export {};
//# sourceMappingURL=interfaces.js.map