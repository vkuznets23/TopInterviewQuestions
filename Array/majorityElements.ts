const numsArray2 = [3, 2, 3]

function majorityElement(nums: number[]): number {
  const majorityElement = nums.length / 2
  const map = new Map()

  for (let i = 0; i < nums.length; i++) {
    // if the number is not in the map, set it to 0
    const count = map.get(nums[i]) || 0
    // if the number is in the map, increment the count
    map.set(nums[i], count + 1)

    if (map.get(nums[i]) > majorityElement) {
      // if the count is greater than the majority element, return the number
      return nums[i]
    }
  }

  return -1
}

// function majorityElement(nums: number[]): number {
//   nums.sort((a, b) => a - b)
//   return nums[Math.floor(nums.length / 2)]
// }

console.log(majorityElement(numsArray2))
