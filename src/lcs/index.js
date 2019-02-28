// @flow

let memo: Map<string, number>

function getLCS(str1: string, str2: string): number {
  memo = new Map()
  return getLCSLoop(str1, str2)
}

function getLCSLoop(str1: string, str2: string, index1 = 0, index2 = 0, max = 0): number {
  const currentLetter1 = str1[index1]
  const currentLetter2 = str2[index2]

  if (index1 === str1.length || index2 === str2.length) {
    return max
  }

  const key = JSON.stringify({ index1, index2, max })
  if (memo.has(key)) {
    return Number(memo.get(key))
  }

  if (currentLetter1 === currentLetter2) {
    return getLCSLoop(str1, str2, index1 + 1, index2 + 1, max + 1)
  }
  const res = Math.max(
    getLCSLoop(str1, str2, index1, index2 + 1, max),
    getLCSLoop(str1, str2, index1 + 1, index2, max),
  )
  memo.set(key, res)
  return res
}

console.log(getLCS('abcde', 'acbef')) // => 3
console.log(getLCS('acdez', 'acbefz')) // => 4
console.log(getLCS('pirikapirirara', 'poporinapeperuto')) // => 6
