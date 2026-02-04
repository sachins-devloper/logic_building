// console.log("Hello world");

// const greeting = (name) => {
//     return `Hello ${name}`;
// }

// let test = greeting("Sachin");
// console.log(test);

// let obj = {

// }

// let arr = [2, 51, 6, 3, 2, 7, 8, 9, 2, 4, 1, 5, 4, 2, 9, 0, 1];

// let obj = {};

// for (let val of arr){
//     obj[val] = (obj[val] || 0) + 1
// }

// let arr1 = []
// let max = 0;
// let maxNum = null;
// for (let [val, count] of Object.entries(obj)) {
//     if (count > max) {
//         max = count;
//         maxNum = Number(val);
//     }
// }


// // console.log(obj);
// console.log(`${max} - ${maxNum}`);

// let nums = [5, 7, 7, 8, 8, 10], target = 7;

// function searchVal(nums) {
//     let ans = false;
    
//     for (let i = 0; i < nums.length; i++){
//         if (nums[i] == target) {
//             return true;
//         }
//     }

//     return ans;
// }

// let test = searchVal(nums, target);
// console.log(test);


// var searchRange = function(nums, target) {
//     let map = new Map();

//     for (let i = 0; i < nums.length; i++  ){
//         let complement = target - nums[i];
//         if (map.has(complement)) {
//             return [map.get(complement), i]
//         }
//         map.set(nums[i], i)
//     }
//     return [];
// };

// let test = searchRange(nums, target);
// console.log(test);


let nums = [5, 7, 7, 8, 8, 10];

function countOf(nums) {
    let count = {};

    for (let num of nums){
        count[num] = (count[num] || 0) + 1 ; 
    }

    return count;
}

let test = countOf(nums);
console.log(test);
