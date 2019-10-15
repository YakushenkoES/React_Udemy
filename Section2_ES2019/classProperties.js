// ES 2019
class Counter {
    count = 0;
    inc = () => {
        this.count += Counter.incrementStep;
        console.log('this.count :', this.count);
    }

    static incrementStep = 2;
    static incrementAll = function (arr) {
        arr.forEach(с => c.inc());
    }
}

const cnt = new Counter();

cnt.inc();
cnt.inc();
setTimeout(cnt.inc, 1000);

Counter.incrementAll([]);

// ES 6
class Counter2 {
    constructor() {
        this.count = 0
        this.inc = () => {
            this.count += Counter.incrementStep;
            console.log('this.count :', this.count);
        }
    }

   
}

Counter2.incrementStep = 2;
Counter2.incrementAll = function (arr) {
    arr.forEach(с => c.inc());
}
const cnt2 = new Counter2();
cnt2.inc();
cnt2.inc();
setTimeout(cnt2.inc, 1000);

Counter2.incrementAll([]);
console.log('Counter2 :', Counter2);