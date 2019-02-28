function hasSubsetSum(target: number, inputs: number[], currentIndex = 0, currentSum = 0): boolean {
  const currentInput = inputs[currentIndex]
  const nextSum = currentInput + currentSum

  if (target === currentSum) {
    return true
  }
  if (currentIndex === inputs.length) {
    return false
  }
  if (nextSum > target) {
    return hasSubsetSum(target, inputs, currentIndex + 1, currentSum)
  }
  return hasSubsetSum(target, inputs, currentIndex + 1, nextSum)
}

console.log(hasSubsetSum(10, [4, 6])) // => true
console.log(hasSubsetSum(10, [2, 6, 5, 2])) // => true
console.log(hasSubsetSum(10, [2, 4, 7])) // => false

const largeArray = Array(1000)
  .fill(0)
  .map(() => Math.floor(Math.random() * 10000))
console.log(hasSubsetSum(10000000, largeArray)) // => true
