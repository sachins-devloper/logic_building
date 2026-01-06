// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

 

// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// Example 2:

// Input: jewels = "z", stones = "ZZ"
// Output: 0
 

// Constraints:

// 1 <= jewels.length, stones.length <= 50
// jewels and stones consist of only English letters.
// All the characters of jewels are unique.

let jewels = "aA", stones = "aAAbbbb";
// let jwlSet = new Set(jewels);
// console.log(typeof jwlSet);




// ----------------------------------------------------------

// function findString(jewels, stones) {
//     let count = 0;
//     let jwlSplit = jewels.split('');
//     let stoneSplit = stones.split('');

//     for (let i = 0; i < jwlSplit.length; i++){
//         for (let j = 0; j < stoneSplit.length; j++){
//             if (jwlSplit[i] == stoneSplit[j]) {
//                 count++;
//             }
//         }
//     }

//     return count;
// }

// let test = findString(jewels, stones);
// console.log(test);

function findString1(jewels, stones) {
    let count = 0;
    let jewelSet = new Set(jewels);

    for(let stone of stones){
        if (jewelSet.has(stone)) {
            count++;
        }
    }

    return count;
}

let test = findString1(jewels, stones);
console.log(test);
