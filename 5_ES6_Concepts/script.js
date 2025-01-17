// const sum = (a, b, ...c) => {
//     let res = a;
//     res += b;

//     console.log(c);

//     for (let i = 0; i < c.length; i++) res += c[i];

//     return res;
// };

// console.log(sum(4, 5, 1));

// const person = {
//     firstName: "Anuj",
//     age: 28,
// };

// const address = {
//     city: "Delhi",
//     country: "IN",
// };

// const newPerson = {
//     ...person,
//     ...address,
// };

// const firstArray = [1, 2, 3];
// const secondArray = [4, 5, 6];

// firstArray.push(...secondArray);

// console.log(firstArray);

// // const thirdArray = [...firstArray, ...secondArray];

// // console.log(thirdArray);

// // console.log(newPerson);

// const person = {
//     firstName: "Anuj",
//     age: 28,
//     city: "Delhi",
//     isActive: true,
// };

// const { firstName: name, city: addressCity, ...allOthers } = person;

// console.log(name, addressCity);

// console.log(allOthers);

// const x = [1, 2, 3, 4, 5];

// const [a, b, ...c] = x;

// console.log(a, b);

// console.log(c);

const name = "Anuj";
const age = 28;

// const sentence = "My name is " + name + " and age is " + age;

const sentence = `My name is ${name}
 and age
is ${age}`;

console.log(sentence);
