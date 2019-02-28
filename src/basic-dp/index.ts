function nonDp(array: number[]) {
  return array.filter(x => x > 0).reduce((car, cur) => car + cur, 0)
}

function basicDp(array: number[]) {
  const dp: number[] = []
  dp[0] = 0

  array.forEach((value, i) => {
    dp[i + 1] = Math.max(dp[i], dp[i] + value)
  })
  console.log(dp)

  return dp[array.length]
}

console.log(basicDp([7, -6, 9])) // => 16
console.log(basicDp([-9, -16])) // => 0
console.log(basicDp([1, 4, 6, 78, -15, -25, -3])) // => 89
