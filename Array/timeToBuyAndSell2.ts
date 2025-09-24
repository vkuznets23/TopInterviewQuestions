function maxProfit4(prices: number[]): number {
  let max_profit = 0

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      max_profit += prices[i] - prices[i - 1]
    }
  }

  return max_profit
}
