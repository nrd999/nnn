// --------------- bind method ---------------
// set context

// let obj = {
//     id: 1
// }
//
// function f() {
//     console.log(this.id)
// }
//
// f()
// -------------------------------------------
// we can write like this

// let obj = {
//     id: 1,
// }

// function f() {
//     console.log(this.id)
// }
// //
// obj.f = f;
// obj.f()

// -------------------------------------------
// we can set context with bind
//
// let obj = {
//     id: 1,
// }
//
// function f(name) {
//     console.log(name);
//     console.log(this.id)
// }
// //
// let fWithContext = f.bind(obj, 'Gor');
// //
// console.log(obj);
// fWithContext();

// bind doesn't call function. it only sets context

// -------------------------------------------
// let student1 = {
//     user: 'Gor',
// }
// let student2 = {
//     user: 'Mariam',
// }
// function sayHi() {
//     console.log(`hi ${this.user}`)
// }
//
// let sayHi1 = sayHi.bind(student1);
// let sayHi2 = sayHi.bind(student2);
// //
// sayHi1();
// sayHi2();

// --------------- call method ---------------
// let student1 = {
//     user: 'Gor',
// }

// let student2 = {
//     user: 'Mariam',
// }
// //
// function sayHi() {
//     console.log(`hi ${this.user}`)
// }
// sayHi.call(student1);
// sayHi.call(student2);

// -------------------------------------------
// function f() {
//     console.log('hi')
// }

// f();

// f.call(this)

// -------------------------------------------
// we can pass argumetns with call
// let obj = {
//     id: 1
// }

// function f(name, age) {
//     console.log(`id of ${name} is ${this.id}. He is ${age}`)
// }

// f('Gor');
// obj.f('Gor');
// f.call(obj, 'Gor', 16)

// --------------- apply method ---------------
// apply is same as call

// let obj = {
//     id: 1
// }

// function f(name, name1, name2) {
//     console.log(name, name1, name2)
//     console.log(this.id)
// }

// let y = f.apply(obj, ['Gor', 'Mariam', 'Nik'])

// bind ogtagorcum enq ete petq e set anenq context@ bayc functiony kanchelu enq hetagayum
// calln u apply@ ete petq e set anel context@ ev kanchel function@
// calln u apply tarbervum argumenteri poxancman dzevov
