const peoples = [
    { fullName: 'A', age: 27 },
    { fullName: 'B', age: 32 },
    { fullName: 'C', age: 21 },
    { fullName: 'D', age: 38 },
    { fullName: 'E', age: 40 },
]

/**
 * ! SORT METHOD
 * @param { callback_func }
 * @return { void }
 */

// SORT ASCENDING ORDER
// vice versa for descending order
peoples.sort((a, b) => {
    if (a.age > b.age) return 1
    else if (a.age < b.age) return -1
    else return 0
})
console.log(peoples)
