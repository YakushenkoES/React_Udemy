import React, { Component } from "react";
import BookStoreService from "../../services/bookstore-service";
import { Route, Switch } from "react-router-dom";
import { HomePage, CartPage } from "../pages";
import ShopHeader from '../shop-header';
// import Spinner from "../spinner";
export default class App extends Component {
    state = {
        Error: false,
        bookstore: new BookStoreService()
    };
    render() {
        return (
            <main role="main" className="container">
                <ShopHeader/>
                {/* <Spinner/> */}
                <Switch>
                    <Route exact path="/" render={() => <HomePage />} />
                    <Route exact path="/cart" render={() => <CartPage />} />

                    <Route render={() => <h2>Page is not found</h2>} />
                </Switch>
            </main>
        );
    }
}
