const fib = [1, 1, 2, 3, 5, 8, 13];

const [a, b, c] = fib;
console.log(a, b, c);

const [, , x, , y] = fib;
console.log(x, y);

const line = [
    [10, 12],
    [66, 44]
];
const [
    [x1, y1],
    [x2, y2],
    z1 = 99
] = line;
console.log(x1, y1, x2, y2, z1);


const people = ['mike', 'john', 'sandra'];
const [ap, ...otherp] = people;
console.log(ap, otherp);


const dict = {
    duck: 'кря',
    dog: 'гав',
    mouse: 'пи',
    humster: 'пи'
};

let res = Object.entries(dict);
console.log('res :', res);

let resF = res.filter(([, value]) =>
    value === 'пи'
);
console.log('resF :', resF);

resF = resF.map(([key]) => key);
console.log('resF :', resF);



const shape = {
    type: 'segment',
    coordinates: {
        start: [10, 15],
        end: [17, 19]
    }
};

const {
    coordinates: {
        start: [startX, startY],
        end: [endX, endY]
    }
} = shape;

console.log(startX, startY, endX, endY);