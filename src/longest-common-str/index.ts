function getLongestCommonStringLength(
  str1: string,
  str2: string,
  index1 = 0,
  index2 = 0,
  max = 0,
  currentMax = 0,
): number {
  const currentLetter1 = str1[index1]
  const currentLetter2 = str2[index2]

  if (index1 === str1.length || index2 === str2.length) {
    return max
  }

  if (currentLetter1 === currentLetter2) {
    const newMax = currentMax + 1
    return getLongestCommonStringLength(str1, str2, index1 + 1, index2 + 1, max, newMax)
  }
  const highest = Math.max(max, currentMax)
  return Math.max(
    getLongestCommonStringLength(str1, str2, index1 + 1, index2, highest),
    getLongestCommonStringLength(str1, str2, index1, index2 + 1, highest),
  )
}

console.log(getLongestCommonStringLength('abcde', 'abcef')) // => 3
console.log(getLongestCommonStringLength('pirikapirirara', 'poporinapeperuto')) // => 2
