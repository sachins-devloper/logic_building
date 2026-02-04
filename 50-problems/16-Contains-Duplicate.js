// 217. Contains Duplicate
// Easy
// Topics
// premium lock icon
// Companies
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

// Example 1:

// Input: nums = [1,2,3,1]

// Output: true

// Explanation:

// The element 1 occurs at the indices 0 and 3.

// Example 2:

// Input: nums = [1,2,3,4]

// Output: false

// Explanation:

// All elements are distinct.

// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]

// Output: true


let nums = [1,1,1,3,3,4,3,2,4,2, 7]

// let  nums = [1,2,3,4]

// const containsDuplicate = (nums) => {

//     let set = new Set(nums)
//     if (set.size === nums.length) {
//         return true
//     } else {
//         return false
//     }
// }


// const containsDuplicate = nums => new Set(nums).size !== nums.length;


const containsDuplicate = (nums) => {
    let need = new Set();

    for (let num of nums){
        if (need.has(num)) {
            return true;
        }

        need.add(num);
    }

    return false;
}

let test = containsDuplicate(nums);
console.log(test);
