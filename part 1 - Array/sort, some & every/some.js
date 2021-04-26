const array = [3, 39, 92, 41, 29, 33, -1]

/**
 * ! some method
 * @param { callback(value, index, array) => condition }
 * @return { boolean }
 * * if one element's condition is true, it return true otherwise false
 */

let isPositive = array.some((value, index) => value <= 0)
let isEven = array.some((value, index) => value % 2 === 0)
console.log(isPositive, isEven) // true true
