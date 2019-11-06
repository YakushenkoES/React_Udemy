import React from "react";
import BookList from "../book-list";
import ShoppingCartTable from '../shopping-cart-table';

export default class HomePage extends React.Component {
    render() {
        return (
            <div className="home-page">
                <BookList />
                <ShoppingCartTable/>
            </div>
        );
    }
}
