// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9

const numbers = [1, 2, 2]

const squareSum = (numbers) => {
    // let total = 0;
    // numbers.forEach((e, i) => {
    //     total += e**2
    // })
    // return total

    return numbers.reduce((sum, n) => sum += n ** 2, 0)
}

console.log(squareSum(numbers))