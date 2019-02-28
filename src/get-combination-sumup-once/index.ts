export type Answer = number[] | false

function getCombinationSumUpNoTwice(target: number, inputs: number[]): Answer {
  const memo = new Set<number>()

  for (const value of inputs) {
    const pairCandidate = target - value
    if (memo.has(pairCandidate)) {
      return [value, pairCandidate]
    }
    memo.add(value)
  }

  return false
}

console.log(getCombinationSumUpNoTwice(10, [1, 5, 8, 9])) // => [1, 9]
console.log(getCombinationSumUpNoTwice(25, [16, 5, 4, 9])) // => [16, 9]
console.log(getCombinationSumUpNoTwice(6, [16, 5, 4, 9])) // => false
