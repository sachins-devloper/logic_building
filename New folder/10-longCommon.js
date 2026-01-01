// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".



// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.



function findLongPrefix(strs) {
    if (strs.length == 0) return;
    
    let prefix = "";
    
    for (let i = 0; i < strs[0].length; i++) {
        let char = strs[0][i];
        
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== char) {
                return prefix;
            }
        }
        
        prefix += char;
    }
    
    return prefix;
} 

let arr = ['carry', 'car', 'card'];
let test = findLongPrefix(arr);
console.log(test);





// let obj = {};
// for (let word of arr){
//     // console.log(word)
//     for (let i of word) {
//         obj[i] = (obj[i] || 0) + 1
//     }

// }

// console.log(obj);
