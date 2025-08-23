// Distance between two points

// Formula:  D = Math.sqrt((x2-x1)^2 + (y2-y1)^2)


function findDistance(x1, y1, x2, y2) {
    let x = x2 - x1
    let y = y2 - y1
    let d = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))
    return d;
}

// console.log(findDistance(3, 4, 7, 1))

// =========================

function findDistance2(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
}

console.log(findDistance2(3, 4, 7, 1))



