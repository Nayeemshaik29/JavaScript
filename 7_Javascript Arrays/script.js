// const a = ["one", 2, true, "Three", { name: "Anuj" }, () => "Hello"];

// console.log(a[4]);

// console.log(a[5]());

// console.log(a[0]);

// for (let value of a) {
//     console.log(value);
// }

// console.log(a);

// a.push("New thing");

// console.log(a);

// a.pop();

// console.log(a);

// const a = [5, 2, 1, 6, 8];

// a.splice(2, 2, "Anuj", true, "Kumar");

// console.log(a);

// a.forEach((value, index, array) => {
//     console.log(value, index);
// });

// a.sort();

// console.log(a);

// console.log(a.includes(50));

// console.log(a.indexOf(6));

// const a = [4, 1, 2, 6, 8, 5];

// const b = a.filter((value, index) => index % 2 == 0);

// console.log(b);

// const b = a.filter((value) => value % 2 != 0).map((value, index) => 2 * value);

// const b = a.map((value) => {
//     return {
//         name: "Anuj" + value,
//         age: value,
//     };
// });

// const c = b.find((value) => value.age <= 4);

// console.log(c);

// console.log("b", b);

// const a = [4, 1, 2];

// const res = a.reduce((prev, cur, ind) => cur + prev, 0);

// console.log(res);

// console.log("a", a);

const a = [
    [1, 2, 3],
    [4, 5],
    [6, 7, 8],
];

const b = a.reduce((prev, cur) => prev.concat(cur), []);

console.log(b);
