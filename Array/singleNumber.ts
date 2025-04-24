function singleNumber(nums: number[]): number {
  const map = new Map()
  nums = nums.sort()
  let singleVal = 0
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i]) && nums[i] !== nums[i + 1]) {
      singleVal = nums[i]
    }
    map.set(nums[i], true)
  }

  return singleVal
}

const singleValNums = [5]
console.log(singleNumber(singleValNums))
