import { Vue, Component } from 'vue-property-decorator';
import axios from 'axios';

@Component
export class ToDo extends Vue {

    public newTask: string = ''

    public tasksList: Array<any> = []

    public isCompleted: boolean = false;
    public msg: string = "message"

    public body: HTMLElement = document.body;

    public im: HTMLImageElement = document.getElementById("display") as HTMLImageElement;

    public isLoading:any= true;
  









addTask() {
    console.log("clicked add button")
    // const title = document.getElementById("title") as HTMLInputElement;
    // console.log(title.value)
    // const result = axios.post(" http://localhost:3000/users", {
    //     title: title.value
    // })
    // console.log("result----->", result)
    let obj = {
        title: this.newTask,
        completed: this.isCompleted

    }
    this.tasksList.push({ ...obj });
    //   this.$forceUpdate()
    //   this.newTask = '';
    //}
    console.log(this.tasksList)
    localStorage.setItem('task', JSON.stringify(this.tasksList))


}



clearAll() {
    console.log("clear all clicked")
    if (this.tasksList.length > 0) {
        this.tasksList = []
    }
    console.log("this.tasks.length-->", this.tasksList.length)
}

display() {
    console.log("task Completed");
    // alert("Task Completed");
    this.isLoading = !this.isLoading;
}

deleteTask(index: number) {
    console.log("delete task called")
    // this.msg=''
    this.tasksList.splice(index, 1);

}

clearCompleted() {
    console.log("clearCompleted called")
    this.tasksList = this.itemsTodo()

    // this.tasksList.filter(this.isCompleted)
    console.log("clear completed")

}

itemsTodo() {
    return this.tasksList.filter(task => !task.completed)
}

edit(){
    console.log("completed task");
    this.tasksList = this.itemsToadd()
    
}

itemsToadd(){

    return this.tasksList.filter(task => task.completed)

}



// inProgress() {
//     return !this.isCompletedd();
// }

// isCompletedd() {
//     return this.isCompleted
// }


beforeMount() {
    const data: any = localStorage.getItem('task')
    this.tasksList = JSON.parse(data)
    console.log("tasklist--->", this.tasksList, "and data------->", data)
}

created() {
    const data: any = localStorage.getItem('task')
    this.tasksList = JSON.parse(data)
    console.log(" created tasklist--->", this.tasksList, "and data------->", data)
}

}