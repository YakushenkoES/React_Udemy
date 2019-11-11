import React from "react";
import BookListItem from "../book-list-item";
import "./book-list.css";
import { connect } from "react-redux";
import { withBookstoreService } from "../../hoc";
import compose from "../../utils/compose";

import { fetchBooks,bookAddedToCart } from "../../actions";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

import {bindActionCreators} from 'redux';

const BookList = ({ books, onAddedToCart }) => {
    return (
        <ul className="book-list">
            {books.map((_b) => {
                return (
                    <li key={_b.id}>
                        <BookListItem book={_b} onAddedToCart={() => onAddedToCart(_b.id)} />
                    </li>
                );
            })}
        </ul>
    );
};
class BookListContainer extends React.Component {
    componentDidMount() {
        const { fetchBooks } = this.props;
        fetchBooks();
    }

    render() {
        const { books, loading, error, onAddedToCart } = this.props;
        return error ? (
            <ErrorIndicator />
        ) : loading ? (
            <Spinner />
        ) : (
            <BookList books={books} onAddedToCart={onAddedToCart} />
        );
    }
}

const mapMethodsToProps = (bookstore) => ({ getData: bookstore.getBooks });

const mapStateToProps = ({ bookList:{books, loading, error} }) => {
    return { books, loading, error };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({
        //fetchBooks: fetchBooks(dispatch, ownProps.getData),
        fetchBooks: fetchBooks(ownProps.getData),
        onAddedToCart:bookAddedToCart 
    }, dispatch);
};

export default compose(withBookstoreService(mapMethodsToProps), connect(mapStateToProps, mapDispatchToProps))(
    BookListContainer
);
