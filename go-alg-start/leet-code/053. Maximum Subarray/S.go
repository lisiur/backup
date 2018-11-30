package main

func max(a int, b int) int {
	if a > b {
		return a
	}
	return b
}

func maxSubArray(nums []int) int {
	var sum = nums[0]
	var tmp = nums[0]
	for i := 1; i < len(nums); i++ {
		tmp = max(tmp+nums[i], nums[i])
		if tmp > sum {
			sum = tmp
		}
	}
	return sum
}

func main() {}
