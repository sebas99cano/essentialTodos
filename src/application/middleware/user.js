import {LOGIN_USER, loginUserFailure, loginUserSuccess} from "../actions/user";

const loginUserFlow = ({firebase}) => ({dispatch}) => next => async (action) => {
    next(action);
    if(action.type === LOGIN_USER){
        try{
            const user = await firebase.user.getUser();
            dispatch(loginUserSuccess(user));
        }catch (error){
            dispatch(loginUserFailure(error));
        }
    }
}

export default [
    loginUserFlow,
]