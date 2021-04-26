const array = [3, 4, 1, 3, 6, 2, 9, 8]

/**
 * ! filter method
 * @param { callback(value, index, array) => condition }
 * @return { array }
 * * if callback func's return value is true, filter method create a new array and push it into the new array
 */

const filterEven = array.filter((value) => value % 2 === 0)
console.log(filterEven) // [ 4, 6, 2, 8 ]

// CUSTOM FILTER FUNCTION
function filter(arr, callback) {
    const newArray = []
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            newArray.push(arr[i])
        }
    }
    return newArray
}
const customFilter = filter(array, (value) => value % 2 === 0)
console.log(customFilter) //[ 4, 6, 2, 8 ]
