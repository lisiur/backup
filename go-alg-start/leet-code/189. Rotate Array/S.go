package main

import "fmt"

func rotateOnce(nums []int) {
	l := len(nums)
	for i := 0; i < l-1; i++ {
		nums[i], nums[l-1] = nums[l-1], nums[i]
	}
}

func rotate(nums []int, k int) {
	for i := 0; i < k; i++ {
		rotateOnce(nums)
	}
}

func reverse(nums []int, start int, end int) {
	for start < end {
		nums[start], nums[end-1] = nums[end-1], nums[start]
		start++
		end--
	}
}

func rotate2(nums []int, k int) {
	k %= len(nums)
	reverse(nums, 0, len(nums))
	reverse(nums, 0, k)
	reverse(nums, k, len(nums))
}

func main() {
	nums := []int{1, 2, 3, 4, 5, 6, 7, 8}
	rotate2(nums, 3)
	fmt.Println(nums)
}
