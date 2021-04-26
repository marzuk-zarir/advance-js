const fs = require('fs')
const array1 = [45, 93, 80, 13, 34]

/**
 * ! reduce method
 * ? { callback(prev, next), initial_value: optional }
 * ? return { callback }
 * * initial_value is primary array value
 */
const totalNumber = array1.reduce((prev, next) => prev + next)
const highestNumber = array1.reduce((prev, next) => Math.max(prev, next))
console.log(totalNumber, highestNumber)

// ! reduce algorithm
const myReduce = (callback, array, initializer = 0) => {
    for (let i = 0; i < array.length; i++) {
        initializer = callback(initializer, array[i])
    }
    return initializer
}

// total number
const totalNumber2 = myReduce((prev, next) => {
    return prev + next
}, array1)

// highestNumber
const highestNumber2 = myReduce((prev, next) => {
    return Math.max(prev, next)
}, array1)
console.log(totalNumber2, highestNumber2)
