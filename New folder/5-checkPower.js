
// Check if a number is a power of another number

function checkPower(x, y) {
    if (y === 1) return true;

    while (y % x == 0) {
        y /= x;
    }
    return y === 1;
}

console.log(checkPower(4,64)) // true
console.log(checkPower(3, 27)) // true
console.log(checkPower(10, 999)) // false
