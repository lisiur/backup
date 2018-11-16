package main

func pivotIndex(nums []int) int {
	var tmp = make([][]int, len(nums))
	var sum = 0
	for i := 0; i < len(nums); i++ {
		sum += nums[i]
		tmp[i] = []int{sum, 0}
	}
	sum = 0
	for i := len(nums) - 1; i >= 0; i-- {
		sum += nums[i]
		tmp[i][1] = sum
	}
	for i := 0; i < len(nums); i++ {
		if tmp[i][0] == tmp[i][1] {
			return i
		}
	}
	return -1
}

func pivotIndex2(nums []int) int {
	var (
		sum     = 0
		leftSum = 0
	)
	for _, v := range nums {
		sum += v
	}
	for i := 0; i < len(nums); i++ {
		leftSum += nums[i]
		if leftSum*2-nums[i] == sum {
			return i
		}
	}
	return -1
}

func main() {}
