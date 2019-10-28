import React from "react";
import SwapiService from "../../services/swapi";
import ItemList from "./../item-list";
import { withData, withChildFunction } from "../../hoc-helpers";
import {SwapiServiceConsumer} from '../swapi-service-context';
const { getAllPeopleRandom, getAllPlanetsRandom, getAllStarshipsRandom } = new SwapiService();

const renderName = ({ name }) => {
    return <span>{name}</span>;
};
const renderModelAndName = ({model, name})=>{return (<span>{name} ({model})</span>)}

const PersonList = withData(withChildFunction(ItemList, renderName), getAllPeopleRandom);
const PlanetList = withData(withChildFunction(ItemList, renderName), getAllPlanetsRandom);
const StarshipList = withData(withChildFunction(ItemList, renderModelAndName), getAllStarshipsRandom);

export { PersonList, PlanetList, StarshipList };
