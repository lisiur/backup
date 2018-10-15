package main

import (
	"fmt"
	"sort"
)

func sortArrayByParity(A []int) []int {
	var i, j = 0, len(A) - 1
	for i < j {
		for A[i]%2 == 0 {
			i++
		}
		for A[j]%2 != 0 {
			j--
		}
		if i < j {
			A[i], A[j] = A[j], A[i]
		}
		i++
		j--
	}
	return A
}

func sortArrayByParity2(A []int) []int {
	var i, j = 0, len(A) - 1
	var B = make([]int, len(A))
	for _, v := range A {
		if v%2 == 0 {
			B[i] = v
			i++
		} else {
			B[j] = v
			j--
		}
	}
	return B
}

func sortArrayByParity3(A []int) []int {
	var i, j = 0, len(A) - 1
	for i < j {
		if A[i]%2 > A[j]%2 {
			A[i], A[j] = A[j], A[i]
		}
		if A[i]%2 == 0 {
			i++
		}
		if A[j]%2 != 0 {
			j--
		}
	}
	return A
}

func sortArrayByParity4(A []int) []int {
	sort.Slice(A, func(i, j int) bool {
		return A[i]%2 < A[j]%2
	})
	return A
}

func main() {
	fmt.Println(sortArrayByParity4([]int{0, 1, 2, 3}))
}
