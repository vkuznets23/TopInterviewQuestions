function reverse(x: number): number {
  let str = x.toString()
  let arr: string

  if (str[0] === '-') {
    arr = str.slice(1)
  } else {
    arr = str
  }

  arr = arr.split('').reverse().join('')
  const result = x < 0 ? -parseInt(arr) : parseInt(arr)

  if (result < -2147483648 || result > 2147483647) {
    return 0
  }

  return result
}

const x = -1230
console.log(reverse(x))
