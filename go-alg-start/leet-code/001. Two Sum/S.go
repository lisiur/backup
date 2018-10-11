package main

import "fmt"

func twoSum(nums []int, target int) []int {
	hMap := make(map[int]int)
	for i := 0; i < len(nums); i++ {
		if v, ok := hMap[target-nums[i]]; ok {
			return []int{v, i}
		}
		hMap[nums[i]] = i
	}
	return nil
}

func main() {
	fmt.Println(twoSum([]int{1, 2, 3, 4}, 3))
}
