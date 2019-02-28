export interface Item {
  value: number
  weight: number
}

const rnd = () => Math.round(Math.random() * 100)
export const bigExample = Array(1000)
  .fill(0)
  .map(() => ({ value: rnd(), weight: rnd() }))

export const example = [
  { value: 3, weight: 2 },
  { value: 2, weight: 1 },
  { value: 6, weight: 3 },
  { value: 1, weight: 2 },
  { value: 3, weight: 1 },
  { value: 85, weight: 5 },
]
