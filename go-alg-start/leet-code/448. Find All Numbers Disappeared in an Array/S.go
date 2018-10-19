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

func main() {
	fmt.Println(findDisappearedNumbers([]int{4, 3, 7, 7, 7, 2, 3, 1}))
}
