// ------ CLOSURE ------
// let counter = 0;
// function makeCounter() {
//     return counter++
// }

// console.log(makeCounter());
// console.log(makeCounter());
// console.log(makeCounter());

// WE CAN CHANGE COUNTER FROM ANYWHERE

// ---------------------------------------------------
// WE CAN ADD COUNTER INSIDE THE FUNCTION
// function makeCounter() {
//     let counter = 0;
//     return counter++
// }
//
// console.log(makeCounter());
// console.log(makeCounter());
// console.log(makeCounter());
// ---------------------------------------------------

// function makeCounter() {
//     let count = 0;
//     return function () {
//         return count++
//     }
// }

// const counter = makeCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.dir(makeCounter);
// console.dir(counter);

// ---------------------------------------------------
// function makeCounter() {
//     let count = 0;
//     return function () {
//         return count++
//     }

// }

// const counter1 = makeCounter();
// const counter2 = makeCounter();

// console.log(counter1());
// console.log(counter1());
// console.log(counter1());
// console.log(counter2());
// console.log(counter2());
// console.log(counter2());


// SEE IN [[SCOPE]]
// console.dir(makeCounter);
// let res  = makeCounter();
// console.dir(res);

// ---------- write function, which multiplys number by 2 then by 10 ------
// function getDouble(num) {
//     return num * 2
// }

// function getTenFold(num) {
//     return num * 10
// }

// function getValue(num1) {
//     return function (num2) {
//         return num1 * num2
//     }
// }
//
// const getDouble = getValue(2);
// getDouble(4);
// //
// const getTenFold = getValue(10);
// getTenFold(5);

// console.log(getValue(2)(4));
// getValue(10)(4);

// THIS IS CLOSURE

// ---------- GARBAGE COLLECTOR ----------
// Typically, the lexical environment is cleaned up and removed after the function has completed.
// But, if there is a nested function that is still available after executing f,
// then it has a [[Environment]] property that refers to the external lexical environment;

// THATS WHY WE NEED CLOSURE
// function f() {
//     let x = 5;
//     let y = 4;
// }

// f();

// function f() {
//     let x = 5;
//     let y = 4;
//     return function () {
//         console.log(x)
//     }
// }

// f();

