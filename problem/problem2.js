/* 
 Given an integer x, return true if x is a palindrome, and false otherwise.

 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

*/



let final = "";
let x = 101;
let value = String(x);
let splited = value.split('').reverse()
splited.forEach((x) => {
    final += x;
})


// console.log(typeof value);
// console.log(x);
// console.log(final);



function checkPlaindrome(x) {
    let value = String(x)
    let final = "";
    let split = value.split('').reverse();
    split.forEach(x => final += x);
    if (x == final && x > 0 && value.length > 1) {
        console.log('It is palindrome');
    } else {
        console.log('It is not a palindrome');
    }
}

checkPlaindrome(121)
checkPlaindrome(-121)
checkPlaindrome(10)


// optimized code

function checkPalindrome(x) {
    let value = String(x);
    let reversed = value.split('').reverse().join('');
    
    if (value === reversed && x >= 0 && value.length > 1) {
        console.log(x + " is a palindrome");
    } else {
        console.log(x + " is not a palindrome");
    }
}

checkPalindrome(121);   // It is a palindrome
checkPalindrome(-121);  // It is not a palindrome
checkPalindrome(10);    // It is not a palindrome



function isPalindrome(x) {
    let value = String(x);
    let reversed = value.split('').reverse().join('');
    return value == reversed
}

console.log(isPalindrome(121))
console.log(isPalindrome(-121))
console.log(isPalindrome(10))