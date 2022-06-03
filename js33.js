// destructuring
// https://learn.javascript.ru/destructuring-assignment

// define property
// https://learn.javascript.ru/property-descriptors

// setter getter
// https://learn.javascript.ru/property-accessors

// 1) uneq angleren aybuben@ arrayov, greq function vor kstana voreve tar ev kveradardzni object
//    vortex vorpes key nshvac klini stacac tar@ isk vorpes value te vorerord tarn e aybubenum
//    orinak f('a') kveradardzni {a: 1}
// let arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// 2) greq function vory stanum e object ev veradarcnum array vortex objecti amen key valuen krkin array e;
//    orinak f({a:1, b: 2, c: 3}) ------>>> [['a',1],['b',2],['c',3]]
//    aysinqn grum eq Object.entries methody

// 3) greq function vory kstana  arajin argumentov nshvac students array@
//    ev  2 rd argument object, vortex klini mek key-value--> name, gender, kam age,
//    orinak {name: 'Anna'} kam {gender: true} kam {age: 21} ev kveradardzni
//    array ayn usanoxneri objectnerov voronq hamapatasxanum en 2rd argumentov trvac parametrin
//    orinak {gender: true} stanalu depqum kveradarcni [{Annai}, {Svetai}] objectner@
//    ete vochmiban chi hamapatasxanum datark array

// const students = [
//     {
//         name: 'Gor',
//         gender: false,
//         age: 20
//     },
//     {
//         name: 'Mariam',
//         gender: true,
//         age: 21
//     },
//     {
//         name: 'Nik',
//         gender: false,
//         age: 22
//     },
//     {
//         name: 'Argisht',
//         gender: false,
//         age: 23
//     },
// ];

// 1) WHAT WILL BE THE OUTPUT AND WHY
// function foo () {
//     return
//     {
//         bar: 'hello'
//     }
// }

// console.log(foo());

// 2) WHAT WILL BE THE OUTPUT AND WHY
// function foo () {
//     return {
//         name: 'John',
//         skills: ['Fight', (() => console.log(1))()]
//     }
// }

// console.log(foo.skills);
// console.log(foo().skills[1]);

// 3) WHAT WILL BE THE OUTPUT AND WHY
// let x = (function foo (name) {
//     return {
//         name,
//         skills: ['Fight', () => console.log(1)]
//     }
// })('John')

// console.log(x);
// console.log(foo.name);
// console.log(foo);

// 4) WHAT WILL BE THE OUTPUT AND WHY
// let obj = {name: 5};
// let x = 'name';
// obj[x] = 10;

// console.log(obj);

// console.log(obj.toString())

// 5) WHAT WILL BE THE OUTPUT AND WHY
// let obj = {name: 5};
// let x = {key: 5};
// let y = {key: 7};

// obj[x] = x.key;
// obj[y] = y.key;

// console.log(obj);
// console.log(obj[x]);