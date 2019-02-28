import { Item, bigExample, example } from './utils'

const dpMemo = new Map<string, number>()

function knapsackRecursiveWithMemo(
  knapsackCapacity: number,
  items: Item[],
  itemIndex: number = 0,
  currentCapacity: number = knapsackCapacity,
): number {
  const currentItem = items[itemIndex]
  const next = () =>
    knapsackRecursiveWithMemo(knapsackCapacity, items, itemIndex + 1, currentCapacity)
  const includeCurrentAndNext = () =>
    knapsackRecursiveWithMemo(
      knapsackCapacity,
      items,
      itemIndex + 1,
      currentCapacity - currentItem.weight,
    ) + currentItem.value

  const key = JSON.stringify({ itemIndex, currentCapacity })
  if (dpMemo.has(key)) {
    // console.log(key)
    return dpMemo.get(key) as number
  }

  if (itemIndex === items.length) {
    return 0
  }
  if (currentCapacity < currentItem.weight) {
    return next()
  }
  const res = Math.max(next(), includeCurrentAndNext())
  dpMemo.set(key, res)
  return res
}

console.log(knapsackRecursiveWithMemo(8, example)) // => 91
console.log(knapsackRecursiveWithMemo(500, bigExample))
