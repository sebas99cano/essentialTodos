import { LOAD_TODOS_SUCCESS, SET_TODOS } from "../actions/todos";
import Todo from "../models/todo";

const initialState = {
    allTodos: [],
    error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_TODOS_SUCCESS:
            let tod = new Todo("title",false);
            console.log(tod)
            return { allTodos: action.payload, error: null };
        case SET_TODOS:
            return { allTodos: action.payload, error: null };
        default:
            return state;
    }
}

export default reducer;