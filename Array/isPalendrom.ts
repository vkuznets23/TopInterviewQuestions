function isPalindrome(x: number): boolean {
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false

  const str = x.toString()
  const reverse = str.split('').reverse().join('')

  return str === reverse
}

isPalindrome(1231)
