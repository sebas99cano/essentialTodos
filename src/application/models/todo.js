export default class Todo {

    title = "";
    completed = false;

    constructor(title, completed) {
        this.title = title
        this.completed = completed
    }

    setTitle(title) {
        this.title = title;
    }

    getTitle() {
        return this.title;
    }

    setCompleted(completed) {
        this.completed = completed;
    }

    getCompleted() {
        return this.completed;
    }

}
