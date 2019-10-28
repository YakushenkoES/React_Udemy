import React from "react";
import SwapiService from "../../services/swapi";
import ItemList from "./../item-list";
import { withData, withChildFunction, withSwapiService } from "../../hoc-helpers";

const { getAllPeopleRandom, getAllPlanetsRandom, getAllStarshipsRandom } = new SwapiService();

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
const PersonList = withSwapiService(withData(withChildFunction(ItemList, renderName)), mapPersonMethodsToProps);

const mapPlanetsMethodsToProps = (swapi) => {
    return {
        getData: swapi.getAllPlanetsRandom
    };
};
const PlanetList = withSwapiService(withData(withChildFunction(ItemList, renderName)), mapPlanetsMethodsToProps);

const mapStarshipsMethodsToProps = (swapi) => {
    return {
        getData: swapi.getAllStarshipsRandom
    };
};
const StarshipList = withSwapiService(
    withData(withChildFunction(ItemList, renderModelAndName)),
    mapStarshipsMethodsToProps
);

export { PersonList, PlanetList, StarshipList };
