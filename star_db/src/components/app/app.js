import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";

import SwapiService from "../../services/swapi";
import DummySwapiService from "../../services/dummy-swapi-service";
import { SwapiServiceProvider } from "../swapi-service-context";

import {
    PeoplePage,
    PlanetsPage,
    StarshipsPage,
    StarshipsPage2,
    VehiclePage,
    PeoplePage2,
    SecretPage,
    LoginPage
} from "../pages";
import "./app.css";

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { StarshipDetails, PersonDetails, PlanetDetails, VehicleDetails } from "../sw-components";

export default class App extends Component {
    state = {
        swapi: new SwapiService(),
        isLoggedIn: false
    };

    onLogin = () => {
        this.setState({
            isLoggedIn: true
        });
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
        const { isLoggedIn } = this.state;
        return (
            <SwapiServiceProvider value={this.state.swapi}>
                <Router>
                    <div className="container">
                        <Header onServiceChange={this.onServiceChange} />
                        <RandomPlanet updateInterval_ms={3000} />
                        <Switch>
                            <Route path="/" render={() => <h2>Welcome to Star DB</h2>} exact />
                            <Route path="/people/:id?" exact component={PeoplePage2} />

                            <Route path="/planets" exact component={PlanetsPage} />
                            <Route
                                path="/planets/:id"
                                render={({ match, location, history }) => {
                                    return <PlanetDetails itemId={match.params.id} />;
                                }}
                            />
                            <Route path="/vehicles" exact component={VehiclePage} />
                            <Route
                                path="/vehicles/:id"
                                render={({ match, location, history }) => {
                                    return <VehicleDetails itemId={match.params.id} />;
                                }}
                            />
                            {/* <Route path="/starships" exact component={StarshipsPage} /> */}
                            <Route path="/starships" exact component={StarshipsPage2} />
                            <Route
                                path="/starships/:id"
                                render={({ match, location, history }) => {
                                    return <StarshipDetails itemId={match.params.id} />;
                                }}
                            />
                            <Route
                                path="/login"
                                render={() => <LoginPage isLoggedIn={isLoggedIn} onLogin={this.onLogin} />}
                            />
                            <Route path="/secret" render={() => <SecretPage isLoggedIn={isLoggedIn} />} />

                            <Route render={
                                ()=> <h2>Page is not found</h2>
                            }/>
                        </Switch>
                    </div>
                </Router>
            </SwapiServiceProvider>
        );
    }
}
