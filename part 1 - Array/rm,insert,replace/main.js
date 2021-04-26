const array = [1, 2, 3, 4, 5, 6, 7, 8]

// ! INSERT
// insert first index of array
array.unshift(11)
console.log(`insert first index(11) of array: \n`, array)

// insert last index of array
array.push(9)
console.log(`insert last index(9) of array: \n`, array)

// insert specific index of array
array.splice(5, 0, 111)
console.log(`insert specific index(111) of array: \n`, array)

// ! REMOVE
// remove first index of array
array.shift()
console.log(`insert first index(11) of array: \n`, array)

// remove last index of array
array.pop()
console.log(`insert last index(9) of array: \n`, array)

// remove specific index of array
array.splice(4, 1)
console.log(`insert specific index(111) of array: \n`, array)

// ! REPLACE
// traditional way
array[0] = 999
console.log(`replace array element with traditional way: \n`, array)

// replace with splice method
array.splice(1, 1, 767)
console.log(`replace array element with splice method: \n`, array)
