// function person(name, color) {
//     console.log("Hello " + name + " Color is  " + color);
// }

// var vakadu = {
//     name: "Vakadu",
//     color: "Blue",
//     greet: function () {
//         console.log("Hello " + vakadu.name + " Color is " + vakadu.color);
//     }
// };
//
// vakadu.greet();

// person(vakadu.name, vakadu.color);
// person("Vinod", "Yellow");

var $ =require('jquery');
//var Person = require('./modules/Person');
import Person from './modules/Person';

// alert("Testing 789");

class Adult extends Person{
    payTaxes(){
        console.log(this.name + " now no taxes");
    }
}

var vakadu = new Person("Vakadu", "Grey");
vakadu.greet();

var vinod = new Adult("Vinod", "Orange");
vinod.greet();
vinod.payTaxes();
