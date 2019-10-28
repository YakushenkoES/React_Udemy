import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import Row from "../row";

import SwapiService from "../../services/swapi";
import DummySwapiService from "../../services/dummy-swapi-service";
import { SwapiServiceProvider } from "../swapi-service-context";

import { PersonList, PlanetList, StarshipList, PersonDetails, PlanetDetails, StarshipDetails } from "../sw-components";

import "./app.css";

export default class App extends Component {
    state = {
        showRandomPlanet: true,
        swapi: new SwapiService()
    };

    onServiceChange = () => {
        this.setState(({ swapi }) => {
            const Service = swapi instanceof SwapiService ? DummySwapiService : SwapiService;
            return {
                swapi: new Service()
            };
        });
    };

    render() {
        const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;
        const ind = 22;
        return (
                <SwapiServiceProvider value={this.state.swapi}>
                    <div className="container">
                        <Header onServiceChange={this.onServiceChange} />
                        {planet}

                        <Row
                            left={<PersonList onItemSelected={this.onItemSelected} />}
                            right={<PersonDetails itemId={ind} />}
                        />
                        <Row
                            left={<PlanetList onItemSelected={this.onItemSelected} />}
                            right={<PlanetDetails itemId={ind} />}
                        />
                        <Row
                            left={<StarshipList onItemSelected={this.onItemSelected} />}
                            right={<StarshipDetails itemId={ind} />}
                        />
                    </div>
                </SwapiServiceProvider>
        );
    }
}
