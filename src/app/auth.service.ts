export class AuthService {

    // Track state of user login with the loggedIn property which is set to false initially
    loggedIn = false;

    // Check the state (logged in or not) - faked timeout that in real life would take to reach out to a server etc.
    isAuthenticated() {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.loggedIn)}, 800);
        });

        return promise;
    }

    login() {
        this.loggedIn = true;
    }

    logout() {
        this.loggedIn = false;
    }
}