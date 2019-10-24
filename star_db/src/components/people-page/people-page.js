import React, { Component } from "react";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import ErrorBoundary from "../error-boundary";
import SwapiService from "../../services/swapi";
import Row from "../row";
import "./people-page.css";

export default class PeoplePage extends Component {
    swapi = new SwapiService();
    state = {
        selectedPerson: 4
    };

    onItemSelected = (id) => {
        this.setState({
            selectedPerson: id
        });
    };

    render() {
        const itemList = (
            <ItemList onItemSelected={this.onItemSelected} getData={this.swapi.getAllPeople}>
                {(i) => `${i.name} (${i.gender} ${i.birthYear})`}
            </ItemList>
        );
        const personDetails = (
            <ErrorBoundary>
                <PersonDetails personId={this.state.selectedPerson} />
            </ErrorBoundary>
        );

        return <Row left={itemList} right={personDetails} />;
    }
}
