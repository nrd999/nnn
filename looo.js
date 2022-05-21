// 1) WHAT WILL BE THE OUTPUT AND WHY
// let num = 5;
// function showNum() {
//     console.log(num)
// }

// showNum();
// num = 7;
// showNum();

// 2) WHAT WILL BE THE OUTPUT AND WHY
// let a = 10;
// let b = 10;
// let showSum = (a, b) => {
//     return a + b
// };

// console.log(showSum(5, 7));

// 3) WHAT WILL BE THE OUTPUT AND WHY
// let age = 30;
// let getInfo = function (age, name = 'John', surname) {
//     console.log(surname);
//     function getOnlyName(name) {
//         if(!surname) {
//             console.log(name);
//         } else {
//             console.log(age)
//         }
//     }
//     getOnlyName('Jonathan');
// };
// age = 20;
// getInfo(age);

// 4) Greq function vor@ stanum e number argument ev drakan linelu depqum hashvum minchev ayd tiv@ exac tveri gumar@;
//    orinak ete functionn stana 3 apa petq e veradarcni 6 (1 + 2 + 3)

// Gor
// function sayNumbersAmount(num) {
//     let amount = 0;
//     for(amount; num > 0; num--) {
//         amount += num;
//     }
//     return amount;
// }

// console.log(sayNumbersAmount(10));

// Mariam
// function foo(number) { 
//     let sum = 0; 
//     if (number > 0) { 
//         for (let i = 0; i <= number; i++) { 
//             sum = sum + i; 
//         } 
//         console.log(sum); 
//     } 
// } 

// ------- ANSWER -------
// function getSum(num) {
//     let sum = 0;
//     for (let i = 0; i <= num; i++){
//         sum += i;
//     }
//     return sum;
// }
//
// console.log(getSum(3));

// 5) js@ uni function Math.max(num1, num2, num3) vor@ veradarcnum e trvac cankacac qanaki tveric amenamec@, greq ayd functionn inqnuruyn 3 tvi hamar
// (patkeracreq math.max goyutyun chuni)

// Gor
// function sayTheLargestNumber(num1, num2, num3) {
    // if(num1 > num2 && num1 > num3) {
    //     return num1;
    // }
    // if(num2 > num1 && num2 > num3) {
    //     return num2;
    // }
    // if(num3 > num1 && num3 > num2) {
    //     return num3;
    // }
    // kam
    // let res = num1 > num2 ? num1 : num2;
    // return res > num3 ? res : num3;
// }

// console.log(sayTheLargestNumber(100, 200, 30));

// Mariam
// let max = 0 
// function fun (x,y,z){ 
//  if (max < x){ 
//   max = x 
//  } 
//  if(max < y) { 
//   max = y 
//  } 
//  if (max < z) { 
//   max = z 
//  } 
  
//  console.log(max); 
// } 
 
// fun (4,5,6); 

// ------- ANSWER -------
// function showMax(a, b, c) {
//     // let bigNum = a > b ? a : b;
//     // bigNum = bigNum > c ? bigNum : c;
//     // return bigNum
//
//     // return a > b ? a > c ? a : c : b > c ? b : c
// }
//
// console.log(showMax(-1, 5, 7));

// 6) Greq function vor@ stanum e number argument ev khashvi te ayd numberi mej qani 0 ka;

// Gor
// function countZeros(num) {
//     let str = num.toString();
//     let res = 0;
//     for(let i = 0; i < str.length; i++) {
//         +str[i] === 0 && res++;
//     }
//     return res;
// }

// console.log(countZeros(20100606060));

// ------- ANSWER -------
// function showZerosCount(num) {
//     // let stringNum = num.toString();
//     // let count = 0;
//     // let i = 0;
//     // while(i < stringNum.length) {
//     //     if(+stringNum[i] === 0) {
//     //         count++
//     //     }
//     //     i++
//     // }
//     //
//     // return count
//
//     // let count = 0;
//     // let i = 0;
//     // while(i < num) {
//     //     let lastDigit = num % 10;
//     //     if(lastDigit === 0) {
//     //         count++
//     //     }
//     //     num = (num - lastDigit)/10;
//     //     i++
//     //
//     // }
//     // return count
// }
//
// console.log(showZerosCount(1205));