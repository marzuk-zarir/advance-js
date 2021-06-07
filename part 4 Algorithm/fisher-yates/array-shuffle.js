const rollNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const randomRoll = shuffle(rollNumbers)
console.log(randomRoll)

// ? fisher yates algorithm randomly ordered the element of given array
function shuffle(array) {
    const sortedArray = [...array]

    for (let i = sortedArray.length - 1; i >= 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        // swap value
        ;[sortedArray[i], sortedArray[j]] = [sortedArray[j], sortedArray[i]]
    }

    return sortedArray
}
