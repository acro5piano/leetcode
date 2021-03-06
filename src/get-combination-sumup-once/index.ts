function getCombinationSumUpNoTwice(target: number, inputs: number[]): Answer {
  const memo = new Set<number>()

  const value = inputs.find(value => {
    if (memo.has(target - value)) {
      return true
    }
    memo.add(value)
    return false
  })
  return value ? [value, target - value] : false
}

console.log(getCombinationSumUpNoTwice(10, [1, 5, 8, 9])) // => [1, 9]
console.log(getCombinationSumUpNoTwice(25, [16, 5, 4, 9])) // => [16, 9]
console.log(getCombinationSumUpNoTwice(6, [16, 5, 4, 9])) // => false
