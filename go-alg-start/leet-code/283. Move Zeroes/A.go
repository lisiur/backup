package main

import "fmt"

func moveZeroes(nums []int) {
	for i, j := 0, 0; i < len(nums); {
		// find zero
		for nums[j] != 0 {
			if j++; j >= len(nums) {
				return
			}
		}

		// find not zero
		for nums[i] == 0 {
			if i++; i >= len(nums) {
				return
			}
		}
		if i > j {
			nums[i], nums[j] = nums[j], nums[i]
			i++
			j++
			if i >= len(nums) || j >= len(nums) {
				return
			}
		} else {
			i++
		}
	}
}

func moveZeroes2(nums []int) {
	next := 0
	for i, v := range nums {
		if v != 0 {
			if i != next {
				nums[next] = v
			}
			next++
		}
	}
	for i := next; i < len(nums); i++ {
		nums[i] = 0
	}
}

func moveZeroes3(nums []int) {
	next := 0
	for i, v := range nums {
		if v != 0 {
			nums[next], nums[i] = nums[i], nums[next]
			next++
		}
	}
}

func main() {
	input := []int{1, 0, 0, 2}
	moveZeroes2(input)
	fmt.Println(input)
}
