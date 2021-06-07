const arr = [9, 2, 7, 3, 2, 9, 13, 11, 10]

/**
 * @function bubbleSort
 * @param {array} array
 * @return { array } sorted array
 */
const bubbleSort = (array) => {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }
    }
}

console.log('Unsorted Array: \n', arr)
bubbleSort(arr)
console.log('Sorted Array with Ascending: \n', arr)
