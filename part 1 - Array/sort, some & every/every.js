const array = [3, 39, 92, 41, 29, 33, -1]

/**
 * ! every method
 * @param { callback(value, index, array) => condition }
 * @return { boolean }
 * * if every elements maintain the condition it returns true, otherwise false
 */

let isEveryPositive = array.every((value) => value <= 0)
let isEveryEven = array.every((value) => value % 2 === 0)
console.log(isEveryPositive, isEveryEven)
