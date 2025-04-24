function intersect(nums1: number[], nums2: number[]): number[] {
  const countValuesInNums1 = new Map<number, number>()
  const result: number[] = []

  for (const value of nums1) {
    countValuesInNums1.set(value, (countValuesInNums1.get(value) || 0) + 1)
  }

  for (const value of nums2) {
    const count = countValuesInNums1.get(value)
    if (count && count > 0) {
      result.push(value)
      countValuesInNums1.set(value, count - 1)
    }
  }

  return result
}
const nums1 = [4, 9, 5]
const nums2 = [9, 4, 9, 8, 4]

console.log(intersect(nums1, nums2))
