import React, {useEffect} from "react";
import {signInWithGoogle} from "../../../infrastructure/services/firebase/auth";
import {bindActionCreators} from "redux";
import {loginUser} from "../../../application/actions/user";
import {connect} from "react-redux";
import {getUser} from "../../../application/selectors/user";


const LogIn = ({loginUser,user}) => {

    const loginWithGoogleUser = (event) => {
        event.preventDefault();
        signInWithGoogle().then(r => {
            loginUser();
        }).catch(error => {
            console.log(error)
        })
    }

    useEffect(()=>{
        console.log(user)
    },[user])

    return (
        <div className="container text-center">
            <div className="row">
                <div className={"col-md-3"}/>
                <div className="col-md-6">
                    <div className="card my-5">
                        <div className="card-body">
                            <h5 className="card-title text-center">log in with a social network</h5>
                            <hr className="my-4"/>
                            <button className="btn btn-lg btn-danger btn-block" onClick={loginWithGoogleUser}>
                                <i className="bi bi-google"/> Log in with Google
                            </button>
                            <hr className="my-4"/>
                            <button className="btn btn-lg btn-primary btn-block" onClick={loginWithGoogleUser}>
                                <i className="bi bi-facebook"/> Log in with Facebook
                            </button>
                            <hr className="my-4"/>
                            <button className="btn btn-lg btn-dark btn-block" onClick={loginWithGoogleUser}>
                                <i className="bi bi-github"/> Log in with GitHub
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({loginUser}, dispatch);
}

const mapStateToProps = (state) => {
    return {
        user: getUser(state),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);