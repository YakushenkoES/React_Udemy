function add(x, y) {
    return x + y;
}

function sub(x, y) {
    return x - y;
}

function mult(x, y) {
    return x * y;
}

class Graph {
    addNode() {
        console.log("Add node");
    }
}

const PI = 3.1415;

export {
    add,
    sub,
    mult as m
};

export default Graph;