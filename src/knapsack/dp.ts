import { Item, range, bigExample, example } from './utils'

function dp(knapsackCapacity: number, items: Item[]) {
  const dpTable: Array<number[]> = Array(items.length)

  range(knapsackCapacity).forEach(c => {
    if (!dpTable[items.length]) {
      dpTable[items.length] = []
    }
    dpTable[items.length][c] = 0
  })

  for (let i = items.length - 1; i >= 0; i--) {
    for (let j = 0; j <= knapsackCapacity; j++) {
      const item = items[i]
      if (!dpTable[i]) {
        dpTable[i] = []
      }
      if (j < item.weight) {
        dpTable[i][j] = dpTable[i + 1][j]
      } else {
        dpTable[i][j] = Math.max(
          dpTable[i + 1][j] || 0,
          dpTable[i + 1][j - item.weight] + item.value,
        )
      }
    }
  }

  return dpTable[0][items.length + 1]
}

console.log(dp(8, example)) // => 91
console.log(dp(500, bigExample))
