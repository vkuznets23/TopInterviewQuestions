const numsArray = [2, 4, 5, 7, 2, 2, 0, 2]
const val = 2

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

removeElement(numsArray, val)
