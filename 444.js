// Web APIs - https://developer.mozilla.org/en-US/docs/Web/API

// 1) greq function vorn stanum e 2 number argument from ev to, orinak 4, 8 ev tpum e vayrkyan@ mek from-ic to tvery; orinak stanum e 4,8  tpum e 4,5,6,7,8

// 2) greq function vorn stanum e PATAHAKAN GENERACVAC tiv 0,10 mijakayqum ev ete stacvac tivy mec e 5-ic  ayd tvin hamapatasxan vayrkyan heto tpum eayd tiv@
//   orinak stanum e 7 uremn 7 vayrkyan heto ktpi 7.

// 1) WHAT WILL BE THE OUTPUT AND WHY
// let x = 5;
// setTimeout(() => console.log(x), 1000);
// x += 1;

// 2) WHAT WILL BE THE OUTPUT AND WHY
// let x = 0;
// setTimeout(() => console.log(x), 0);
// x++;

// 3) WHAT WILL BE THE OUTPUT AND WHY
// function f(num) {
//     console.log(num);
//     clearInterval(timerId)
// }

// let x = 2;

// let timerId = setInterval(() => f(x), x * 1000);

// 4) WHAT WILL BE THE OUTPUT AND WHY
// function setTimer(canSet) {
//     console.log(1)
//     if(canSet) {
//         console.log(2)
//         setTimeout(() => setTimer(false), 1000)
//     }else {
//         console.log('this is recursion')
//     }
// }
// setTimer(true)

// ------------- this -------------
// 1) greq function vorn stanum e array cankacac elementnerov (nayev krknvox)
//    ev veradarcnum e object, vortex key valueov nshvac e te tvyal elmentic qani hat ka arrayum
//    orinak f(['a', 'b', 'c', 'b', 'a', 'a']) ---> {a: 3, b: 2, c: 1} petqa asxhati voch menak stringneri arrayov ayl cankacac

// 2) greq function vor@ stanum e objectneri array vortex nshvac en inchvor apranqner, apranqneri qanak, goyutyun uni te voch
// ev arjeq (arjeq@ verabervum e 1 apranqin), function@ piti veradarcni @ndhanur goyutyun unecox apranqneri gumar@
// (nman funkcianer en ashxatum cankacac online arevtri kayqerum erb add enq anum apranqy karzina u nshuma qanak verjum cuyca talis inchqan piti vcharenq)
// orinak f(
    // [
    // {name: 'snikers', quantity: 2, price: 200, doesExist: false},
    // {name: 'coca-cola', quantity: 5, price: 100, doesExist: true},
    // {name: 'lays', quantity: 1, price: 100, doesExist: true},
    // ]
// ) kveradarcni 600, vorovhetev goyutyun uni 5 hat coca-cola amen meky 100 u 1 hat lays 100

// 3) greq function vory kstana nshvac array@ arajin argumentov
//    ev kstana 2 rd argument objecti keyeric mek@, ev kveradarcni object vortex
//    xmbavorvac klinen studentnern @st poxancvac keyi
//    orinak f(students, 'gender') kveradarcni
// {
//     true: [{}, {}]--> bolor ayn studnetnnery voronc gender@ true e
//     false: [{}, {}] ---> bolor ayn studentnnery voronc gender@ false e
// }

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
// function foo () { console.log(this.a) }
// let obj = {
//     foo: foo,
//     a: 5
// };
// foo();
// obj.foo();

// 2) WHAT WILL BE THE OUTPUT AND WHY
// let foo = () => {
//     console.log(this.a)
// }
// let obj = {
//     foo: foo,
//     a: 5
// };
// foo();
// obj.foo();

// 3) WHAT WILL BE THE OUTPUT AND WHY
// let obj = {
//     foo: 'bar',
//     func: function () {
//         var self = this;
//         console.log(this.foo);
//         console.log(self.foo);
//         (() => {
//             console.log(this.foo);
//             console.log(self.foo);
//         })()
//     }
// }
// obj.func();

// 4) WHAT WILL BE THE OUTPUT AND WHY
// let student = {
//     name: 'John',
//     methods: {
//         name: 'Wick',
//         getName: function () {
//             console.log(this.name)
//         }
//     }
// }
//
// let obj = student.methods.getName();

// 5) WHAT WILL BE THE OUTPUT AND WHY
// let obj = {
//     id: 1,
//     getId: (id) => console.log(this.id++)
// }
//
// obj.getId = function (id) {console.log(this.id++)}
// obj.getId(5);
// obj.getId(5);

// 6) WHAT WILL BE THE OUTPUT AND WHY
// let obj = {
//     id: 1,
//     getId: function () {
//         console.log(this.id)
//     }
// }
//
// let obj1 = Object.assign(obj, {id: 2});
// obj.getId()
// obj1.getId()