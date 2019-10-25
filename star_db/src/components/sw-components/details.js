import React from "react";
import SwapiService from "../../services/swapi";
import ItemDetails, { Record } from "../item-details";

const {
    getPerson,
    getPlanet,
    getStarship,
    getPersonImageUrl,
    getPlanetImageUrl,
    getStarshipImageUrl
} = new SwapiService();




const PersonDetails = (id) => {
    return (
        <ItemDetails itemId={id} getData={getPerson} getImageUrl={getPersonImageUrl}>
            <Record field={"gender"} label={"Gender"} />
            <Record field={"birthYear"} label={"Birth Year"} />
            <Record field={"eyeColor"} label={"Eye Color"} />
        </ItemDetails>
    );
};
const PlanetDetails = (id) => {
    return (
        <ItemDetails itemId={id} getData={getPlanet} getImageUrl={getPlanetImageUrl}>
            <Record field={"name"} label={"Name"} />
            <Record field={"population"} label={"Population"} />
            <Record field={"diameter"} label={"Diameter"} />
        </ItemDetails>
    );
};

const StarshipDetails = (id) => {
    return (
        <ItemDetails itemId={id} getData={getStarship} getImageUrl={getStarshipImageUrl}>
            <Record field={"model"} label={"Model"} />
            <Record field={"length"} label={"Length"} />
            <Record field={"manufacturer"} label={"Manufacturer"} />
            <Record field={"costInCredits"} label={"Cost"} />
            <Record field={"crew"} label={"Crew"} />
        </ItemDetails>
    );
};

export { PersonDetails, PlanetDetails, StarshipDetails };
