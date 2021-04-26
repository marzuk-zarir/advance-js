// @ts-check
const matrixA = [
    [1, 3],
    [5, 9],
    [8, 2],
]

const matrixB = [
    [4, 4],
    [6, 1],
    [5, 7],
]

/**
 * @function matrixSum
 * summation of matrix
 * @param {array} array1 - multidimensional array 1
 * @param {array} array2 - multidimensional array 2
 * @returns {array} result - give a multidimensional
 */
const matrixSum = (array1, array2) => {
    const result = []
    for (let i = 0; i < array1.length; i++) {
        const row = []
        for (let j = 0; j < array1[i].length; j++) {
            const result = array1[i][j] + array2[i][j]
            row.push(result)
        }
        result.push(row)
    }
    return result
}

const matrixArray = matrixSum(matrixA, matrixB)
console.log(matrixArray)
