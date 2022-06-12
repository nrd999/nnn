// let user = {
//     id: 1,
//     name: 'user1',
//     number: '215644435',
//     allPhotosArePublic: true,
//     country: 'America',
//     canLike: true,
//     canPostVideos: true,
//     followers: ['facebookBot'],
//     showNumber: function () {
//         return `${this.name} number is ${this.number}`;
//     },
// }

// let user1 = {
//     id: 2,
//     name: 'user2',
//     number: '215644435',
//     allPhotosIsPublic: true,
//     othersCanWriteMessage: true,
//     country: 'America',
//     canLike: true,
//     canPostVideos: true,
//     followers: ['facebookBot'],
//     showNumber: function () {
//         return `${this.name} number is ${this.number}`;
//     },
// }

// ....

// let user1 = {}
// console.log(user1);
// user1.__proto__ = user;
// console.log(user1);
// console.log(user1.allPhotosArePublic)

// SA KOCHVUM E PROTOTYPE INHERITENCE

//----------------------------------
// let user1 = {
//     id: 2,
//     name: 'user2',
//     number: '1111111',
// }

// user1.__proto__ = user;

// console.log(user1);

// console.log(user1.id)
// console.log(user1.name)
// console.log(user1.number)
// console.log(user1.allPhotosArePublic)
// console.log(user1.showNumber())

// ----------------------------------------------------
// menq karox enq tal mer uzac nkaragrutyun@ objectin
// arajin@ kashxati tvyal object keyer@
// ete chlinen nor kvercni prototypeic
// aysinqn ayn objectic voric zharangel a

// let user3 = {
//     id: 3,
//     name: 'user3',
//     number: '33333',
//     showNumber: function () {
//         console.log('number is hidden')
//     }
// }

// console.log(user3.showNumber())

// ----------------------------------------------------
// user.__proto__ = 5

// antesvum e
// kam petq e lini object kam null
// ----------------------------------------------------
// let person = {
//     canWalk: true,
//     canWrite: true
// }
// let adult = {
//     age: 14,
// }
// let baby = {
//     age: 3,
//     canWrite: false,
// }

// baby.__proto__ = adult;
// adult.__proto__ = person;
// console.log(baby)
// console.log(adult)

// ---------for in loop------------
// let user1 = {
//     id: 1,
//     name: 'user1',
//     number: '1111111',
//     showNumber: function () {
//         console.log('number is hidden')
//     },
//     allPhotosArePublic: false,
//     country: 'Armenia',
// }
// user1.__proto__ = user;
//
// Object.defineProperty(user1, 'number', {
//     enumerable: false,
// });

// console.log(user1);
// for (let key in user1) {
//     console.log(`${key}-----${user1[key]}`)
// }

// hasOwnProperty

// for(let key in user1) {
//     if(user1.hasOwnProperty(key)) {
//         console.log(`${key}-----${user1[key]}`)
//     }
// }
