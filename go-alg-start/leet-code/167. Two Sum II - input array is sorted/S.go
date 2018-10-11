package main

import "fmt"

func twoSum(numbers []int, target int) []int {
	for i := 0; i < len(numbers)-1; i++ {
		for j := i + 1; j < len(numbers); j++ {
			if numbers[i]+numbers[j] == target {
				return []int{i + 1, j + 1}
			}
			if numbers[i]+numbers[j] > target {
				break
			}
		}
	}
	return []int{-1, -1}
}

func twoSum2(numbers []int, target int) []int {
	start, end := 0, len(numbers)-1
	for start < end {
		sum := numbers[start] + numbers[end]
		switch {
		case sum == target:
			return []int{start + 1, end + 1}
		case sum < target:
			start++
		case sum > target:
			end--
		}
	}
	return []int{-1, -1}
}

func main() {
	fmt.Println(twoSum2([]int{3, 24, 50, 79, 88, 150, 345}, 200))
}
