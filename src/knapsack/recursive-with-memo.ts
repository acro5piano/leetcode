import { Item, bigExample, example } from './utils'

const dpMemo: number[][] = Array(1000).fill([])

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

  const remembered = dpMemo[itemIndex] && dpMemo[itemIndex][currentCapacity]
  if (remembered) {
    // console.log(remembered)
    return remembered as number
  }

  if (itemIndex === items.length) {
    return 0
  }
  if (currentCapacity < currentItem.weight) {
    return next()
  }
  const res = Math.max(next(), includeCurrentAndNext())
  dpMemo[itemIndex][currentCapacity] = res

  return res
}

console.log(knapsackRecursiveWithMemo(8, example)) // => 91
console.log(knapsackRecursiveWithMemo(500, bigExample))
