// NESTED FUNCTION CALLS
// function f(x) {
//     return function (y) {
//         return function () {
//             return () => 6
//         }
//     }
// }
// let x = f();
// console.log(x());
// console.log(f()()()());

// ------ SELF-INVOKING FUNCTIONS OR IMMEDIATELY INVOKED FUNCTION EXPRESSIONS IIFE ------
// 1. function calles itself 
// (function x(){
//     console.log('IIFE')
// })();

// (function x(){
//     console.log('IIFE')
// }());

// 2. we cant call function by name
// (function x(){
//     console.log('IIFE')
// })();
//
// x();

// 3. thats why no need for name

// (function () {
//     console.log('IIFE')
// })();

// 4. we can give arguments to function

// (function (a,b) {
//     console.log(a+b)
// })(5,7)


// ------ IMMEDIATELY INVOKED FUNCTION EXPRESSIONS IIFE ------

// let x = (function (a, b) {
//     return a + b
// })(1, 2);
// //
// console.log(x);
//
// 5. no need for ()
// let y = function (a, b) {
//     return a + b
// }(0, 5);

// console.log(y)

// 6. for arrow function
// (() => console.log('done'))()

// let x = ((a, b) => a + b)(10, 2)

// console.log(x);


