// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.



// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2


let nums = [2, 2, 1, 1, 1, 2, 2];

const majority = (nums) => {
    let map = {};

    for (let num of nums) {
        map[num] = (map[num] || 0) + 1;
        if (map[num] > nums.length / 2) {
            return num;
        }
    }

    // return ;
}


let test = majority(nums);
console.log(test);
