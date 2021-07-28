class SwapiService {

    _apiBase = "https://swapi.dev/api";

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` + ` recieved status is ${res.status}`);
        }
        const body = await res.json();
        return body;
    }

    async getAllPeople() {
        const res = await this.getResource("/people/");
        return res.results;
        
    }

    getPerson(id) {
        return this.getResource(`/people/${id}/`);
    }

    async getPlanets(){
        const res = await this.getResource('/planets/');
        return res.results;
    }

    getPlanet(id){
        return this.getResource(`/planets/${id}/`);
    }

    async getAllStarships(){
        const res = await this.getResource('/starships/');
        return res.results;
    }

    getStarship(id){
        return this.getResource(`/starships/${id}/`);
    }
}


const swapi = new SwapiService();
swapi.getAllPeople()
    .then(people =>{
        console.log('people :', people);
        console.log(people.map(p=>p.name));
    } );

swapi.getPerson(86)
.then(p=>{
    console.log(p.name);
});

swapi.getPlanets()
.then(planets=>{
    console.log("planets: ", planets);
});

swapi.getPlanet(4)
.then(p=>{
    console.log("planet: ", p);
});

swapi.getAllStarships()
.then(ships=>{
    console.log("ships: ", ships);
});

swapi.getStarship(3)
.then(ship=>{
    console.log("ship: ", ship);
});



// getResource("https://swapi.dev/api/people/2/")
//     .then(body => {
//         console.log('body :', body);
//     })
//     .catch(err => {
//         console.error("Couldn't fetch", err);
//     });

// fetch("https://swapi.dev/api/people/1/")
//     .then(resp => {
//             console.log("Got response", resp.status);
//             return resp.json();
//         }
//     )
//     .then(json => console.log('json :', json));