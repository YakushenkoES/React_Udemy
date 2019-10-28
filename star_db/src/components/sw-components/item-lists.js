import React from "react";
import ItemList from "./../item-list";
import { withData, withChildFunction, withSwapiService, compose } from "../../hoc-helpers";

const renderName = ({ name }) => {
    return <span>{name}</span>;
};
const renderModelAndName = ({ model, name }) => {
    return (
        <span>
            {name} ({model})
        </span>
    );
};

const mapPersonMethodsToProps = (swapi) => {
    return {
        getData: swapi.getAllPeopleRandom
    };
};
const PersonList = compose(withSwapiService(mapPersonMethodsToProps), withData, withChildFunction(renderName))(
    ItemList
);

const mapPlanetsMethodsToProps = (swapi) => {
    return {
        getData: swapi.getAllPlanetsRandom
    };
};
const PlanetList = compose(withSwapiService(mapPlanetsMethodsToProps), withData, withChildFunction(renderName))(
    ItemList
);

const mapStarshipsMethodsToProps = (swapi) => {
    return {
        getData: swapi.getAllStarshipsRandom
    };
};
const StarshipList = compose(
    withSwapiService(mapStarshipsMethodsToProps),
    withData,
    withChildFunction(renderModelAndName)
)(ItemList);
export { PersonList, PlanetList, StarshipList };
