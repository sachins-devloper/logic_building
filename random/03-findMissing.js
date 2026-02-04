// find Missing

//  [3,4,1]

let arr = [3, 0, 1];

function findMissing(arr) {
    let n = arr.length;
    let expected = (n * (n + 1)) / 2;
    let actualSum = arr.reduce((sum, curr) => sum + curr, 0);
    return expected - actualSum;
}

let test = findMissing(arr);
console.log(test);

