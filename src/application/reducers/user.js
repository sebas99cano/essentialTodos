import {LOGIN_USER_SUCCESS} from "../actions/user";

const initialState = {
    user: [],
    error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER_SUCCESS:
            return { user: action.payload, error: null };
        default:
            return state;
    }
}

export default reducer;