import React from "react";
import {
    Switch,
    Route, Redirect,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Products from "./Pages/Products/Products";
import Product from "./Pages/Product/Product";
import Cart from "./Pages/Cart/Cart";
import Inscription from "./Pages/Inscription/Inscription";


export default function MainRouter() {
    let isActive = JSON.parse(localStorage.getItem("isActive"));

    return (
        <div>

            <Switch>
                <Route exact path="/login" >
                    <Login />
                </Route>
                    <Route exact path="/">
                    {!isActive ? <Redirect to="/login" /> : <Home   />}
                    </Route>
                <Route path="/products">
                    <Products />
                </Route>

                <Route path="/home" >
                    <Home />
                 
                </Route>

                <Route path="/cart">
                    <Cart />
                </Route>

                <Route path="/product/:id">
                    <Product />
                </Route>

                <Route path="/Sign-Up">
                    <Inscription />
                </Route>

            </Switch></div>
    )
}