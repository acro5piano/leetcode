// /*
//  * input: [1,2,3], 0
//  * output: [[1,2], [2,3], [3,1]]
//  */
// function getSets(set: number[], index: number): number[] {
//   return set.map(n => set.filter(x => x !== n))[index]
// }
//
// function getSetsRecursive(set: number[], res: number[] = []): any[] {
//   if (set.length === 0) {
//     return res
//   }
//   return getSetsRecursive(getSets(set, 0), res)
// }
//
// function subsetsOfSet(set: number[], res: number[] = []): any {
//   // if (set.length === 0) {
//   //   return res
//   // }
//   // if (set.length === 1) {
//   //   return [...res, set]
//   // }
//
//   const hoge = getSetsRecursive(set)
//   // const hoge = getSets(set)
//   //   .map(subset => getSets(subset))
//   //   .reduce((car, cur) => [...car, ...cur])
//   console.log(hoge)
//
//   // const fuga = getSets(set)
//   // console.log(fuga)
//   // return [set, ...hoge, ...fuga]
//   return getSets(set)
// }
//
// // console.log(getSets([1, 2, 3]))
//
// // console.log(subsetsOfSet([])) // ->
// // console.log(subsetsOfSet([1])) // ->
// // console.log(subsetsOfSet([1, 2])) // ->
// // subsetsOfSet([1, 2, 3])
// console.log(subsetsOfSet([1, 2, 3])) // ->
//
// // console.log(subsetsOfSet([1, 2, 3, 4])) // ->
// // [
// //   [],
// //   [1],
// //   [2],
// //   [3],
// //   [4],
// //   [1, 2],
// //   [1, 3],
// //   [1, 4],
// //   [2, 3],
// //   [2, 4],
// //   [3, 4],
// //   [1, 2, 3],
// //   [2, 3, 4],
// //   [1, 3, 4],
// //   [1, 2, 4],
// //   [1, 2, 3, 4],
// // ]
// //
// // [
// //   [],
// //   [1],
// //   [2],
// //   [1, 2],
// //   [3],
// //   [1, 3],
// //   [2, 3],
// //   [1, 2, 3],
// // ]
// //
// // [
// //   [],
// //   [1],
// //   [2],
// //   [1, 2],
// // ]
// //
// // [
// //   [],
// //   [1],
// // ]
// //
// // [
// //   [],
// // ]
// //
// // subsetsOfSet([]) // -> [[]]
// //
// // subsetsOfSet([1]) // -> [[],
// //                   //     [1]]
// //
// // subsetsOfSet([1, 2]) // [[], [1]
// //                      //  [2], [1, 2]]
// // subsetsOfSet([1, 2, 3]) // [[], [1]
// //                         //  [2], [3],
// //                         //  [1, 2],
// //                         //  [2], [1, 2]]
