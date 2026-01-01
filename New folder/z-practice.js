
// let arr = [1, 2, 46, 2, 5, 7, 0];
// console.log(arr.includes(5));





// // Switch case

// // let day = 7;

// // switch (new Date().getDay() + 1) {
// //     case 1:
// //         console.log("Its sunday");
// //         break;
// //     case 2:
// //         console.log("Its Monday");
// //         break;
// //     case 3:
// //         console.log("Its Tuesday");
// //         break;
// //     case 4:
// //         console.log("Its Wednesday");
// //         break;
// //     case 5:
// //         console.log("Its Thursday");
// //         break;
// //     case 6:
// //         console.log("Its Friday");
// //         break;
// //     case 7:
// //         console.log("Its Saturday");
// //         break;
// //     default:
// //         console.log("Enter the day");

// // }

// // ternary operator

// // let age = 19;
// // age = age > 18 ? 'Eligible' : 'not Eligible';

// // console.log(age);

// // let isLogIn = false;
// // let message = isLogIn ? 'Welcome' : 'Please Log in';
// // console.log(message);

// //  && condition

// // let driveAge = 19;
// // let country = 'INDIA';

// // if (driveAge == 19 || country == 'USA') {
// //     console.log("you can drive");
// // } else {
// //     console.log("you can't drive");
// // }


// // do while
// // let i = 5;
// // do {
// //     console.log(i);
// //     i++;

// // } while (i <= 3);


// //  for loop
// // let i ;
// // for (i =0; i < 10; i += 2){
// //     console.log(i);
// // }

// // let myName = "sachin";
// // console.log(myName.at(0));

// function getReminder(a, b) {
//     return a % b;
// }

// // let test = getReminder(10, 3);
// // console.log(test);


// function checkStrict(a, b) {

//     let valTest = a == b ? true : false;
//     let typeTest = a === b ? true : false;

//     // let valTest;
//     // let typeTest;
//     // if (a == b) {
//     //     valTest = true;
//     // } else {
//     //     valTest = false;
//     // }

//     // if (a === b) {
//     //     typeTest = true;
//     // } else {
//     //     typeTest = false;
//     // }

//     // return {
//     //     valTest: valTest,
//     //     typeTest: typeTest
//     // }
//     return {
//         valTest, typeTest
//     }
// }

// // let test = checkStrict(3,3);
// // console.log(test);


// function canVote(age, citizen) {
//     let checkAge = age > 18 ? true : false;
//     let checkCitizen = citizen == "Indian" ? true : false;

//     return {
//         age: checkAge,
//         citizen: checkCitizen
//     }
// }

// // console.log(canVote(20, "Indin"));
// // console.log(canVote(16, "Indian"));

// // let salary = 50000;
// // let increament = 10;


// function salaryIncrease(salary, increament) {
//     let formula = salary / increament;
//     let income = salary += formula;

//     return {
//         formula, income
//     }
// }

// // console.log(salaryIncrease(50000, 10));

// function checkNum(num) {
//     let result = num % 2 == 0 ? "even" : "odd";
//     return result;
// }

// // console.log(checkNum(10))
// // console.log(checkNum(7))

// function getGrade(marks) {
//     let mark;
//     if (marks >= 90) {
//         mark = 'A';
//     } else if (marks >= 80 && marks <= 89) {
//         mark = 'B';
//     } else if (marks >= 70 && marks <= 79) {
//         mark = 'C';
//     } else {
//         mark = 'FAIL';
//     }

//     return mark;
// }

// // console.log(getGrade(89))
// // console.log(getGrade(90))
// // console.log(getGrade(79))
// // console.log(getGrade(52))

// function largest(valA, valB) {
//     let res;
//     if (valA > valB) {
//         res = valA;
//     } else {
//         res = valB;
//     }

//     return res;
// }

// // console.log(largest(100, 20));

// function getDay(num) {
//     let day;
//     switch (num) {
//         case 1:
//             day = 'Sunday';
//             break;
//         case 2:
//             day = 'Monday';
//             break;
//         case 3:
//             day = 'Tuesday';
//             break;
//         case 4:
//             day = 'Wednesday';
//             break;
//         case 5:
//             day = 'Thursday';
//             break;
//         case 6:
//             day = 'Friday';
//             break;
//         case 7:
//             day = 'Saturday';
//             break;
//         default:
//             day = "Enter valid validnumber"
//     }
//     return day;
// }

