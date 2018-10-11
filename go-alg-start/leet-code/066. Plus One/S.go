package main

import "fmt"

func plusOne(digits []int) []int {
	var quotient = 1
	var sum = 0
	for i := len(digits) - 1; i >= 0; i-- {
		sum = digits[i] + quotient
		digits[i] = sum % 10
		quotient = sum / 10
	}
	if quotient == 1 {
		return append([]int{1}, digits...)
	}
	return digits
}

func main() {
	fmt.Println(plusOne([]int{9, 9, 9}))
}
