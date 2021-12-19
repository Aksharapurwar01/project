import { Vue } from 'vue-property-decorator';
import { Route } from 'vue-router';




type User = {
    email: string,
    password: string
}

export class signup extends Vue {

    constructor() {
        super()
        console.log("constructor loaded")
    }

    public user: User = {
        email: "",
        password: ""

    };


    public error: string[] = []



  

    signup(event:any) {
        console.log("clicked")
        if (!this.user.email) {
            console.log("email is requireed")
           
            this.error.push("First Name is required.")
        }
        if (!this.user.password ) {
            console.log("password is requireed")
           
            this.error.push("Password is required.")

        }
        if (this.user.email && this.user.password) {

            let firstNameDoc = document.getElementById("firstName") as any
            console.log("firstNameDoc >> ", firstNameDoc.value);
            
            console.log("user >> ", this.user)

        }
     
    }


}