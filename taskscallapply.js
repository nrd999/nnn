// 1) greq function vor@ mer studentsi objectneric cankacac meki contextum kancheluc kveradarcni
//   tvyal object@ keyeri ev valuenri texery poxac
//   Orinak ete kanchem {Gori objecti contetxum} -----> kveradarcni {Gor: 'name', 17: 'age', false: 'gender', 3: 'id'}
//   functionn petq e lini lriv arandzin objectic durs
//   (esorva dasna u this@)

// const students = [
//     {
//         id: 3,
//         name: 'Gor',
//         gender: false,
//         age: 17
//     },
//     {
//         id: 4,
//         name: 'Nik',
//         gender: false,
//         age: 20
//     },
//     {
//         id: 1,
//         name: 'Mariam',
//         gender: true,
//         age: 21
//     },
//     {
//         id: 2,
//         name: 'Argisht',
//         gender: false,
//         age: 22
//     },
// ];

// 2) ger function vor@ kstana mer students arrayi objectneric voreve mek@ ev kveradarcni url(aysinqq string)
//    vor@ kunena hetevyal tesq@ orinak Gori objecty stanalu depqum
//    'http://students.com/path?id=3&name=Gor&gender=false&age=17'
//    aysinqn minchev ? nshan@ static nuyn textna dranic heto kaxvac objectic
//    (es xndirn esorva dasi het kap chuni)

// 1) WHAT WILL BE THE OUTPUT AND WHY
// let student = {
//     name: 'John',
//     getName: function () {
//         return this.name;
//     }
// };
//
// let getName = student.getName;
// console.log(getName.call(student));
// console.log(student.getName());

// 2) WHAT WILL BE THE OUTPUT AND WHY
// function foo () {
//     console.log(this.a)
// }
//
// let obj = {
//     foo: foo,
//     a: 5
// };
//
// foo();
// foo.bind(obj);
// foo();
// obj.foo();

// 3) WHAT WILL BE THE OUTPUT AND WHY
// let foo = () => {
//     console.log(this.a)
// };
//
// let obj = {
//     foo: foo,
//     a: 5
// };
//
// let otherFoo = foo.bind(obj);
// obj.foo();
// foo.call(obj);
// otherFoo();

// 4) WHAT WILL BE THE OUTPUT AND WHY
// let obj = {
//     foo: function () {
//         let func = () => console.log(this.a);
//         func()
//     },
//     a: 5
// };
//
// let anotherFoo = obj.foo;
// anotherFoo();
// anotherFoo.call.obj;
// anotherFoo.call(obj);
// obj.foo();

// 5) WHAT WILL BE THE OUTPUT AND WHY
// let obj1 = {
//     foo: function () {
//        console.log(this.a)
//     },
//     a: 5
// };
//
// let obj2 = {
//     a: 10
// };
//
// obj1.foo();
// obj1.foo.call(obj2);
// obj1.foo.bind(obj2);
// obj1.foo();


