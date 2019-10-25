import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorButton from "../error-button";
import ErrorBoundary from "../error-boundary";
import SwapiService from "../../services/swapi";
import Row from "../row";
import "./app.css";
import { PersonList, PlanetList, StarshipList, PersonDetails, PlanetDetails, StarshipDetails } from "../sw-components";

export default class App extends Component {
    state = {
        showRandomPlanet: true
    };
    swapi = new SwapiService();
    toggleRandomPlanet = () => {
        this.setState(({ showRandomPlanet }) => {
            return {
                showRandomPlanet: !showRandomPlanet
            };
        });
    };

    componentDidMount() {
        this.swapi.getAllPeopleRandom().then((ps) => console.log("random people :", ps));
        this.swapi.getAllPlanetsRandom().then((ps) => console.log("random planets :", ps));
        this.swapi.getAllStarshipsRandom().then((ps) => console.log("random starships :", ps));
    }

    render() {
        const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;
        const { getPerson, getStarship, getPersonImageUrl, getStarshipImageUrl } = this.swapi;

        return (
            <ErrorBoundary>
                <div className="container">
                    <Header />

                    <Row left={<PersonList onItemSelected={this.onItemSelected} />} right={PersonDetails(62)} />
                    <Row left={<PlanetList onItemSelected={this.onItemSelected} />} right={PlanetDetails(16)} />
                    <Row left={<StarshipList onItemSelected={this.onItemSelected} />} right={StarshipDetails(12)} />

                    {/* {planet} */}

                    {/* <button className="toggle-planet btn btn-warning btn-lg" onClick={this.toggleRandomPlanet}>
                    Toggle Random Planet
                </button>
                <ErrorButton /> 
                    
                 <PeoplePage />*/}
                </div>
            </ErrorBoundary>
        );
    }
}
