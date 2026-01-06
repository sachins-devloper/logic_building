// Given an array of integers nums, return the number of good pairs.

// A pair (i, j) is called good if nums[i] == nums[j] and i < j.

 

// Example 1:

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
// Example 2:

// Input: nums = [1,1,1,1]
// Output: 6
// Explanation: Each pair in the array are good.
// Example 3:

// Input: nums = [1,2,3]
// Output: 0
 
let nums = [1,1,1,1]

// function goodPairs(nums) {
//     let arr = [];
//     for (let i = 0; i < nums.length; i++){
//         for (let j = 0; j < i; j++){
//             if (nums[i] == nums[j]) {
//                 arr.push(nums[i]);
//             }
//         }
//     }

//     return arr.length;
// }

// let test = goodPairs(nums);
// console.log(test);

// function goodPairs2(nums) {
//     let obj = {};
//     let result = 0;
//     for (let num of nums) {
//         if (obj[num]) {
//             result += obj[num];
//             obj[num]++;
//         } else {
//             obj[num] = 1;
//         }
//     }
//     return result;
// }


// let test = goodPairs2(nums);
// console.log(test);

let obj = {};

obj['word'] = 'hello'
console.log(obj);
