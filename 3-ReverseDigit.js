function reverseNum(n) {
    let value = n.toString()
    let sum = 0;

    for (let x of value) {
        sum += Number(x)
    }
    return sum;
}

console.log(reverseNum(8405))