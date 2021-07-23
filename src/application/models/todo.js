export default class Todo {

    title = "";
    completed = false;

    constructor(title, completed) {
        this.title = title
        this.completed = completed
    }

    setTitle(title) {
        if(title !== null && title.length > 5 && title.length < 50){
            this.title = title;
        }
    }

    getTitle() {
        return this.title;
    }

    setCompleted(completed) {
        if(completed !== undefined && completed !== null){
            this.completed = completed;
        }
    }

    getCompleted() {
        return this.completed;
    }

}
