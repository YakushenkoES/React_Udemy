import React from 'react';
import ItemDetails, { Record } from "../item-details";
import { withSwapiService } from "../../hoc-helpers";

const VehiclesDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field={"name"} label={"Name"} />
            <Record field={"model"} label={"Model"} />
            <Record field={"costInCredits"} label={"Cost"} />
        </ItemDetails>
    );
};
const mapMethodsToProps = (swapi) => {
    return {
        getData: swapi.getVehicle,
        getImageUrl: swapi.getVehicleImageUrl,
        page:"/vehicles"
    };
};
export default withSwapiService(mapMethodsToProps)(VehiclesDetails);