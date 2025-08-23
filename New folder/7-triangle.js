// Check whether triangle is valid or not if sides are given

/* Condition
(a+b)>c
(a+c)>b
(b+c)>a

*/

function checkTriangle(a, b, c) {
    if ((a + b > c) && (a + c > b) && (b + c > a)) {
        return true
    } else {
        return false
    }

}
// ===================

function checkShort(a, b, c) {
    return ((a + b > c) && (a + c > b) && (b + c > a))
}

console.log(checkTriangle(7, 10, 5))
console.log(checkTriangle(1, 10, 12))

// =======================

console.log(checkShort(7, 10, 5))
console.log(checkShort(1, 10, 12))
