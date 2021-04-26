const numberArray = [3, 9, 4, 2, 8]

/**
 * ! map method
 * @param { callback(value, index, array) }
 * @return { new Array }
 * * map() touch every array elements and modify every elements from callback func and generate a new array with modified elements
 */
const sqrArray = numberArray.map((value) => value ** 2)
console.log(sqrArray)

// custom map function
function customMap(array, callback) {
    const newArray = []
    for (let i = 0; i < array.length; i++) {
        let temValue = callback(array[i], i, array)
        newArray.push(temValue)
    }
    return newArray
}

const sqrArray2 = customMap(numberArray, (value) => value ** 2)
console.log(sqrArray2)
