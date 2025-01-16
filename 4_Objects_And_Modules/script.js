// const person = {
//     age: 30,
//     firstName: "Anuj",
//     address: {
//         city: "Delhi",
//         country: "IN",
//     },
//     isActive: true,
//     books: ["Book 1", "Book 2"],
//     walk: function () {
//         console.log("Person is walking", this.firstName);
//     },
// };

// console.log(person);

// person.firstName = "Shivam";

// console.log(person["address"].city);

// console.log(person);

// person.walk();

// import { greetings as greetFn, PI_VALUE as PI_DATA } from "./greet.js";

import greet from "./greet.js";

console.log(greet);

greet.greetings();

console.log(greet.PI);

console.log(greet.add(4, 5));
