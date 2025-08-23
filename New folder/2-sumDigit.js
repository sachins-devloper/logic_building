

function sumDigit(n) {
    let total = 0;

    while (n !== 0) {

        let last = n % 10;

        total += last

        n = Math.floor(n / 10)
    }
    return total;
}

// console.log(sumDigit(123))

// --------------------- Recursive ------------------

function sumDigit2(n) {
    if (n == 0) {
        return 0
    }

    return ((n % 10) + sumDigit2(Math.floor(n / 10)))
}

console.log(sumDigit2(89210));
