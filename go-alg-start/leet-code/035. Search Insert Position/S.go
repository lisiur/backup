package main

import "fmt"

func searchInsert(nums []int, target int) int {
	start := 0
	end := len(nums) - 1
	var mid = 0
	for start <= end {
		mid = (end + start) >> 1
		fmt.Println(start, end, mid, nums[mid])
		if target < nums[mid] {
			end = mid - 1
		} else if target > nums[mid] {
			start = mid + 1
		} else {
			return mid
		}
	}
	return start
}

func main() {
	fmt.Println(searchInsert([]int{1, 3, 5, 6}, 4))
}
