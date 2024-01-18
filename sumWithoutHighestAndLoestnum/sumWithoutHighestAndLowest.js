// Description:
// Task
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing, nil etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

let arr1 = [];
let arr2 = [1];
let arr3 = [1, 2]
let arr4 = [-6, -20, -1, -10, -12]
let arr5 = null
let arr6 = [-6, 20, -1, 10, -12]

const sumArray = (array) => {
    if (array === null || array === undefined || array.length < 2) {
        return 0
    }
    newArr = array.sort((a, b) => {
        return a - b;
    }).slice(1, -1);
    return newArr.reduce((a, e) => {
        return a + e;
    }, 0)
}

console.log(sumArray(arr1));
console.log(sumArray(arr2));
console.log(sumArray(arr3));
console.log(sumArray(arr4));
console.log(sumArray(arr5));
console.log(sumArray(arr6));
