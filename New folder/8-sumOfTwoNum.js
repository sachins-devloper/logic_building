// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]



let nums = [2, 7, 11, 15];
let target = 9;

function sumOfTwo(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i)
    }

    return[];
}

let test = sumOfTwo(nums, target)


console.log(test);

// let myMap = new Map([
//     ["name", "sachin"],
//     ["age", 21],
//     ["role", "developer"]
// ]);

// myMap.set('Team', 'Mobile App');
// let test = myMap.get('name')
// let test1 = myMap.has("ks")

// console.log(myMap)
// console.log(test1);