import React, {useEffect, useState} from 'react';
import Products from "./components/Products/Products";
import * as api from "./api/index";
import {Container} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {getAllProducts} from "./actions/products";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Auth from "./components/Auth/Auth";

const App = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProducts())
    }, []);
    return (
        <BrowserRouter>
            <Container maxWidth={"lg"}>
                <Navbar/>
                <Switch>
                    <Route path={"/"} exact component={Products}/>
                    <Route path={"/auth"} component={Auth}/>
                </Switch>
            </Container>
        </BrowserRouter>
    )
}

export default App;
