let idcouter =2;
export class Task {
    id:string;
    title: string;
    description: string;
    assigned:string[];
    completed: boolean;

    constructor(){
       this.completed = false;
       this.id =idcouter.toString();
       idcouter++;
    }
}