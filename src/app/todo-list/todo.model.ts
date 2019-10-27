export class TodoModel {
    public id : number;
    public label : string;
    public isDone : boolean;

    constructor(id : number, label: string){
        this.id = id;
        this.label = label;
        this.isDone = false;
    }
}

export type Todos = Array<TodoModel>;