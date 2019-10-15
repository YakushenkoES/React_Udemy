

// 1._____________________
// const dog = {
    //     name: 'dog',
//     voice: 'woof',
// };
// Object.setPrototypeOf(dog, animal);


// 2._________________________
// const animal = {
//     say: function(){
//         console.log(this.name, 'goes', this.voice);
//     }
// };
// const dog = Object.create(animal);
// dog.name = 'dog';
// dog.voice = 'woof';

// function createAnimal(name, voice){
    //     const res = Object.create(animal);
    //     res.name = name;
    //     res.voice = voice;
    //     return res;
    // };
//const dog = createAnimal('dog', 'woof');
//const cat = createAnimal( 'cat', 'meow');


// 3 __________________________
function Animal(name, voice){
    this.name = name;
    this.voice = voice;
};
Animal.prototype.say = function(){
    console.log(this.name, 'goes', this.voice);
};

const dog = new Animal('dog', 'woof');
const cat = new Animal( 'cat', 'meow');

dog.say();
cat.say();

