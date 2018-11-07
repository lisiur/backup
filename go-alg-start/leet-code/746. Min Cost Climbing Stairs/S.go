package main

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}
func minCostClimbingStairs(cost []int) int {
	var cache = make(map[int]int)
	if len(cost) == 0 || len(cost) == 1 {
		return 0
	}
	cache[len(cost)-1] = 0
	cache[len(cost)-2] = min(cost[len(cost)-1], cost[len(cost)-2])
	for i := len(cost) - 3; i >= 0; i-- {
		cache[i] = min(cost[i]+cache[i+1], cost[i+1]+cache[i+2])
	}
	return cache[0]
}

func minCostClimbingStairs2(cost []int) int {
	var a, b int
	for i := len(cost) - 1; i >= 0; i-- {
		a, b = cost[i]+min(a, b), a
	}
	return min(a, b)
}

func main() {}
