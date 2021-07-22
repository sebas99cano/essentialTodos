import React from "react";
import {signInWithGoogle} from "../../../infrastructure/services/firebase/auth";

const LogIn = () => {

    const loginWithGoogleUser = (event) => {
        event.preventDefault();
        signInWithGoogle().then(r => {
            console.log(r)
            console.log("success")
        }).catch(error => {
            console.log(error)
        })
    }

    return (
        <div className="container text-center">
            <div className="row">
                <div className={"col-md-3"}/>
                <div className="col-md-6">

                    <button className="btn btn-danger mr-2" type="button" onClick={loginWithGoogleUser}>
                        Google <i className="bi bi-google"/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LogIn;