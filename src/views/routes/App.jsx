import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import LogIn from "../pages/auth/LogIn";

const App = () =>{
    return(
        <Router>
            <Header/>
            <Switch>
                <Route exact path={"/"} component={Home}/>
                <Route exact path={"/dashboard"} component={Dashboard}/>
                <Route exact path={"/login"} component={LogIn}/>
                <Route path={"*"} component={NotFoundPage}/>
            </Switch>
            <Footer/>
        </Router>
    )
}

export default App;