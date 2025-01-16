// function greet(firstName) {
//     console.log(firstName, "Hi, How are you");

//     return firstName + "Hello";
// }

// const res = greet("Anuj");
// console.log(res);

// greet(12432);

// Arrow Functions
// const multiply = (a, b) => {
//     console.log("multiply", a, "and", b);
//     return a * b;
// };

// const res = multiply(4, 5);
// console.log(res);

// console.log(multiply(5, 7));

// // Default parameter
// const greetFunction = (name = "Learner") => console.log("hi", name);

// greetFunction("Anuj");

// Create a calculator

// const calculate = (a, b, operation) => {
//     return operation(a, b);
// };

// function add(a, b) {
//     return a + b;
// }

// const res = calculate(4, 5, add);

// console.log(res);

// const mulRes = calculate(5, 7, (a, b) => a * b);

// console.log(mulRes);

// currying
// const multiple = (a) => {
//     return (b) => a * b;
// };

// const double = multiple(2); //created a function that doubles anything
// const res = double(5);

// console.log(res);

// const triple = multiple(3); // created a function that triples anything
// const res2 = triple(6);

// console.log(res2);

// console.log(double(10));
// console.log(triple(4));

console.log(this);

function greet() {
    console.log(this);
}

greet();

const obj = {
    age: 34,
    walk() {
        console.log(this);
    },
};

obj.walk();
