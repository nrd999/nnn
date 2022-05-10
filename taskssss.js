// 1) WHAT WILL BE THE OUTPUT AND WHY
// var x = 12;
// function test() {
//     console.log(x);
//     var x = 7;
//     const y = 9;
//     console.log(y)
// }
//
// test();

// 2) WHAT WILL BE THE OUTPUT AND WHY
// let x = 12;
// function test(x) {
//     console.log(x);
//     let x = 7;
// }
//
// test(9)

// 3) WHAT WILL BE THE OUTPUT AND WHY
// let x = 12;
// function test(x) {
//     x = 14;
//     console.log(x);
//     console.log(y);
//     const y = 9;
// }
//
// test(9)

// 4) WHAT WILL BE THE OUTPUT AND WHY
// let x = 2;
// function test(y) {
//     console.log(y);
//     y = 3;
//     console.log(x)
//     function test1 (a) {
//         let z = 4;
//         console.log(x);
//         function test2 (z) {
//             console.log(a);
//             console.log(z)
//             z = 5;
//         }
//         test2(6)
//     }
//     test1(7)
// }
// test(1)

// 5) WHAT WILL BE THE OUTPUT AND WHY
// let x = 1;
// f(2);
// function f(x) {
//     console.log(x)
// }
// x = 3;
// f();

// 6) WHAT WILL BE THE OUTPUT AND WHY
// f(1);
// let f = function (a, y) {
//     console.log(a)
//     console.log(y)
//     y = 3;
// };

// 7) WHAT WILL BE THE OUTPUT AND WHY
// f();
// let x = 2;
// let f = x => {
//     console.log(x)
// }

// 8) WHAT WILL BE THE OUTPUT AND WHY
// let f = (x,y) => {
//     console.log(z, x, y);
//     y = 5;
// }
// var z = 4;
// f(3);
// f(1,2);


// 9) Greq function vor@ kstana array ev khashvi ayd arrayum exac tveric amenamec@ (arrayum karan tver chlinen);
// orinak ete poxancenq [5,12,'some', true] piti veradarcni 12
// ogtagorceq filter method;

// 10) Greq function vor@ kstana array ev kveradarcni ayd array@ meji bolor tver@ krknapatkac
// orinak ete stana [5, 'Doe', 0, 4, 'some'] ---> kveradarcni [10, 'Doe', 0, 8, 'some']
//  ogtagorceq map;

// 11) Greq function vor kstana array ev ktpi ayd arrayi bolor kent index unecox elementery
//    ogtagorceq foreach;