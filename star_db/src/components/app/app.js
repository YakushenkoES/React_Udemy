import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorButton from "../error-button";
import ErrorBoundary from "../error-boundary";
import SwapiService from "../../services/swapi";
import DummySwapiService from '../../services/dummy-swapi-service';

import Row from "../row";
import "./app.css";
import { PersonList, PlanetList, StarshipList, PersonDetails, PlanetDetails, StarshipDetails } from "../sw-components";
import {SwapiServiceProvider} from '../swapi-service-context';

export default class App extends Component {
    state = {
        showRandomPlanet: true
    };
    swapi = new DummySwapiService()//;new SwapiService();
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

        return (
            <ErrorBoundary>
                <SwapiServiceProvider value={this.swapi}>
                <div className="container">
                    <Header />

                    <Row left={<PersonList onItemSelected={this.onItemSelected} />} right={PersonDetails(63)} />
                    <Row left={<PlanetList onItemSelected={this.onItemSelected} />} right={PlanetDetails(17)} />
                    <Row left={<StarshipList onItemSelected={this.onItemSelected} />} right={StarshipDetails(13)} />

                    {/* {planet} */}

                    {/* <button className="toggle-planet btn btn-warning btn-lg" onClick={this.toggleRandomPlanet}>
                    Toggle Random Planet
                </button>
                <ErrorButton /> 
                    
                 <PeoplePage />*/}
                </div>
                </SwapiServiceProvider>
            </ErrorBoundary>
        );
    }
}
