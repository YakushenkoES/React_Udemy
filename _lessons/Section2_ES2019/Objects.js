const x = 10;
const y = 30;

const point = {
    x: x,
    y: y,
    draw: function () {
        //
    }
};

const point2 = {
    x,
    y,
    draw(args) {
        //  
    }
};
//______________________________

const prefix = '_text_';
const data = {
    [prefix + 'name']: 'Bob',
    [prefix + 'age']: 23
};

console.log(data);


// Copy SHALLOW COPY _______________________________________
const defaults = {
    host: 'localhost',
    dbName: 'blog',
    user: 'admin'
};

const opts = {
    user: 'John',
    password: 'utopia'
};
//Object.assign(defaults, opts);
const merged = Object.assign({}, defaults, opts);
console.log(defaults);
console.log(merged);

// Spread
const port = 8080;
const merged2 = {
    ...defaults,
    ...opts,
    port,
    connect(){

    }
};
console.log('merged2 :', merged2);