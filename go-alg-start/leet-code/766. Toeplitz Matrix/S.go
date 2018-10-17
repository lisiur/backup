package main

import "fmt"

func isToeplitzMatrix(matrix [][]int) bool {
	var row, col = len(matrix), len(matrix[0])
	for j := col - 2; j >= 0; j-- {
		r := 0
		c := j
		for r+1 < row && c+1 < col {
			if matrix[r][c] != matrix[r+1][c+1] {
				return false
			}
			r++
			c++
		}
	}
	for i := 1; i <= row-1; i++ {
		r := i
		c := 0
		for r+1 < row && c+1 < col {
			if matrix[r][c] != matrix[r+1][c+1] {
				return false
			}
			r++
			c++
		}
	}
	return true
}

func main() {
	var A = [][]int{
		[]int{1, 2, 3, 4},
		[]int{5, 1, 2, 3},
		[]int{5, 5, 1, 2},
	}
	fmt.Println(isToeplitzMatrix(A))
}
