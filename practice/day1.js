// console.log("Hello world");

// const greeting = (name) => {
//     return `Hello ${name}`;
// }

// let test = greeting("Sachin");
// console.log(test);

// let obj = {

// }

let arr = [2, 51, 6, 3, 2, 7, 8, 9, 2, 4, 1, 5, 4, 2, 9, 0, 1];

let obj = {};

for (let val of arr){
    obj[val] = (obj[val] || 0) + 1
}

// let arr1 = []
let max = 0;
let maxNum = null;
for (let [val, count] of Object.entries(obj)) {
    if (count > max) {
        max = count;
        maxNum = Number(val);
    }
}


// console.log(obj);
console.log(`${max} - ${maxNum}`);


