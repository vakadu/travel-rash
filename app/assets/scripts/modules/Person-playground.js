// function Person(name, color) {
//     this.name = name;
//     this.color = color;
//     this.greet = function () {
//         console.log("Hello " + name + " Color is " + color);
//     }
// }
//
// module.exports = Person;

class Person {

    constructor(name, color){
        this.name = name;
        this.color = color;
    }
    greet(){
        console.log("Hi " + this.name + " Your color is " + this.color);
    }
}

// module.exports = Person;
export default Person;
