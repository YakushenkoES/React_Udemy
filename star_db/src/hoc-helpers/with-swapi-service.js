import React from "react";
import ErrorBoundary from "../components/error-boundary";
import { SwapiServiceConsumer } from "../components/swapi-service-context";

const withSwapiService = mapMethodsToProps=>Wrapped => {
    return (props) => {
        return (
            <ErrorBoundary>
                <SwapiServiceConsumer>
                    {(swapiService) => {
                        const serviceProps = mapMethodsToProps(swapiService)
                        return <Wrapped {...props} {...serviceProps} />;
                    }}
                </SwapiServiceConsumer>
            </ErrorBoundary>
        );
    };
};
export default withSwapiService;
