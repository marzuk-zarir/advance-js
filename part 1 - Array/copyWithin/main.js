const programing = [
    'Python',
    'Java',
    'JavaScript',
    'C++',
    'Rust',
    'Ruby',
    'Php',
]

/**
 * ! CopyWithin Method
 * @param { target_index, start_index, end_index }
 * @return { void }
 * * copyWithin copy a element between start index number and end index number, and copy this element into the target index number
 * * if target position is greater than or equal to starting position copyWithin() doesn't work copy
 * * this method doesn't change original array's length
 */
programing.copyWithin(3, 0, 1)
console.log(programing)

// if target position is greater than or equal to starting position copyWithin() doesn't work copy
programing.copyWithin(7, 2, 3)
console.log(programing) // doesn't copy
