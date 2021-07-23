import React from "react";
import {Link} from "react-router-dom";
import {logout} from "../../infrastructure/services/firebase/auth";

const Header = () => {

    const logoutUser = () => {
        logout().then(r => {
            console.log("session closed")
        }).catch(error=>{
            console.log(error)
            console.log("error")
        })
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <Link className="navbar-brand" to={"/"}>Todo App <i className="bi bi-check2-square" /></Link>
                    <div className="navbar-nav">
                        <Link className="nav-item mr-3 btn btn-outline-light px-4" to={"/"}>
                            Home <i className="bi bi-house"/>
                        </Link>
                        <Link className="nav-item mr-3 btn btn-outline-light px-4" to={"/todos"}>
                            Todos <i className="bi bi-list-task"/>
                        </Link>
                        <Link className="nav-item mr-3 btn btn-outline-light px-4" to={"/login"}>
                            Log In <i className="bi bi-box-arrow-right"/>
                        </Link>
                        <button className="nav-item mr-3 btn btn-outline-light px-4" onClick={logoutUser}>
                            Log Out <i className="bi bi-door-open-fill"/>
                        </button>
                    </div>
            </div>
        </nav>
    )
}

export default Header;