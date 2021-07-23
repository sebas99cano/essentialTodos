import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";
import Home from "../pages/Home";

import Header from "../layout/Header";
import Footer from "../layout/Footer";
import LogIn from "../pages/auth/LogIn";
import Todos from "../pages/Todos";

import {PublicRoute, PrivateRoute} from "./Routes";
import {auth} from "../../infrastructure/services/firebase/firebase";


const App = () => {

    console.log(auth().currentUser)

    return (
        <Router>
            <Header/>
            <Switch>
                <Route exact path={"/"} component={Home}/>
                <PublicRoute exact path={"/login"} component={LogIn} authenticated={false}/>
                <PrivateRoute exact path={"/todos"} component={Todos} authenticated={false}/>
                <Route path={"*"} component={NotFoundPage}/>
            </Switch>
            <Footer/>
        </Router>
    )
}

export default App;