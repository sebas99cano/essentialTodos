import React from "react";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className="container text-center">
            <div className="row">
                <div className="col-md-3"/>
                <div className="col-md-6">
                    <br/><br/>
                    <h1 className="cover-heading mt-5 font-weight-bold">
                        Welcome to Todo App <i className="bi bi-check2-square"/>
                    </h1>
                    <h4 className={"color-black mt-5"}>
                        In this application you can see a large list of tasks which you can mark as completed or
                        incomplete, what are you waiting to enter
                    </h4>
                    <Link className=" mt-5 btn btn-primary px-4" to={"/login"}>Log In now</Link>
                    <br/><br/>
                </div>
            </div>
        </div>
    )
}

export default Home;