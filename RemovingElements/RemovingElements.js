// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let newArr = []

const removeEveryOther = (arr) => {
    // let newArr = []
    // for(let i = 0; i < arr.length; i++) {
    //     if(i % 2 === 0) {
    //         newArr.push(arr[i])
    //     }
    // }
    // return newArr
    return arr.filter((e, i) => {  
        return i % 2 === 0
    }) 
}

console.log(removeEveryOther(arr))