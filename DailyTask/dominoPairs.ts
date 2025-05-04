//[[1,2], [2,1], [3,4], [5,6], [4,3], [1,2]]

function numEquivDominoPairs(dominoes: number[][]): number {
  const map = new Map<string, number>()
  let result = 0

  for (const [a, b] of dominoes) {
    const key = [Math.min(a, b), Math.max(a, b)].toString()
    const count = map.get(key) || 0
    result += count
    map.set(key, count + 1)
  }
  return result
}

const dominoes = [
  [1, 2],
  [2, 1],
  [3, 4],
  [5, 6],
]

console.log(numEquivDominoPairs(dominoes))
