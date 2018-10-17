package main

import "fmt"

func transpose(A [][]int) [][]int {
	var row, col = len(A), len(A[0])
	var output = make([][]int, col)
	for i := 0; i < col; i++ {
		output[i] = make([]int, row)
		for j := 0; j < row; j++ {
			output[i][j] = A[j][i]
		}
	}
	return output
}

func main() {
	var A = [][]int{
		[]int{1, 2, 3},
		[]int{1, 2, 3},
		[]int{1, 2, 3},
		[]int{1, 2, 3},
	}
	fmt.Println(transpose(A))
}
