/*
Libs included:
    underscore lodash chai sinon sinon-chai mocha async request q bluebird jsdom
*/

console.log('Hello, world!')

// return a new string that is reversed
function reverseString(str) {
  return str
    .split('')
    .reverse()
    .join('')
}

var str = 'ABCD'
var str2 = reverseString(str)
console.log(str2) // -> "DCBA"
console.log(str) // -> "ABCD"
