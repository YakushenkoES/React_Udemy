import React, { Component } from "react";
import SwapiService from "../../services/swapi";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import PropTypes from "prop-types";
import "./random-planet.css";

const PlanetView = ({ planet = {} }) => {
    const { id, name, population, rotationPeriod, diameter } = planet;
    return (
        <React.Fragment>
            <img
                className="planet-image"
                src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                alt="planet"
            />

            <div>
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population</span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter</span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
};

export default class RandomPlanet extends Component {
    static defaultProps = { updateInterval_ms: 5000 };
    static propTypes = {
        updateInterval_ms: PropTypes.number // PropTypes.number.isRequired
    };

    swapiService = new SwapiService();
    state = {
        planet: undefined,
        loading: true,
        error: false
    };

    componentDidMount() {
        const { updateInterval_ms } = this.props;
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, updateInterval_ms);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false,
            error: false
        });
    };
    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        });
    };

    updatePlanet = () => {
        const id = Math.floor(Math.random() * 61);
        this.swapiService.getPlanet(id).then(this.onPlanetLoaded).catch(this.onError);
    };

    render() {
        const { planet, loading, error } = this.state;

        return (
            <div className="random-planet jumbotron rounded">
                {error ? <ErrorIndicator /> : loading ? <Spinner /> : <PlanetView planet={planet} />}
            </div>
        );
    }
}

//RandomPlanet.defaultProps={updateInterval_ms: 5000};
