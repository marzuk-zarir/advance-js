// @ts-check

/**
 * @class Stack
 * @property { number } length
 * @method push(String|Number|Boolean) - push a item in last index
 * @method pop - delete last item of last index
 * @method pointerPosition - return of current pointer position
 * @method isEmpty - returns boolean
 */
class Stack {
    constructor(length) {
        this.MAX_LENGTH = length
        this.list = new Array(this.MAX_LENGTH)
        this.pointer = -1
    }

    push(item) {
        if (this.pointer >= this.MAX_LENGTH) {
            console.log('Stack Overflow')
            return
        }
        this.list[++this.pointer] = item
    }

    pop() {
        if (this.isEmpty()) {
            console.log('Stack Underflow')
            return
        }
        let item = this.list[this.pointer]
        delete this.list[this.pointer]
        this.pointer--
        return item
    }

    pointerPosition() {
        if (this.isEmpty()) {
            console.log('Stack Underflow')
            return
        }
        return this.list[this.pointer]
    }

    isEmpty() {
        return this.pointer < 0
    }
}

module.exports = Stack
