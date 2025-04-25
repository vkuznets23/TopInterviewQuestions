function plusOne(digits: number[]): number[] {
  const convertToBiggerNum = BigInt(digits.join('')) + BigInt(1) //Number is not enough for big number
  const convertToString = String(convertToBiggerNum).split('')
  const result = convertToString.map(Number)

  return result
}

const plusOneNums = [6, 1, 4, 5]
console.log(plusOne(plusOneNums))
