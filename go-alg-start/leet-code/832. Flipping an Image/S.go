package main

import "fmt"

func flipAndInvertImage(A [][]int) [][]int {
	for i := 0; i < len(A); i++ {
		start, end := 0, len(A[i])-1
		for start <= end {
			A[i][start], A[i][end] = ^A[i][end]+2, ^A[i][start]+2
			start++
			end--
		}
	}
	return A
}

func flipAndInvertImage2(A [][]int) [][]int {
	var B = make([][]int, len(A))
	for i := 0; i < len(A); i++ {
		B[i] = make([]int, len(A[i]))
		start, end := 0, len(A[i])-1
		for start <= end {
			B[i][start], B[i][end] = ^A[i][end]+2, ^A[i][start]+2
			start++
			end--
		}
	}
	return B
}

func main() {
	var A = [][]int{
		[]int{0, 1, 1},
		[]int{0, 1, 0},
		[]int{1, 1, 0},
	}
	fmt.Println(flipAndInvertImage2(A))
}
