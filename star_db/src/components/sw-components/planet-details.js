import React from "react";
import ItemDetails, { Record } from "../item-details";
import { withSwapiService } from "../../hoc-helpers";

const PlanetDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field={"name"} label={"Name"} />
            <Record field={"population"} label={"Population"} />
            <Record field={"diameter"} label={"Diameter"} />
        </ItemDetails>
    );
};
const mapMethodsToProps = (swapi) => {
    return {
        getData: swapi.getPlanet,
        getImageUrl: swapi.getPlanetImageUrl,
        page:"/planets"
    };
};
export default withSwapiService(mapMethodsToProps)(PlanetDetails);
