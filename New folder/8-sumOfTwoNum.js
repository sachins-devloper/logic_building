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
let target = 13;

function sumOfTwo(nums, target) { 
    for (let i = 0; i < nums.length; i++){
        for (let j = i + 1; nums.length; j++){
            if (nums[i] + nums[j] == target) {
                return [i, j];
            } else {
                return []
            }
        }
    }
}


let test = sumOfTwo(nums, target)
console.log(test);

// function sumOfTwo(nums, target) {
//     const map = new Map();
//     for (let i = 0; i < nums.length; i++) {
//         let complement = target - nums[i];
//         if (map.has(complement)) {
//             return [map.get(complement), i];
//         }
//         map.set(nums[i], i)
//     }

//     return[];
// }

// let test = sumOfTwo(nums, target)


// console.log(test);

let myMap = new Map([
    ["name", "sachin"],
    ["age", 21],
    ["role", "developer"]
]);

myMap.set('Team', 'Mobile App');
// let test = myMap.get('name')
// let test1 = myMap.has("ks")

// console.log(myMap instanceof Map)
// console.log(test1);

// myMap.forEach((idx, val) => {
//     console.log(`${idx} = ${val}`)
// } )

let fruits = new Map();
fruits.set('Apple', 500);
fruits.set('Orange', 300);
fruits.set('Banana', 500);
fruits.set('Pine', 500);

// console.log(fruits);

// fruits.forEach((key, val) => {
//     console.log(`${val} = ${key}`);
// })
