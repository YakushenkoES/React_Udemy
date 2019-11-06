import React from "react";
import { compose, withBookstoreService, withData } from "../../hoc";

const Book = (props) => {
    if (!props.data) {
        return null;
    }
    const { title, author } = props.data;
    return (
        <div className="book">
            <div className="book__param">
                <span className="book__title">{title}</span>
                <span className="book__value">{author}</span>
            </div>
        </div>
    );
};

const mapMethodsToProps = (bookstore) => ({ getData: bookstore.getBook });

const ans = compose(withBookstoreService(mapMethodsToProps), withData)(Book);
export default ans;
