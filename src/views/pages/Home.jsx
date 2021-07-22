import React from "react";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className=" container text-center ">
            <div className="row">
                <div className="col-md-3"/>
                <div className="col-md-6">
                    <br/><br/>
                    <h1 className="cover-heading mt-5 font-weight-bold">Welcome to V-Game Blog <i
                        className="bi bi-controller" /></h1>
                    <h4 className={"color-black mt-5"}>What are you waiting for to be part of this wonderful community, don't wait any longer and
                        register to start interacting with other users</h4>
                    <Link className=" mt-5 btn btn-dark" to={"/signup"}>Register now</Link>
                    <br/><br/>
                </div>
            </div>
        </div>
    )
}

export default Home;