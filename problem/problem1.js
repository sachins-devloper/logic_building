/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

*/


function findIndex(nums, target) {
    let answerArr = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                answerArr.push(i, j)
            }
        }
    }
    return answerArr;
}


let nums = [2, 7, 11, 15]
let target = 9;

console.log(findIndex(nums, target));




// ================ optimized solution ================== //

function twoSum(nums, target) {

    let map = {};  // stores {num: index}

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map[complement] !== undefined) {
            return [map[complement], i];
        }
        map[nums[i]] = i;
    }

}




// practice  == Map is kind of data structure store as key-value pair
 

let map = new Map([
    ['name', 'sachin'],
    ['age', 21],
    ['year', 'final year']

]);

// console.log(map);

map.set('role', 'developer');

console.log(map);

// console.log(map.has('role'));
// console.log(map.has('test'));

// map.delete('year');

// console.log(map)

// map.clear()

// console.log(map.size);

for (let [key, value] of map) {
    console.log(key, value);
}