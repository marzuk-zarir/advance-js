/**
 * ! 1. join method
 * ! 2. fill method
 * ! 3. contact method
 * ! 4. isArray method
 * ! 5. array from another array
 */

/**
 * ! join method
 * ? params { separator_as_string }
 * ? return { string }
 * * join method add a separator after every array element and print elements as a string but not add separator in last element....
 */
const numberArray = [22, 93, 92, 40, 53]
console.log(numberArray.join(' | ')) // 22 | 93 | 92 | 40 | 53

/**
 * ! fill method
 * ? params { fill_value, starting: optional, ending: optional }
 * ? return { void }
 * * fill array with values
 * * but array should fill with other values before calling fill
 */
const fillArray = [0, 1, 2, 3, 4, 5]
fillArray.fill('marzuk', 2, 4)
console.log(fillArray) // [ 0, 1, 'marzuk', 'marzuk', 4, 5 ]

/**
 * ! concat method
 * ? params { array }
 * ? return { array }
 * * concat two arrays and return a new array
 * note: we can use spreed operator for array contacting
 */
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
console.log(arr1.concat(arr2)) // [ 1, 2, 3, 4, 5, 6 ]
console.log([...arr1, ...arr2]) // [ 1, 2, 3, 4, 5, 6 ]

/**
 * ! isArray method
 * ? params { array }
 * ? return { boolean }
 * * isArray check given arguments is array ?
 */
console.log(Array.isArray(arr2)) // true

/**
 * ! array from another array without reference value
 * * spreed operator(...) generate a new array from another array without calling reference
 */
const array1 = [10, 20, 30]
const array2 = [...array1]
array1[1] = 40
console.log(array1) // [ 10, 40, 30 ]
console.log(array2) // [ 10, 20, 30 ]
