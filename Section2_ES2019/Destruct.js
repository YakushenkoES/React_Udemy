// Деструктуризация объекта
const person = {
    name: {
        first: 'Peter',
        last: 'Smith'
    },
    age: 27,
    role: 'admin'
};

const {
    name: {
        first: firstName,
        last: lastName
    },
    age,
    permissions: {
        role = 'user'
    } = {}
} = person;

console.log(firstName, lastName, age, role);


// Деструктуризация параметров функции
function connect({
    host = 'localhost',
    port = 1829,
    user = 'peter'
} = {}) {
    console.log('host:', host, 'port:', port, 'user:', user);
}

connect();

// rest деструктуризация 

const dict = {
    duck: 'кря',
    dog: 'гав',
    mouse: 'пи'
};

const {duck, ...other} = dict;

console.log('duck :', duck, 'other:', other);