// 1) greq function vorn stanum e 2 argument 1@ object 2rd@ inchvor string ev stugum
//    ete ayd stringov key ka objectum, veradardznum e dra valuen hakarak depqum false;
//    orinak stanum e ({id: 5}, 'name') ---> kveradardzni false

// 2) greq function vory karox stanal cankacac type-i argument,
//    ev stugum e ete stacvac argument@ object e ev parunakum e id keyov arjeq
//    apa kveradardzni ayd arjeq@, hakarak depqum kveradardzni "Is not an object"

// 1) WHAT WILL BE THE OUTPUT AND WHY
// const obj = {
//     name: 'John',
//     surname: 'Wick',
// }

// let fullName = `${obj["name"]} ${obj[surname]}`;

// console.log(fullName);

// 2) WHAT WILL BE THE OUTPUT AND WHY
// const obj = {
//     name: 'John',
//     surname: 'Wick',
// }

// obj['age'] = 30;
// obj.age += 10;
// delete obj.surname;

// console.log(obj);

// 3) WHAT WILL BE THE OUTPUT AND WHY
// const obj1 = {
//     id: 1,
// }

// const obj2 = obj1;

// obj2.isTest = true;

// obj1.isTest = false;

// console.log(obj1.isTest);
// console.log(obj2.isTest);

// 4) WHAT WILL BE THE OUTPUT AND WHY
// const obj = {
//     name: '',
//     checkIsTest: (isTest) => console.log(isTest),
//     isTest: false,
// }

// console.log(typeof obj.checkIsTest);
// obj.checkIsTest(obj.isTest);

// 5) WHAT WILL BE THE OUTPUT AND WHY
// function hasName(name) {
//    return !!name
// }

// const obj = {
//     name: 'John',
//     hasName,
// }

// console.log(obj.hasName(obj.name));

// 6) WHAT WILL BE THE OUTPUT AND WHY
// const obj1 = {
//     id: 1,
//     skills: ['js', 'css']
// }

// const obj2 = {
//     id: 2,
//     skills: ['js', 'css', 'html']
// }
// obj1.skills.push(obj2['skills'][2]);
// for (let i = 0; i < obj1.skills.length; i++) {
//     console.log(obj1.skills[i])
// }
// console.log(obj2.length);

// 7) WHAT WILL BE THE OUTPUT AND WHY
// function f(key) {
//     const obj = {
//         name: 'John',
//         id: 5,
//     }
//     if(obj[key] && obj[key] > 1) {
//         return obj['name']
//     }else {
//         obj[key] = null
//     }

//     return obj

// }
// console.log(f('id'));
// console.log(f('surname'));

// let bubbleSort = (inputArr) => {
//     let len = inputArr.length;
//     for (let i = 0; i < len; i++) {
//         for (let j = 0; j < len; j++) {
//             if (inputArr[j] > inputArr[j + 1]) {
//                 let tmp = inputArr[j];
//                 inputArr[j] = inputArr[j + 1];
//                 inputArr[j + 1] = tmp;
//             }
//         }
//     }
//     return inputArr;
// };
