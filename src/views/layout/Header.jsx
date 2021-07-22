import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to={"/"}>V-Game Blog <i className="bi bi-controller" /></Link>

                    <div className="navbar-nav">
                        <span className="navbar-text mr-3">Welcome</span>
                        <Link className="nav-item nav-link mr-3 btn btn-outline-secondary"
                              to={"/dashboard"}>Dashboard <i className="bi bi-clipboard"/></Link>
                        <Link className="nav-item nav-link mr-3 btn btn-outline-secondary"
                              to={"/"}>Home <i className="bi bi-star-half"/></Link>
                    </div>
            </div>
        </nav>
    )
}

export default Header;