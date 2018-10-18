package main

import "fmt"

func isMonotonic(A []int) bool {
	var start, end = 0, len(A) - 1
	if A[start] < A[end] {
		for i := start; i < end; i++ {
			if A[i] > A[i+1] {
				return false
			}
		}
	} else if A[start] > A[end] {
		for i := start; i < end; i++ {
			if A[i] < A[i+1] {
				return false
			}
		}
	} else {
		for i := start + 1; i < end; i++ {
			if A[i] != A[start] {
				return false
			}
		}
	}
	return true
}

func main() {
	var input = []int{3, 1, 9}
	fmt.Println(isMonotonic(input))
}
