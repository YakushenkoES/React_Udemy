import React, { Component } from "react";
import Row from "../row";
import { StarshipList, StarshipDetails } from "../sw-components";
import { withRouter } from "react-router-dom";

export default class StarshipsPage extends Component {
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
                left={<StarshipList onItemSelected={this.onItemSelected} />}
                right={<StarshipDetails itemId={selectedItem} />}
            />
        );
    }
}

const StarshipsPage2 = ({ history }) => {
    return <StarshipList onItemSelected={(itemId) => history.push(itemId)} />;
};
const SP2r = withRouter(StarshipsPage2);
export { SP2r as StarshipsPage2 };
