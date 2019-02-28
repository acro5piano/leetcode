import { Item, bigExample, example } from './utils'

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

console.log(knapsackRecursive(8, example)) // => 91
console.log(knapsackRecursive(8, bigExample))
