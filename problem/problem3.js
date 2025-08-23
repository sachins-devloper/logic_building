/*
    Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9.
X can be placed before L (50) and C (100) to make 40 and 90.
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.



Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.
Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 */


function find(roman) {
    const map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let total = 0;
    let value = roman.toUpperCase();

    for (let i = 0; i < value.length; i++) {
        let curr = map[value[i]];
        let next = map[value[i + 1]];

        if (next && curr < next) {
            total -= curr; // subtract if smaller before larger
        } else {
            total += curr;
        }
    }
    return total;
}


console.log(find("IV"));   // 4
console.log(find("XII"));  // 12
console.log(find("IX"));   // 9
console.log(find("MCMXC")); // 1990


// const I = 1;
// const V = 5;
// const X = 10;

// console.log(X + V);


// function find(x) {
//     let total = 0;
//     let value = String(x).toUpperCase().split('');
//     for (let i = 0; i < x.length; i++){
//         total+=value[i]
//     }
//     return total;
// }

// console.log(find('IV'))
