// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

//     Example
// For input[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

let input
// const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]

const countPositivesSumNegatives = (input) => {
    let countPos = 0;
    let sumNeg = 0
    if (input === null || input === undefined) {
        return []
    }
    input.forEach((e, i) => {
        return e > 0 ? countPos++ : sumNeg += e
    })
    arr = [countPos, sumNeg]
    if (arr[0] === 0 && arr[1] === 0) {
        return []
    }
    return arr
}

console.log(countPositivesSumNegatives(input))