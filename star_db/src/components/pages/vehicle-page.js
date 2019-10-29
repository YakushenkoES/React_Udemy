import React, { Component } from "react";
import Row from "../row";
import { VehicleList, VehicleDetails } from "../sw-components";

export default class VehiclesPage extends Component {
    state = {
        selectedItem: null
    };

    onItemSelected = (selectedItem) => {
        this.setState({ selectedItem });
    };
    render() {
        const { selectedItem } = this.state;
        return (
            <Row
                left={<VehicleList onItemSelected={this.onItemSelected} />}
                right={<VehicleDetails itemId={selectedItem} />}
            />
        );
    }
}
