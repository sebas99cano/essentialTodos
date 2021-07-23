import React from 'react';
import {Link} from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className={"text-center mt-5"}>
            <h1>Uh Oh! Page not found! 404</h1>
            <Link className=" mt-5 btn btn-primary" to={"/"}>Back to home</Link>
        </div>
    );
};

export default NotFoundPage;