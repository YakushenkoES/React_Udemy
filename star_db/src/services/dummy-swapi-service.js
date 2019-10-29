export default class DummySwapiService {
  _people = [
    {
      id: 1,
      name: 'Bilbo Baggins [TEST DATA]',
      gender: 'male',
      birthYear: 'long ago',
      eyeColor: 'dark brown'
    },

    {
      id: 2,
      name: 'Frodo Baggins [TEST DATA]',
      gender: 'male',
      birthYear: 'long ago',
      eyeColor: 'dark brown'
    }
  ];

  _planets = [
    {
      id: 1,
      name: 'Earth [TEST DATA]',
      population: '7.530.000.000',
      rotationPeriod: '23 hours 56 seconds',
      diameter: '12.742 km'
    },
    {
      id: 2,
      name: 'Venus [TEST DATA]',
      population: 'not known',
      rotationPeriod: '243 days',
      diameter: '12.104 km'
    }
  ];

  _starships = [
    {
      id: 1,
      name: 'USS Enterprise [TEST DATA]',
      model: 'NCC-1701-C',
      manufacturer: 'Northrop Grumman Shipbuilding',
      costInCredits: 'not known',
      length: 'approx 300 meters',
      crew: 1000,
      passengers: 50,
      cargoCapacity: 100
    }
  ];

  _vehicles=[
      {
          id:1,
          name: "Name [TEST DATA]",
          model: "Model [TEST DATA]",
          costInCredits: 123
      }
  ];

  getAllPeople = async () => {
    return this._people;
  };
  getAllPeopleRandom = async ()=>{
      return await this.getAllPeople();
  }

  getPerson = async () => {
    return this._people[0];
  };

  getAllPlanets = async () => {
    return this._planets;
  };
  getAllPlanetsRandom = async ()=>{
    return await this.getAllPlanets();
}

  getPlanet = async () => {
    return this._planets[0]
  };


  getAllVehicles = async () => {
    return this._vehicles;
  };
  getAllVehiclesRandom = async ()=>{
    return await this.getAllVehicles();
}

  getVehicle = async () => {
    return this._vehicles[0]
  };


  getAllStarships = async () => {
    return this._starships;
  };
  getAllStarshipsRandom = async ()=>{
    return await this.getAllStarships();
}

  getStarship = async () => {
    return this._starships[0];
  };

  getPersonImageUrl = () => {
    return `https://placeimg.com/400/500/people`
  };

  getStarshipImageUrl = () => {
    return `https://placeimg.com/600/400/tech`;
  };

  getPlanetImageUrl = () => {
    return `https://placeimg.com/400/400/nature`
  };
  getVehicleImageUrl = () => {
    return `https://placeimg.com/400/400/tech`
  };
}
