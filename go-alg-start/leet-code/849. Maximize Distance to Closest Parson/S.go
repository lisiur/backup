package main

func max(a int, b int) int {
	if a > b {
		return a
	}
	return b
}

func min(a int, b int) int {
	if a > b {
		return b
	}
	return a
}
func maxDistToClosest(seats []int) int {
	var tmp = make([]int, len(seats))
	for i := 0; i < len(seats); i++ {
		if seats[i] == 0 {
			tmp[i] = len(seats) - 1
		} else {
			tmp[i] = 0
		}
	}
	for i := 1; i < len(seats); i++ {
		if seats[i] == 1 {
			tmp[i] = 0
		} else {
			tmp[i] = min(tmp[i-1]+1, tmp[i])
		}
	}
	for i := len(seats) - 2; i >= 0; i-- {
		if seats[i] == 1 {
			tmp[i] = 0
		} else {
			tmp[i] = min(tmp[i+1]+1, tmp[i])
		}
	}
	maxRst := 0
	for i := 0; i < len(tmp); i++ {
		maxRst = max(maxRst, tmp[i])
	}
	return maxRst
}

func main() {}
