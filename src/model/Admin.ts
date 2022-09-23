import User from "./User";

class Admin extends User {

    constructor() {
        super("Admin")
    }

    public sayHello() {
        console.log("Hello");
    }
    
}

export default Admin