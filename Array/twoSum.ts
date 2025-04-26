function twoSum(nums: number[], target: number): number[] {
  const numbers = new Map<number, number>()
  for (let i = 0; i < nums.length; i++) {
    const smth = target - nums[i]
    if (numbers.has(smth)) return [numbers.get(smth) as number, i]
    numbers.set(nums[i], i)
  }
  return []
}

const twoSumNums = [3, 2, 4]
const target = 6

console.log(twoSum(twoSumNums, target))
