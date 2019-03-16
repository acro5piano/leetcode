/*
 * input: [1,2,3]
 * output: [[1,2], [2,3], [3,1]]
 */
function getSets(set: number[]): number[][] {
  return set.map(n => set.filter(x => x !== n))
}

/*
 * input: [1,2]
 * output: [[1,2], [1], [2]]
 *
 * input: [1,2,3]
 * output:
 *   [[1,2,3,], ...getSets([1,2]), ...getSets([2,3]), ...getSets([3,1])]
 *   -> [[1,2,3,], ...[[1], [2]], //]
 */
function getSetsRecursive(set: number[]): number[][] {
  const children: number[][] = []
  const newSet = getSets(set)
  newSet.forEach(s => {
    getSetsRecursive(s).forEach(x => {
      if (!includesArray(children, x)) {
        children.push(x)
      }
    })
  })
  return [...children, ...newSet]
}

function arrayEqual(array1: number[], array2: number[]): boolean {
  if (array1.length !== array2.length) {
    return false
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false
    }
  }
  return true
}

/*
 * input: [[1,2,3], [1,2]], [1,2]
 * output: true
 *
 * input: [[1,2,3], [1,2]], [1,3]
 * output: false
 */
function includesArray(array1: number[][], array2: number[]): boolean {
  for (let i = 0; i < array1.length; i++) {
    if (arrayEqual(array1[i], array2)) {
      return true
    }
  }
  return false
}

function subsetsOfSet(set: number[]) {
  const res = getSetsRecursive(set)
  return [set, ...res]
}

console.log('--- case [1] ---')
console.log(subsetsOfSet([1])) // -> [[1], [2], [1,2]]

console.log('--- case [1,2] ---')
console.log(subsetsOfSet([1, 2])) // -> [[1], [2], [1,2]]

console.log('\n--- case [1,2,3] ---')
console.log(subsetsOfSet([1, 2, 3]))

console.log('\n--- case [1,2,3,4] ---')
console.log(subsetsOfSet([1, 2, 3, 4]))
