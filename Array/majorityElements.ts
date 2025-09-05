const numsArray2 = [2, 2, 1, 1, 1, 2, 2]

function majorityElement(nums: number[]): number {
  const length = nums.length
  const map = new Map()
  const majority = Math.floor(length / 2)

  for (const num of nums) {
    const count = map.get(num) || 0
    map.set(num, count + 1)

    if (map.get(num) > majority) {
      return num
    }
  }

  return -1
}

function majorityElement2(nums: number[]): number {
  nums.sort((a, b) => a - b)
  return nums[Math.floor(nums.length / 2)]
}

console.log(majorityElement2(numsArray2))
