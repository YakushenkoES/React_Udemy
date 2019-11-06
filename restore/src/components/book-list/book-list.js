import React from "react";
import BookListItem from "../book-list-item";
import "./book-list.css";
import { connect } from "react-redux";
import { withBookstoreService } from "../../hoc";
import compose from "../../utils/compose";

import { booksLoaded } from "../../actions";

class BookList extends React.Component {
    componentDidMount() {
        // 1. recieve data
        const { getData, booksLoaded } = this.props;
        const data = getData();

        // 2. dispath action to store
        booksLoaded(data);
    }

    render() {
        const { books } = this.props;
        if (!books) {
            return null;
        }

        return (
            <ul className="book-list">
                {books.map((_b) => {
                    return (
                        <li key={_b.id}>
                            <BookListItem book={_b} />
                        </li>
                    );
                })}
            </ul>
        );
    }
}

//export default compose(withBookstoreService(mapMethodsToProps), withData)(BookList);
const mapMethodsToProps = (bookstore) => ({ getData: bookstore.getBooks });

const mapStateToProps = ({ books }) => {
    return { books };
};

const mapDispatchToProps = {
    booksLoaded
};

export default compose(withBookstoreService(mapMethodsToProps), connect(mapStateToProps, mapDispatchToProps))(BookList);
