// Array.prototype.reverse = function reverse() {
//   return this.reduce((car, cur) => [cur, ...car], [])
// }

// Array.prototype.reverse = function reverse(reversed = [], rest = this) {
//   if (rest.length === 0) {
//     return reversed
//   }
//   return reverse([...rest.slice(0, 1), ...reversed], rest.slice(1))
// }

// What is wrong with this code?
Array.prototype.reverse = function reverse([x, ...xs] = this, reversed = []) {
  if (!x) {
    return reversed
  }
  return reverse(xs, [x, ...reversed])
}

// Array.prototype.reverse = function reverse() {
//   let reversed = []
//   for (const elm of this) {
//     reversed = [elm, ...reversed]
//   }
//   return reversed
// }

console.log([0, 2, 3].reverse())
console.log([1, 2, 3].reverse())
console.log([1, {}, 3].reverse())
