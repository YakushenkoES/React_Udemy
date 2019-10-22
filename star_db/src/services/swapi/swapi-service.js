export default class SwapiService {

    _apiBase = "https://swapi.co/api";

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` + ` recieved status is ${res.status}`);
        }
        const body = await res.json();
        return body;
    }

    // Person____________________________________
    async getAllPeople() {
        const res = await this.getResource("/people/");
        return res.results.map(this._transformPerson);
    }

    async getPerson(id) {
        const person = await  this.getResource(`/people/${id}/`);
        return this._transformPerson(person);
    }

    _transformPerson(p){
        return{
            id: this._extractId(p.url),
            name: p.name,
            gender: p.gender,
            birthYear: p.birthYear,
            eyeColor: p.eyeColor
        };
    }
    // End. Person____________________________________


    // Planets_____________________________________________
    async getPlanets(){
        const res = await this.getResource('/planets/');
        return res.results.map(this._transformPlanet);
    }

    async getPlanet(id){
        const res = await this.getResource(`/planets/${id}/`);
        return this._transformPlanet(res);
    }

    _extractId(url){
        const idRegExp = /\/([0-9]*)\/$/;
        const id = url.match(idRegExp)[1];
        return id
    }
    _transformPlanet(planet){
       
        return {
            id:this._extractId(planet.url),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        };
    }
    // End. Planets______________________________________



    // Starships_________________________________________
    _transformShip(ship){
        return{
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
    }

    async getAllStarships(){
        const res = await this.getResource('/starships/');
        return res.results.map(this._transformShip);
    }

    async getStarship(id){
        const ship = await this.getResource(`/starships/${id}/`);
        return this._transformShip(ship);
    }
    //End. Starships_________________________________________
}