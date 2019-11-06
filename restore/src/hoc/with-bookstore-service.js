import React from "react";
import { BookStoreServiceConsumer } from "../bookstore-service-context";
import ErrorBoundary from "../components/error-boundary";

const WithBookstoreService = (mapMethodsToProps) => (Wrapped) => {
    return (props) => (

        <ErrorBoundary>
            <BookStoreServiceConsumer>
                {(bookstoreService) => {
                    const serviseProps = mapMethodsToProps(bookstoreService);
                    return <Wrapped {...props} {...serviseProps} />;
                }}
            </BookStoreServiceConsumer>
        </ErrorBoundary>
    );
};

export default WithBookstoreService;
