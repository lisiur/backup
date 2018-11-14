package main

func dominantIndex(nums []int) int {
	if len(nums) == 0 {
		return -1
	}
	if len(nums) == 1 {
		return 0
	}

	var (
		maxIndex       = 0
		secondMaxIndex = -1
	)
	for i := 1; i < len(nums); i++ {
		if nums[i] >= nums[maxIndex] {
			secondMaxIndex = maxIndex
			maxIndex = i
		} else {
			if secondMaxIndex == -1 || nums[secondMaxIndex] < nums[i] {
				secondMaxIndex = i
			}
		}
	}
	if nums[maxIndex] >= nums[secondMaxIndex]*2 {
		return maxIndex
	}
	return -1
}

func main() {}
