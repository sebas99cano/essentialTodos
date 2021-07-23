export const LOGIN_USER = '[todos] login';
export const LOGIN_USER_SUCCESS = '[todos] login success';
export const LOGIN_USER_FAILURE = '[todos] login failure';


export const loginUser = () => ({
    type: LOGIN_USER,
});

export const loginUserSuccess = user => ({
    type: LOGIN_USER_SUCCESS,
    payload: user,
});

export const loginUserFailure = error => ({
    type: LOGIN_USER_FAILURE,
    payload: error,
});


