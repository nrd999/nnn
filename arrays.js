// ------ARRAY IS ORDERED COLLECTION----
// let arr = new Array();
// let arr = [];
// let cars = ['bmw', 'mazda', 'kia'];
// let someArr = ['Armenia', 5, null, true];
// console.log(typeof [])

// ------GET ELEMENT FROM ARRAY------

// let someArr = ['Armenia', 5, null, true];
// console.log(someArr[0]);
// console.log(someArr[3]);


//--------WE CAN CHANGE ELEMENT-------
// let someArr = ['Armenia', 5, null, true];
// someArr[2] = 'Russia';
// console.log(someArr)
// DONT USE THIS CASE

// ------WE CAN PUT IN ARRAY ELEMENT OF ANY TYPE-------
// let arr = [true, false, 5, null, 'sssasd', () => {console.log('you called function')}, [7,'sad']];
// console.log(arr[5]);
// console.log(arr[6]);
// console.log(arr[5]());

//=================POP, PUSH, SHIFT, UNSHIFT===================
//POP, PUSH, SHIFT, UNSHIFT IS METHODS OF ARRAY
//------PUSH-------
// let arr = [7, true, 'some'];
// arr.push(6);
// console.log(arr)
// console.log(arr.push(8)); /* return length of new array*/
//----WE CAN ADD MANY ELEMENTS WITH PUSH---
// let arr = [7, true, 'some'];
// arr.push(5,null, 'asdasd');
// console.log(arr)

//------POP(delete last)-------
// let arr = [7, true, 'some'];
// arr.pop();
// console.log(arr)
// console.log(arr.pop()); /* return removed value*/

//------UNSHIFT-------
// let arr = [7, true, 'some'];
// arr.unshift(152);
// console.log(arr)
// console.log(arr.unshift(152)); /* return length of new array*/
//----WE CAN ADD MANY ELEMENTS WITH UNSHIFT---
// let arr = [7, true, 'some'];
// arr.unshift(5, null, 'asdasd');
// console.log(arr)

//------SHIFT(delete first)-------
// let arr = [7, true, 'some'];
// arr.shift();
// console.log(arr)
// console.log(arr.shift()); /* return removed value*/

//------DELETE-------
// let arr = [7,'string', false];
// delete arr[1];
// console.log(arr);

// LOOPS FOR ARRAYS, ARRAYS AS STRINGS ARE ITERABLE
// let arr = ['name', false, 20, null, 'surname'];
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// for (let i = 0; i < arr.length; i++) {
//     console.log(i);
//     console.log(arr[i]);
//     console.log(`element ${i} is ${arr[i]}`)
// }

// ---------- FOR-OF LOOP ----------
// let arr = ['name', false, 20, null, 'surname'];
// for(let element of arr) {
//     console.log(element)
// }
// DIFFERENCE IS WITH FOR-OF WE CAN'T GET INDEX

// ---------- LENGTH ----------
// LENGTH IS A LAST ELEMENT + 1
// let arr = ['a', 'b', 'c'];
// console.log(arr.length);
// arr[3] = 'd';
// console.log(arr)
// console.log(arr.length);
// arr[10] = 'something';
// console.log(arr.length);
// console.log(arr);
// console.log(arr[7]);
// DONT USE THIS CASE

// ---------- WE CAN CHANGE LENGTH (NOT RECOMEDED) ----------
// let arr = ['a', 'b', 'c', 'd'];
// console.log(arr.length);
// arr.length = 10;
// console.log(arr)
// console.log(arr.length);
// arr.length = 2;
// console.log(arr);
// console.log(arr.length);

// USE IT ONLY FOR AMPTY WHALL ARRAY
// arr.length = 0;
// console.log(arr);
// console.log(arr.length);

// ---------- NEW ARRAY() ----------
// let arr = new Array(); 
// console.log(arr);

// ---------- ARRAY IN ARRAY ----------
// let arr = [[1, 'some', 3], [true, 7, 9], [1, 0, 8]];
// console.log(arr[0]);
// console.log(arr[0][1]);

// IT USED FOR MATRIX
// let arr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
// ];
//
// console.log(arr[0][1]);
// console.log(arr[2][0]);

// ---------- METHOD TOSTRING FOR ARRAY ----------
// let arr = [5,true, null, 'string'];
// console.log(arr.toString());
// console.log([5,7] + 5);
// console.log([5,7] + '5');
// console.log([5,7] + NaN);
// console.log([5,7] + null);
// console.log([5,7] + false);
// console.log([5,7] + 'asdasd');
// console.log([] + 'asdasd');

// ---------- DIFERENCE BETWEEN PRIMITIVES AND ARRAYS(OBJECTS) ----------

// let someArr = ['Armenia', 5, null, true];
// someArr[2] = 'Russia';
// someArr.push(111);
// let x = 'str';
// console.log(x[0]);
// x[0] = 'a'
// console.log(x);

// ---------- CONST VARIABLES ARRAY ----------
// const arr = [5,7];
// arr.push(9);
// console.log(arr)

// ---------- ARRAY IS A REFERENCE TYPE ----------
// let num = 58;
// let otherNum = num; //*THERE ARE TWO NUMBERS 58
// otherNum = 1;
// console.log(num, otherNum);
// num = 158;
// console.log(num, otherNum)

// let x = [5, 7];
// let y = x;
// console.log(y);
// console.log(x); 

// x.push(15);
// console.log(x);
// console.log(y);


//----COMPARING---
// let x = [5,7];
// let y = [5,7];
// console.log(x === y);

// let x = [5,7];
// let y = x;
// console.log(x === y);

// --------- SPREAD ---------
// ...
// let arr1 = [5, 7, 9];
// let arr2 = [...arr1];
// console.log(arr2);
// let arr3 = [12, 'some', true];
// let res = [...arr1, ...arr3]
// console.log(res);
// let arr = [7, 8, -1, 0];
// console.log(Math.max(...arr))

// --------- HOW TO CLONE DEEP ---------
//---- WITH FOR LOOP----
//-----WITH SPREAD OPERATOR-----
// let x = [4, 7, 8];
// let y = [...x];
// console.log(y);
// x.push(7,9,8);
// console.log(x);
// console.log(y);




