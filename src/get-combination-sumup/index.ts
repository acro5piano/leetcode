type Answer = object | false

const memo = new Map<string, number>()

/*
 * e.g) given { 2: 1, 3: 3 }, return 2*1 + 3*3 = 11
 * console.log(getSumFromObj({ 2: 1, 3: 3 }))
 */
function getSumFromObj(obj: any) {
  const key = JSON.stringify(obj)
  const memorized = memo.get(key)
  if (memorized) {
    console.log(key)
    return memorized
  }
  const value = Object.keys(obj).reduce((car, cur: any) => car + cur * obj[cur], 0)
  memo.set(key, value)
  return value
}

function getCombinationSumUpMain(target: number, inputs: number[]): Answer {
  return getCombinationSumUp(target, inputs.sort((x, y) => y - x))
}

/*
 * cost is: (inputs.length)^2
 */
function getCombinationSumUp(
  target: number,
  inputs: number[],
  index = 0,
  res: any = {},
  depth = 0,
): Answer {
  const currentSum = getSumFromObj(res)
  const currentInput = inputs[index]
  const nextSum = currentSum + currentInput

  if (index === inputs.length) {
    return false
  }

  // console.log('  '.repeat(depth) + JSON.stringify({ res, currentInput }))

  if (currentSum === target) {
    return res
  }

  if (nextSum > target) {
    return getCombinationSumUp(target, inputs, index + 1, res, depth + 1)
  }

  const nextRes = { ...res, [currentInput]: res[currentInput] ? res[currentInput] + 1 : 1 }
  const depthFirst = getCombinationSumUp(target, inputs, index, nextRes, depth + 1)
  if (depthFirst) {
    return depthFirst
  }
  return getCombinationSumUp(target, inputs, index + 1, nextRes, depth + 1)
}

console.log(getCombinationSumUpMain(10, [3, 6])) // => false
console.log(getCombinationSumUpMain(11, [3, 2])) // => { 2: 1, 3: 3 }
console.log(getCombinationSumUpMain(11, [2, 3])) // => { 2: 1, 3: 3 }
console.log(getCombinationSumUpMain(29, [9, 12, 5])) // => { 5: 1, 12: 2 }
console.log(getCombinationSumUpMain(17, [3, 4])) // => { 3: 3, 4: 2 }
console.log(getCombinationSumUpMain(201017, [82, 53, 91, 295, 24])) // => { 3: 3, 4: 2 }
