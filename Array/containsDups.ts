function containsDuplicate(nums: number[]): boolean {
  const map = new Map()
  for (const value of nums) {
    if (map.has(value)) return true
    map.set(value, true)
  }

  return false
}

const containDupsNums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
console.log(containsDuplicate(containDupsNums))
