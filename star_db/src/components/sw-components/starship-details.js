import React from "react";
import ItemDetails, { Record } from "../item-details";
import {withSwapiService} from "../../hoc-helpers";

const StarshipDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field={"model"} label={"Model"} />
            <Record field={"length"} label={"Length"} />
            <Record field={"manufacturer"} label={"Manufacturer"} />
            <Record field={"costInCredits"} label={"Cost"} />
            <Record field={"crew"} label={"Crew"} />
        </ItemDetails>
    );
};
const mapMethodsToProps = swapi =>{
    return{
        getData: swapi.getStarship,
        getImageUrl: swapi.getStarshipImageUrl
    };

};
export default withSwapiService(mapMethodsToProps)(StarshipDetails);
