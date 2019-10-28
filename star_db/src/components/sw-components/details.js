import React from "react";
import { SwapiServiceConsumer } from "../swapi-service-context";
import ItemDetails, { Record } from "../item-details";
import ErrorBoundary from "../error-boundary";

const PersonDetails = (id) => {
    return (
        <ErrorBoundary>
            <SwapiServiceConsumer>
                {({ getPerson, getPersonImageUrl }) => {
                    return (
                        <ItemDetails itemId={id} getData={getPerson} getImageUrl={getPersonImageUrl}>
                            <Record field={"gender"} label={"Gender"} />
                            <Record field={"birthYear"} label={"Birth Year"} />
                            <Record field={"eyeColor"} label={"Eye Color"} />
                        </ItemDetails>
                    );
                }}
            </SwapiServiceConsumer>
        </ErrorBoundary>
    );
};
const PlanetDetails = (id) => {
    return (
        <ErrorBoundary>
            <SwapiServiceConsumer>
                {({ getPlanet, getPlanetImageUrl }) => {
                    return (
                        <ItemDetails itemId={id} getData={getPlanet} getImageUrl={getPlanetImageUrl}>
                            <Record field={"name"} label={"Name"} />
                            <Record field={"population"} label={"Population"} />
                            <Record field={"diameter"} label={"Diameter"} />
                        </ItemDetails>
                    );
                }}
            </SwapiServiceConsumer>
        </ErrorBoundary>
    );
};

const StarshipDetails = (id) => {
    return (
        <ErrorBoundary>
            <SwapiServiceConsumer>
                {({ getStarship, getStarshipImageUrl }) => {
                    return (
                        <ItemDetails itemId={id} getData={getStarship} getImageUrl={getStarshipImageUrl}>
                            <Record field={"model"} label={"Model"} />
                            <Record field={"length"} label={"Length"} />
                            <Record field={"manufacturer"} label={"Manufacturer"} />
                            <Record field={"costInCredits"} label={"Cost"} />
                            <Record field={"crew"} label={"Crew"} />
                        </ItemDetails>
                    );
                }}
            </SwapiServiceConsumer>
        </ErrorBoundary>
    );
};

export { PersonDetails, PlanetDetails, StarshipDetails };
