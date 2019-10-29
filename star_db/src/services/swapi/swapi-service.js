export default class SwapiService {
    _apiBase = "https://swapi.co/api";
    _imageBase = "https://starwars-visualguide.com/assets/img";
    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url} recieved status is ${res.status}`);
        }
        const body = await res.json();
        return body;
    };
    getAllRandom = async (get, NTotal, N) => {
        const ids=[];
        for(let i = 0; i< N ;i++){
            ids.push(Math.round(Math.random()*NTotal));
        }
        const res  = await Promise.allSettled(ids.map(id=>get(id)));
        return res.map(r=>r.status==="fulfilled"?r.value:null);
    };
    _extractId = (url) => {
        const idRegExp = /\/([0-9]*)\/$/;
        const id = url.match(idRegExp)[1];
        return id;
    };

    // Person____________________________________
    getAllPeople = async () => {
        const res = await this.getResource("/people/");
        return res.results.slice(0, 6).map(this._transformPerson);
    };
    getAllPeopleRandom = async () =>{
        const res = await this.getResource("/people/");
        return await this.getAllRandom(this.getPerson,res.count, 6);
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
    getPersonImageUrl = ({ id }) => {
        return this._imageBase + `/characters/${id}.jpg`;
    };

    // End. Person____________________________________

    

    // Planets_____________________________________________
    getAllPlanets = async () => {
        const res = await this.getResource("/planets/");
        return res.results.map(this._transformPlanet);
    };
    getAllPlanetsRandom = async () =>{
        const res = await this.getResource("/planets/");
        return await this.getAllRandom(this.getPlanet,res.count, 6);
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
    getPlanetImageUrl = ({ id }) => {
        return this._imageBase + `/planets/${id}.jpg`;
    };
    // End. Planets______________________________________

    // Starships_________________________________________
    _transformShip = (ship) => {
        return {
            id: this._extractId(ship.url),
            name: ship.name,
            model: ship.model,
            manufacturer: ship.manufacturer,
            costInCredits: ship.cost_in_credits,
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
    getAllStarshipsRandom = async () =>{
        const res = await this.getResource("/starships/");
        return await this.getAllRandom(this.getStarship,res.count, 6);
    };


    getStarship = async (id) => {
        const ship = await this.getResource(`/starships/${id}/`);
        return this._transformShip(ship);
    };
    getStarshipImageUrl = ({ id }) => {
        return this._imageBase + `//starships/${id}.jpg`;
    };
    //End. Starships_________________________________________


    // Vehicle____________________________________
    getAllVehicles = async () => {
        const res = await this.getResource("/vehicles/");
        return res.results.slice(0, 6).map(this._transformVehicle);
    };
    getAllVehiclesRandom = async () =>{
        const res = await this.getResource("/vehicles/");
        return await this.getAllRandom(this.getVehicle,res.count, 6);
    };
    

    getVehicle = async (id) => {
        const vehicle = await this.getResource(`/vehicles/${id}/`);
        return this._transformVehicle(vehicle);
    };

    _transformVehicle = (p) => {
        return {
            id: this._extractId(p.url),
            name: p.name,
            model: p.model,
            costInCredits: p.cost_in_credits,
        };
    };
    getVehicleImageUrl = ({ id }) => {
        return this._imageBase + `/vehicles/${id}.jpg`;
    };

    // End. Vehicle____________________________________
}
