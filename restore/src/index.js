import React from "react";
import ReactDOM from "react-dom";
import { BookStoreServiceProvider } from "./bookstore-service-context";
import BookStoreService from "./services/bookstore-service";

import App from "./components/app";
import ErrorBoundary from "./components/error-boundary";

import store from "./store";
import { Provider } from "react-redux";

import {BrowserRouter } from 'react-router-dom';

const bookstoreService = new BookStoreService();
ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <BookStoreServiceProvider value={bookstoreService}>
                <BrowserRouter> 
                    <App />

                </BrowserRouter>
            </BookStoreServiceProvider>
        </ErrorBoundary>
    </Provider>,
    document.getElementById("root")
);