// // console.log(getDay(7));

// function calculate(a, b, op) {
//     let res;

//     switch (op) {
//         case '+':
//             res = a + b;
//             break;
//         case '-':
//             res = a - b;
//             break;
//         case '*':
//             res = a * b;
//             break;
//         case '/':
//             res = a / b;
//             break;
//     }

//     return res;
// }

// // console.log(calculate(10, 20, '+'));
// // console.log(calculate(10, 20, '-'));
// // console.log(calculate(10, 20, '*'));
// // console.log(calculate(10, 20, '/'));

// function fizzBuzz(n) {
//     let res;
//     if (n % 3 == 0 && n % 5 == 0) {
//         res = 'FizzBuzz'
//     } else if (n % 3 == 0) {
//         res = 'Fizz';
//     } else if (n % 5 == 0) {
//         res = 'Buzz';
//     } else {
//         res = 'Not valid';
//     }

//     return res;
// }

// console.log(fizzBuzz(15))


// function outer() {
//     let count = 0;
//     return function inner() {
//         count++;
//         console.log(count);
//     }
// }

// outer()
// outer()

// const counter = outer();
// counter()
// counter()
// counter()

// setTimeout(() => {
//     console.log('Hello');
// }, 2000);

// let url = 'https://fakestoreapi.com/products/1';

// const newpromise = new Promise((resolve, reject) => {
//     if (url) {
//         resolve('Data fetched');
//     } else {
//         reject('Data not fetched');
//     }
// })

// newpromise
//     .then((val) => {
//         console.log(val)
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// async function name(params) {
//     const data = await fetch(url);
//     const res = await data.json();
//     console.log(res);
// }


// function outer() {
//     let count = 0;
//     return function inner() {
//         count++
//         console.log(count);
//     }
// }

// const counter = outer();
// counter()
// counter()
// counter()


// const myPromise = new Promise((resolve, reject) => {
//     let success = false;
//     if (success) {
//         resolve("success")
//     } else {
//         reject("Not successs")
//     }
// })

// myPromise
//     .then((val) => {
//         console.log(val);
//     })
//     .catch((err) => {
//         console.log(err)
//     })


// function fetchUser() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({ id: 1, name: "sachin" });
//         }, 1000)
//     })
// }

// fetchUser()
//     .then(val => console.log(val))
//     .catch(err => console.log(err));

// const promise1 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Anu car')
//             resolve('Anu finished')
//         }, 3000);
//     })
// }

// const promise2 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Jai car')
//             resolve('Jai finished')
//         }, 1000);
//     })
// }


// const promise3 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Kani car')
//             resolve('Kani finished')
//         }, 2000);
//     })
// }

// Promise.allSettled([promise1(), promise2(), promise3()])
//     .then(val => console.log(val))
//     .catch(val => console.log(val));


// let url = 'https://fakestoreapi.com/products/1';

// async function getData(params) {
//     const user = await fetch(url);
//     const data = await user.json();
//     // console.log(data)
//     return data;
// }
// // getData()
// const { id, title, image } = await getData()

// // const title = user.title

// console.log(image)


// function countFreq(str) {
//     const freq = {};
//     for (let char of str) {
//         freq[char] = (freq[char] || 0) + 1;
//     }
//     return freq;
// }

// const letter = 'words'
// console.log(letter.split('').reverse().join(''))



// function palindrome(str) {
//     return str === str.split('').reverse().join('');
// }

// let test = palindrome('akka');
// console.log(test);


// let test = Math.max(...[10, 25, 35])
// console.log(test);



// let test = countFreq('stringi');
// console.log(test)

// function countString(str) {
//     let count = 0;
//     for (let char of str) {
//         count ++;
//     }
//     return count;
// }

// let test = countString("strsx");
// console.log(test);


// function freqCount(str) {
//     const freq = {};

//     for (let char of str) {
//         freq[char] = (freq[char]|| 0 )+ 1
//     }

//     return freq;
// }


// const test = freqCount("str")
// console.log(test);


function greet(names, callback) {
    callback(names);
}

greet('sachin', function(names) {
    console.log(`hello ${names}`)
})