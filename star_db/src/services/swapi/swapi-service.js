export default class SwapiService {
    _apiBase = "https://swapi.co/api";

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url} recieved status is ${res.status}`);
        }
        const body = await res.json();
        return body;
    };

    // Person____________________________________
    getAllPeople = async () => {
        const res = await this.getResource("/people/");
        return res.results.slice(0, 6).map(this._transformPerson);
    };

    getPerson = async (id) => {
        const person = await this.getResource(`/people/${id}/`);
        return this._transformPerson(person);
    };

    _transformPerson = (p) => {
        return {
            id: this._extractId(p.url),
            name: p.name,
            gender: p.gender,
            birthYear: p.birth_year,
            eyeColor: p.eye_color
        };
    };
    // End. Person____________________________________
    _extractId = (url) => {
        const idRegExp = /\/([0-9]*)\/$/;
        const id = url.match(idRegExp)[1];
        return id;
    };

    // Planets_____________________________________________
    getAllPlanets = async () => {
        const res = await this.getResource("/planets/");
        return res.results.map(this._transformPlanet);
    };

    getPlanet = async (id) => {
        const res = await this.getResource(`/planets/${id}/`);
        return this._transformPlanet(res);
    };

    _transformPlanet = (planet) => {
        return {
            id: this._extractId(planet.url),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        };
    };
    // End. Planets______________________________________

    // Starships_________________________________________
    _transformShip = (ship) => {
        return {
            id: this._extractId(ship.url),
            name: ship.name,
            model: ship.model,
            manufacturer: ship.manufacturer,
            costInCredits: ship.costInCredits,
            length: ship.length,
            crew: ship.crew,
            passengers: ship.passengers,
            cargoCapacity: ship.cargoCapacity
        };
    };

    getAllStarships = async () => {
        const res = await this.getResource("/starships/");
        return res.results.map(this._transformShip);
    };

    getStarship = async (id) => {
        const ship = await this.getResource(`/starships/${id}/`);
        return this._transformShip(ship);
    };
    //End. Starships_________________________________________
}
