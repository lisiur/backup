package main

func findLengthOfLCIS(nums []int) int {
	if len(nums) == 0 {
		return 0
	}
	var maxLen = 1
	var tmpLen = 1
	for i := 1; i < len(nums); i++ {
		if nums[i] > nums[i-1] {
			tmpLen++
			if tmpLen > maxLen {
				maxLen = tmpLen
			}
		} else {
			tmpLen = 1
		}
	}
	return maxLen
}

func main() {}
