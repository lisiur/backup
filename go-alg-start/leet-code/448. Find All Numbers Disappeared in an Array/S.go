package main

import "fmt"

func findDisappearedNumbers(nums []int) []int {
	var arr = make([]int, len(nums))
	for i := 0; i < len(nums); i++ {
		arr[i] = i + 1
	}
	for i := 0; i < len(nums); i++ {
		arr[nums[i]-1] = 0
	}

	var j = 0
	for i := 0; i < len(arr); i++ {
		for i < len(arr) && arr[i] != 0 {
			arr[j] = arr[i]
			i++
			j++
		}
	}
	return arr[:j]
}

func abs(input int) int {
	if input < 0 {
		return -input
	}
	return input
}
func findDisappearedNumbers2(nums []int) []int {
	var arr = make([]int, 0)
	for i := 0; i < len(nums); i++ {
		index := abs(nums[i]) - 1
		nums[index] = -abs(nums[index])
	}
	for i := 0; i < len(nums); i++ {
		if nums[i] > 0 {
			arr = append(arr, i+1)
		}
	}
	return arr
}

func main() {
	fmt.Println(findDisappearedNumbers([]int{4, 3, 7, 7, 7, 2, 3, 1}))
}
