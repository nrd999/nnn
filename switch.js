// If in if
// let x = 8;
// if (x === 5) {
//     let y = 15;
//     if (y > 10) {
//         console.log('x equal 5 and y is bigger then 10')
//     } else {
//         console.log('x bigger the 5 but y is small then 10')
//     }
// } else {
//     if (x > 7) {
//         console.log('x bigger then 5 & 7')
//     }
// }
// -------------------- switch case -------------------
// let lang = 'en';
// switch (lang) {
//     case 'en' :
//         console.log('en');
//         break;
//     case 'ru' :
//         console.log('ru');
//         break;
//     default:
//         console.log('no language')
// }

// --------break is neccesary----------


// MANY IF hard compare ===

let lang = 'ru';
// if (lang === 'en') {
//     console.log('english')
// } else if (lang === 'hy') {
//     console.log('armenian')
// } else if (lang === 'ru') {
//     console.log('russian')
// } else if (lang === 'hy') {
//     console.log('es')
// } else if (lang === 'fr') {
//     console.log('french')
// } else if (lang === 'it') {
//     console.log('italian')
// }

// ------- OR ------

// switch (lang) {
//     case 'en': {
//         console.log('english');
//         break;
//     }
//     case 'hy':
//         console.log('armenian');
//         break;
//     case 'ru' :
//         console.log('russian');
//         break;
//     case 'it' :
//         console.log('italian');
//         break;
//     case 'fr' :
//         console.log('french');
//         break;
//     default:
//         console.log('no equality')
// }


// let num = 7;

// switch (num) {
//     case 10 :
//     case 7 :
//     case 20 :
//         console.log('english');
//         break;
//     case 'someString' :
//         console.log('italian');
//         break;
//     case null :
//         console.log('french');
//         break;
//     default:
//         console.log('no equality')
// }

// ---do it with blocks---

// switch ('fr') {
//     case 'en' : {
//         console.log('english');
//         break;
//     }
//     case 'hy' : {
//         console.log('armenian');
//         break;
//     }
//     case 'ru' : {
//         console.log('russian');
//         break;
//     }
//     default:
//         console.log('no equality')
// }

