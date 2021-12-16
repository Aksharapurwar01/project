import {Vue} from 'vue-property-decorator';
import { Route } from 'vue-router';

export class signup extends Vue{
    async signup() {
        console.log("clicked")
       
        this.$router.push('/todo')
    }
    
}