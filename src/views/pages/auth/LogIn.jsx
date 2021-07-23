import React from "react";
import {signInWithGoogle} from "../../../infrastructure/services/firebase/auth";
import {auth} from "../../../infrastructure/services/firebase/firebase";

const LogIn = () => {

    const loginWithGoogleUser = (event) => {
        event.preventDefault();
        signInWithGoogle().then(r => {
            console.log(auth().currentUser)
        }).catch(error => {
            console.log(error)
        })
    }

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

export default LogIn;