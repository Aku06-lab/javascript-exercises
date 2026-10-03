class ToDo {
    constructor(title, description, duedate, priority,notes, completed){
        this.title = title;
        this.description = description;
        this.duedate = duedate;
        this.priority = priority;
        this.notes = notes;
        this.checkList = [];
        this.completed =completed;
    }

}

export {ToDo};