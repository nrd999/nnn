// 1) Haytarareq popoxakan ev veragreq '123javascript';
// tvyal popoxakanic staceq meji tiv@
// aynuhetev tpeq tvyal tvi tvanshanneri gumary;
// ---ANSWER IS---
// let x = '123javascript';
// let num = parseInt(x);
// let stringNum = num.toString(); '123'
// let result = +stringNum[0] + +stringNum[1] + +stringNum[2];
// console.log(result);

//  2) Haytarareq 2 eranish tvov popoxakan;
//  veraceq string type-i ev gumareq irar;
//  vercreq stacvac arjeqi naxaverjin elemnet@;
//  bazmapatkeq js-i koxmic generacvox tvov
//  tpeq stacvac arjeq@ kotorakayin tesqov aynpes vor ketic heto lini 2 tiv orinak 2.22

// --ANSWER IS:---
// let num = 132;
// let num2 = 456;
// let sum = num.toString() + num2.toString();
// let preLastElem = sum[sum.length - 2];
// console.log(preLastElem);
// let result = preLastElem * Math.random();
// console.log(result.toFixed(2));

// let num1 = 156;
// let num2 = 248;
// let amount = ((num1.toString() + num2.toString()).length - 2) * Math.random();
// console.log(+amount.toFixed(2));

// 3) Inch kartatpi ev inchu
    // let a = 5;
    // let b = String(a); // "5"
    // let c = Boolean(b); // true
    // let d = c.toString(); // "true"
    // d += d; // "truetrue"
    // console.log(d);

// 4) Inch kartatpi ev inchu
    // let str = 'some string';
    // let str4 = str[4]; // " "
    // str4 += ''; // " "
    // let sum = 10 + str4; "10 "
    // console.log(sum);

// // 5) Inch kartatpi ev inchu
//     let num = 124.5;
//     let someStr = 'some';
//     let line = num + someStr; // "124.5some"
//     let parsedLine = parseInt(line); // 124
//     let something = parsedLine + 1; // 125
//     const result = something >= ''; //true
//     console.log(result); // true
//     console.log("" !== false); // true

// 6) Inch kartatpi ev inchu
    // let bool = true;
    // let notBool = 'string';
    // let val = +bool + 1; // 2
    // let newVal = val + notBool; // "2string"
    // let len = newVal.length; // 7
    // let newLen = len + +'5.12345'; // 12.12345
    // const res = newLen.toFixed(1); // 12.1
    // console.log(res);

// 7) Inch kartatpi ev inchu
    // let lastString = 'string';
    // let whatOutput = lastString.indexOf('t'); // 1
    // let getSymbol = lastString[lastString.length - whatOutput];
    // let isEqual = getSymbol === 'g';
    // console.log(isEqual);

// 8) Inch kartatpi ev inchu
    // let age = 44;
    // let newAge = age + 1;
    // let stringAge = age.toString(); // '44'
    // let newStringAge = +stringAge; // 44
    // let isEqual2 = newAge === newStringAge;
    // console.log(isEqual2);

// 9) Inch kartatpi ev inchu
    // let randomNumber = Math.random();
    // let resultNum = Math.round(randomNumber);
    // console.log(resultNum);

// 10) result popoxakanin veragreq anun@ ete ayn erkar e 4 ic hakarak depqum veragreq 'name is long' ev tpeq result@
    // let name = 'Jhon';
    // let result = null;

// ---ANSWER---
// if (name.length > 4) {
//     result = name;
// } else {
//     result = 'name is long'
// }
// console.log(result);
// OR
// result = name.length > 4 ? name : 'name is long';
// console.log(result)

// 11) haytarareq 3 popoxakan anun azganun tariq; ev greq script vory tpum e 'done' ete bolor popoxakannern unen arjeq;
//---ANSWER---
// let name = 'Jhon';
// let surname = 'Doe';
// let age = 30;
// if(name && surname && age) {
//     console.log('done')
// }
// or
// if (name && surname && age) console.log('done')
//or
// name && surname && age && console.log('done');

// 12) result popoxakanin veragreq anun@ ete ayn ka hakarak depqum azganun@;
    //   let username = 'John';
    //   let surname = 'best';
    //   let result;

// ---ANSWER---
// if(username) {
//     result = username
// }else if(surname) {
//     result = surname
// }
//or
// result = username ? username : surname;
//or
// result = username || surname;

// 13) greq script vor kstugi ete user@ uni anun apa ayd anvann avelacni 777 ev tpi ayn;
//    ete anun chuni ev tariq@ poqr e 18-ic tox stugi ete 16 kam 17 tarekan e apa tox tpi 'soon'
//    mnacac bolor depqerum tox tpi useri tariq@ bayc string typov;
//    let userName = 'Jhon';
//    let userAge = 17;

// ---ANSWER---
// if (userName) {
//     userName += 777;
//     console.log(userName)
// }else if(userAge < 18) {
//     userAge === 16 || userAge === 17 ? console.log('soon') : null;
// }else {
//     console.log(userAge.toString())
// }

// 14) greq script vor@ kstugi ete popoxakan@ string e ev datark che apa kvercni stringi meji tiv@
//    ev kstugi ete zuyg e ktpi;
// let numStr = '124String';
// if (typeof numStr === 'string' && numStr) {
//     let num = parseInt(numStr);
//     num % 2 === 0 ? console.log(num) : null;
// }

// 15) Inch ktpi ev inchu
// let x = '';
// if(x) {
//     x = 6;
//     console.log(x)
// } else {
//     x += true;
//     console.log(x)
// }


// 16) Inch ktpi ev inchu
// let y = 10 <= '11' || null && 'string' > 5
// if (!y) {
//     console.log(true || false)
// } else {
//     console.log(!y)
// }

// 17) Inch ktpi ev inchu
// const x = (null || 'some text') && ('boolean' && 'null');
// x === 'null' ? console.log('result 1') : console.log('result 2');
// let y = ('boolean' || undefined) || ('' && x);
// console.log(y);