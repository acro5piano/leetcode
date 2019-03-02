/*
 * input: [1,2,3]
 * output: [[0,1], [1,2], [2,3]]
 */
function removeOneElementFromSet(set: number[]): number[] {
  return set.slice(-1)
}

function subsetsOfSet(set: number[], index = set.length, res: number[] = []): any {
  if (index === 0) {
    return []
  }
  if (index === 1) {
    return [[set[0]], subsetsOfSet(set, index - 1)]
  }
  if (index === 2) {
    return [set, ...subsetsOfSet(set, index - 1)]
  }
  // const subsets = subsetsOfSet(set, index + 1)
  // console.log(index)
  // console.log(set[index])
  return subsetsOfSet(set, index - 1, [...res, set[index]])
}

// console.log(subsetsOfSet([])) // ->
// console.log(subsetsOfSet([1])) // ->
console.log(subsetsOfSet([1, 2])) // ->

// console.log(subsetsOfSet([1, 2, 3, 4])) // ->
// [
//   [],
//   [1],
//   [2],
//   [3],
//   [4],
//   [1, 2],
//   [1, 3],
//   [1, 4],
//   [2, 3],
//   [2, 4],
//   [3, 4],
//   [1, 2, 3],
//   [2, 3, 4],
//   [1, 3, 4],
//   [1, 2, 4],
//   [1, 2, 3, 4],
// ]
//
// [
//   [],
//   [1],
//   [2],
//   [1, 2],
//   [3],
//   [1, 3],
//   [2, 3],
//   [1, 2, 3],
// ]
//
// [
//   [],
//   [1],
//   [2],
//   [1, 2],
// ]
//
// [
//   [],
//   [1],
// ]
//
// [
//   [],
// ]
//
// subsetsOfSet([]) // -> [[]]
//
// subsetsOfSet([1]) // -> [[],
//                   //     [1]]
//
// subsetsOfSet([1, 2]) // [[], [1]
//                      //  [2], [1, 2]]
// subsetsOfSet([1, 2, 3]) // [[], [1]
//                         //  [2], [3],
//                         //  [1, 2],
//                         //  [2], [1, 2]]
