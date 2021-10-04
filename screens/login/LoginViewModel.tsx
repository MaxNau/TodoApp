
export default class LoginViewModel {
    private username: string = '';
    private password: string = '';
    
    public userNameChange(e: any) {
        this.username = e.target.value;
    }

    public passwordChange(e: any) {
        this.password = e.target.value;
    }

    public login() {
        // todo
    }

    public forgotPassword() {
        // todo
    }

    public signUp() {

    }

    public getUsername(): string {
        return this.username;
    }

    public getPassword(): string {
        return this.password;
    }
}