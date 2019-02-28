interface Item {
  value: number
  weight: number
}

function range(length: number) {
  return Array(length)
    .fill(0)
    .map((_, i) => i)
}

function knapsackDp(knapsackCapacity: number, items: Item[]) {
  const dp: number[][] = []
  dp[0] = []
  range(knapsackCapacity).forEach(c => {
    dp[0][c] = 0
  })

  console.log(dp)
  console.log(items)
}

function knapsackRecursive(
  knapsackCapacity: number,
  items: Item[],
  itemIndex: number = 0,
  currentCapacity: number = knapsackCapacity,
): number {
  const currentItem = items[itemIndex]
  const next = () => knapsackRecursive(knapsackCapacity, items, itemIndex + 1, currentCapacity)
  const includeCurrentAndNext = () =>
    knapsackRecursive(
      knapsackCapacity,
      items,
      itemIndex + 1,
      currentCapacity - currentItem.weight,
    ) + currentItem.value

  if (itemIndex === items.length) {
    return 0
  }
  if (currentCapacity < currentItem.weight) {
    return next()
  }
  return Math.max(next(), includeCurrentAndNext())
}

const example = [
  { value: 3, weight: 2 },
  { value: 2, weight: 1 },
  { value: 6, weight: 3 },
  { value: 1, weight: 2 },
  { value: 3, weight: 1 },
  { value: 85, weight: 5 },
]

console.log(knapsackRecursive(8, example)) // => 91
