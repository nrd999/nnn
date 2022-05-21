// 1) Greq function vor@ vorpes argument kstana array ev ktpi tvyal arrayum exac bolor tver@;(arrayi mej karan tveric baci urish elementner el linen)

// Mariam
// let  someArr=function(array){
//   console.log(array[0]);
//   console.log(array[1]);
//   console.log(array[2]);
//   console.log(array[3]);
// }
//  someArr([1, 5, 4, 2]);

// Nik
// function getNumbers(arr) {
//     let numbArr = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (typeof arr[i] === "number") {
//         numbArr.push(arr[i])
//       }
//     }
//     return numbArr
//   }
// console.log(getNumbers([1, 'some', 6, null]));
// Gor
// let arr = [10, true, "barev", null];

// const printNum = (arr) => {
//     for(let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }

// printNum(arr);
// // or
// arr.forEach(val => {
//     console.log(val);
// });

//  ------- ANSWER -------
// function logNumbers(arr) {
//     for(let i = 0; i< arr.length; i++) {
//         if(typeof arr[i] === 'number') {
//             console.log(arr[i])
//         }
//     }
// }

// logNumbers([7,'someText', null, 87])

// 2) Greq function vor@ kstana 2 array argument ev ktpi aveli erkar arrayi meji bolor string elementnery;

// Mariam
// let someArray=function(array1,array2){
//     if(array1.length>array2.length){

//     console.log(array1);

//     }
//      else if(array1.length<array2.length){
//         console.log(array2); 
//     }
// }
// someArray(['1',2,'hello'],['two',2]);

// Nik
// function numbers(arrA, arrB) {
//     let stringArr = [];
//     if (arrA.length >= arrB.length) {
//       for (let i = 0; i < arrA.length; i++) {
//         if (typeof arrA[i] === 'string')
//           stringArr.push(arrA[i])
//       }
//     } else {
//       for (i = 0; i < arrB.length; i++) {
//         if (typeof arrB[i] === 'string') {
//           stringArr.push(arrB[i])
//         }
//       }
//     }
//     return stringArr
//   }

// Gor
// let arr1 = [10, "Hello", 20, "Armenia", undefined];
// let arr2 = ["barev", 900, "Hayastan"];

// const printLongStr = (arr1, arr2) => {
//     let longArr = arr1.length > arr2.length ? arr1 : arr2;
//     let str = longArr.filter(val => typeof val === 'string');
//     return str
// }

// console.log(printLongStr(arr1, arr2));

// ------- ANSWER -------
// function logStrings(arr1, arr2) {
//     let arr = arr1.length > arr2.length ? arr1 : arr2;
//     for(let i = 0; i< arr.length; i++) {
//         if(typeof arr[i] === 'string') {
//             console.log(arr[i])
//         }
//     }
// }

// logStrings([7,'someText', null, 87], [5,9])

// 3) Greq function vor@ kstana erku array voric mek@ datark e, ev myus arrayi meji elementery klcni datark arrayi mej u kveradarcni ayd array@

// Mariam
//  let someArray=function(array1,array2){
//  array1=array2;
//  console.log(array1);
//  }
//  someArray([],['two',2]);

// Nik
// function numbers(arrA, arrEmpty) {
//     for (let i = 0; i < arrA.length; i++) {
//       arrEmpty.push(arrA[i])
//     }
//     return arrEmpty
//   }

// Gor
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [];

// const transferVal = (arr1, arr2) => {
//     let empty = arr1.length === 0 ? arr1 : arr2;
//     let notEmpty = arr1.length !== 0 ? arr1 : arr2;
//     for(let i = 0; i < notEmpty.length; i++) {
//         empty.push(notEmpty[i]);
//     }

//     return empty;
// }

// console.log(transferVal(arr1, arr2));

// ------- ANSWER -------
// function cloneArray(arr, emptyArr) {
//     for(let i = 0; i < arr.length; i++) {
//         emptyArr.push(arr[i])
//     }
//     return emptyArr
// }

// console.log(cloneArray([7, 'someText', null, 87], []));

// 4) Greq function vor@ stanum a 2 argument mek@ array myus@ number type-i; ev stugum a ete arrayum ka 2rd argumentov stacvac tiv@
// apa veradarcnum a ayd tiv@  hakarak depqum veradarcnum a false

// Mariam
// let someArray=function(array,number){
// if(array[0]=number){
//   console.log(2)
// }
//  else if(array[1]=number){
// }
// else if(array[3]=number){
   
//     console.log(2)
// }
// someArray([1,4,2],2);

// Nik
// function checkNum(arr, b) {
//     let makeString = ""
//     for (let i = 0; i < arr.length; i++) {
//       return arr[i] === b ? b : false
//     }
//       for (i = 0; i < makeString.length; i++) {
//         if (makeString[i] === b) {
//           return b
//         } else return false
//       }
//   }

// Gor
// let arr = [120, 30, 88, 60, 22];

// const f = (arr, num) => {
//    for(let i = 0; i < arr.length; i++) {
//       if(arr[i] === num) return num;
//    }
//    return false;
// }

// console.log(f(arr, 22));

// ------- ANSWER -------
// function showNum(arr, num) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === num) {
//             return num
//         }
//     }
//     return false
// }

// console.log(showNum([7, 'someText', null, 87], 5));

// 5) Greq function vor kstana 4 argument bolor@ number ev kveradarcni array vori mej klinen ayd 4 numberneri krknapatiknern

// Mariam
//    let someArray=function(first,second,third,fourth) {
//     const res = first * first;
//     const res1 = second * second;
//     const res2 = third * third;
//     const res3 = fourth * fourth;
//     console.log([res,res1,res2,res3])
// }
// someArray(1,2,3,4);

// Nik
// function numbers(a, b, c, d) {
//   let arr = []
//   if (typeof a === 'number' & typeof b === 'number' & typeof c === 'number' & typeof d === 'number') {
//     arr[0] = a * 2
//     arr[1] = b * 2
//     arr[2] = c * 2
//     arr[3] = d * 2
//     return arr
//   } else return "THERE IS 1 OR MORE WRONG ITEMS!!!"
// }

// Gor
// const doubleNum = (num1, num2, num3, num4) => {
//    let arr = [];
//    arr.push(num1, num2, num3, num4);
//    let res = arr.map(val => val * 2);
//    return res;
// }

// console.log(doubleNum(2, 5, 6, 10));

// ------- ANSWER -------
// function convertToArr(a, b, c, d) {
//     // return [a*2, b*2, c*2, d*2];

//     // let arr = [];
//     // arr.push(a * 2);
//     // arr.push(b * 2);
//     // arr.push(c * 2);
//     // arr.push(d * 2);
//     // return  arr
// }

// console.log(convertToArr(4, 8, 7, 9));