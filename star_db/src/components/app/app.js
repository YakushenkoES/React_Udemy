import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";

import SwapiService from "../../services/swapi";
import DummySwapiService from "../../services/dummy-swapi-service";
import { SwapiServiceProvider } from "../swapi-service-context";

import {PeoplePage, PlanetsPage, StarshipsPage} from '../pages';
import "./app.css";

export default class App extends Component {
    state = {
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
        return (
                <SwapiServiceProvider value={this.state.swapi}>
                    <div className="container">
                        <Header onServiceChange={this.onServiceChange} />
                        <RandomPlanet updateInterval_ms={10000}/>

                        <PeoplePage/>
                        <PlanetsPage/>
                        <StarshipsPage/>
                        
                    </div>
                </SwapiServiceProvider>
        );
    }
}
