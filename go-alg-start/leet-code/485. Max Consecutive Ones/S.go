package main

func findMaxConsecutiveOnes(nums []int) int {
	var max = 0
	var tempMax int
	for i := 0; i < len(nums); {
		tempMax = 0
		for i < len(nums) && nums[i] == 1 {
			i++
			tempMax++
		}
		if tempMax > max {
			max = tempMax
		}
		i++
	}
	return max
}

func main() {
}
