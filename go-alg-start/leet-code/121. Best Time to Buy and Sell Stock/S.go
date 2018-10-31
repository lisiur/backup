package main

func alg(prices []int) int {
	var maxCur = 0
	var maxSoFar = 0
	for i := 0; i < len(prices)-1; i++ {
		maxCur = max(0, maxCur+prices[i+1]-prices[i])
		maxSoFar = max(maxCur, maxSoFar)
	}
	return maxSoFar
}
func max(a int, b int) int {
	if a > b {
		return a
	}
	return b
}
func main() {}
