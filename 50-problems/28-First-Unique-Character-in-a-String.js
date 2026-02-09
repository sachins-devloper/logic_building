// 387. First Unique Character in a String

// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

 

// Example 1:

// Input: s = "leetcode"

// Output: 0

// Explanation:

// The character 'l' at index 0 is the first character that does not occur at any other index.

// Example 2:

// Input: s = "loveleetcode"

// Output: 2

// Example 3:

// Input: s = "aabb"

// Output: -1

const s = "loveleetcode";
// const s = "aabb";

const firstUnique = (s) => {
    let freq = {};

    for (let ch of s) {
        freq[ch] = (freq[ch] || 0) + 1;
    }

    for (let i = 0; i < s.length; i++){
        if (freq[s[i]] == 1) {
            return i;
        }
    }
    return -1
}

// const firstUnique = (s) => {
//     let count = 0;
//     let first = s[0];

//     for (let ch of first) {
//         if (ch == first) {
//             count++
//         }
//     }
//     return count
// }

let test = firstUnique(s);
console.log(test);
