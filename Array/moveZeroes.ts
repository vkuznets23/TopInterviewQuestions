function moveZeroes(nums: number[]): void {
  let k = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      ;[nums[i], nums[k]] = [nums[k], nums[i]]
      k++
    }
  }

  console.log(nums)
}

const nums = [0, 1, 0, 3, 12]
moveZeroes(nums)
