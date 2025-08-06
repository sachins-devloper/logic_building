// ======================================= try 1
// function isEven(n) {
//     return n % 2 == 0;
// }

// let n = 41;
// if (isEven(n)) {
//     console.log(`${n} is even. So true`);
// } else {
//     console.log(`${n} is Odd. So false`);
// }

// =============================================== Try 2

// let val = 23;
// console.log(isEven(val));

// function isEven(val) {
//     let ans;
//     if (val % 2 == 0) {
//         ans = 'Even'
//     } else {
//         ans = 'Odd'
//     }
//     return ans
// }

// =================================

// A simple JavaScript program to
// check for even or odd

// function isEven(n) {

// n & 1 is 1, then odd, else even
//  if ((n & 1) === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// // Driver code
// let n = 101;
// if (isEven(n)) {
//     console.log("true");
// } else {
//     console.log("false");
// }

// ==========================================
// A simple JavaScript program to
// check for even or odd

// function isEven(n) {

//     if (n == (n >> 1) << 1)
//        return true;
//     else
//        return false;
// }

// // Driver code
// let n = 4;
// if (isEven(n)) {
//     console.log("true");
// } else {
//     console.log("false");
// }

// console.log(Window.Math === Math)

// =======================================

// let num = 10 ** 1000;
// const test = (num === Infinity) ? 'let calls it as Infinity' : `${num}`
// //  console.log(test);
// console.log(1/num);

// console.log(Math.log(0));

// ================================ NaN
// function numCheck(x) {
//     if (isNaN(x) == 1) {
//         console.log('This is Not a number');
//     } else {
//         console.log(`${x} is a Number`);
//     }
// }

// numCheck('3')

// console.log(isNaN('sd'));

// console.log(NaN ** 0 == 1);/

// let num = 15;
// console.log(num.toString(3));


for (let i = 0; i <= 100; i++){
   console.log(`${i} -> ${i.toString(2)}`);
}
