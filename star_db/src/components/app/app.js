import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import PeoplePage from "../people-page";
import PlanetPage from "../planet-page";
import StarshipPage from "../starship-page";
import ItemList from "../item-list";
import ErrorButton from "../error-button";
import ErrorBoundary from "../error-boundary";
import SwapiService from "../../services/swapi";

import "./app.css";

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
 

    render() {

        const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;
        return (
            <ErrorBoundary>
                <div className="container">
                <Header />
                {planet}

                <button className="toggle-planet btn btn-warning btn-lg" onClick={this.toggleRandomPlanet}>
                    Toggle Random Planet
                </button>
                <ErrorButton />

                <PeoplePage />

                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList
                            onItemSelected={this.onItemSelected}
                            getData={this.swapi.getAllPlanets}
                            
                        >
                            {
                                (i) => (
                                     <span>{i.name} <button>!</button></span>
                                )
                            }
                        </ItemList>
                    </div>
                    <div className="col-md-6">
                    </div>
                </div>
                <StarshipPage />
            </div>
            </ErrorBoundary>
            
        );
    }
}
