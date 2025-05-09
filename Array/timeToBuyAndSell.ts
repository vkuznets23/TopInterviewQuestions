const prices = [7, 1, 5, 3, 6, 4]
// const prices = [1, 2, 3, 4, 5]
// const prices = [7, 6, 4, 3, 1]

//version 1
function maxProfit1(prices: number[]): number {
  let profits: number[] = []
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < prices[i + 1]) {
      let sum = prices[i + 1] - prices[i]
      profits.push(sum)
    }
  }
  const result = profits.reduce((sum, cur) => sum + cur, 0)
  return result
}

//version 2
function maxProfit2(prices: number[]): number {
  let profit = 0
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < prices[i + 1]) {
      profit += prices[i + 1] - prices[i]
    }
  }
  console.log(profit)

  return profit
}

maxProfit1(prices)
maxProfit2(prices)
