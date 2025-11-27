const numsArray = [3, 2, 2, 3]
const val = 3

function removeElement(nums: number[], val: number): number {
  let k = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i]
      k++
    }
  }

  nums.length = k
  return k
}

// nums = nums.filter((n) => n !== val)

removeElement(numsArray, val)
