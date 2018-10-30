package main

import "math"

func alg(M [][]int) [][]int {
	var row = len(M)
	var col = len(M[0])
	var N = make([][]int, row)
	for i := 0; i < row; i++ {
		N[i] = make([]int, col)
		for j := 0; j < col; j++ {
			sum := 0
			num := 0
			for _, di := range []int{-1, 0, 1} {
				for _, dj := range []int{-1, 0, 1} {
					if checkValid(i+di, j+dj, row, col) {
						num++
						sum += M[i+di][j+dj]
					}
				}
			}
			N[i][j] = int(math.Floor(float64(sum) / float64(num)))
		}
	}
	return N
}
func checkValid(i int, j int, n int, m int) bool {
	return i >= 0 && i < n && j >= 0 && j < m
}

func main() {}
