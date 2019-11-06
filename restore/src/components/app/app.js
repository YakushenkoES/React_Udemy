import React, { Component } from "react";
import ErrorBoundary from "../error-boundary";
import ErrorButton from "../error-button";
import bookStoreService from "../../services/bookstore-service";
import { BookStoreServiceProvider } from "../../bookstore-service-context";
import Book from '../book';
import Spinner from '../spinner';
export default class App extends Component {
    state = {
        Error: false,
        bookstore: new bookStoreService()
    };
    render() {
        return (
            <BookStoreServiceProvider value={this.state.bookstore}>
                <ErrorBoundary>
                    <div>
                        <ErrorButton />
                        <p>Jesus has risen!</p>
                        <Book id={0}/>
                        <Book id={1}/>
                        <Book id={2}/>
                        <Spinner/>
                    </div>
                </ErrorBoundary>
            </BookStoreServiceProvider>
        );
    }
}
