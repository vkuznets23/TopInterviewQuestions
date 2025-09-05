const numsArr2 = [0, 0, 1, 1, 1, 1, 2, 3, 3]

function removeDuplicates3(nums: number[]): number {
  let k = 0
  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] !== nums[i + 2]) {
      nums[k] = nums[i]
      k++
    }
  }

  console.log(nums)
  console.log(k)
  return k
}

removeDuplicates3(numsArr2)
