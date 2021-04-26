const Stack = require('./Stack')
const stack = new Stack(5)
const text = 'Hello'
let reverseText = ''

// reverse string of text variable
for (let i = 0; i < text.length; i++) {
    stack.push(text.charAt(i))
}
while (!stack.isEmpty()) {
    console.table(stack)
    reverseText += stack.pop()
}
console.log(`Reversed String's Output: ${reverseText}`)

console.log('\n\n')
console.log('Push Method of Stack Class:')
const stack2 = new Stack(2)
stack2.push('hello world')
console.table(stack2)
stack2.push(true)
console.table(stack2)
