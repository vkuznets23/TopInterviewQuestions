function removeDup(nums: number[]): number {
  if (nums.length === 0) return 0

  const map = new Map<number, boolean>()
  let k = 0

  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], true)
      nums[k] = nums[i]
      k++
    }
  }

  return k
}

const removeDupNums = [1, 1, 2]
console.log(removeDup(removeDupNums))
console.log(removeDupNums)
