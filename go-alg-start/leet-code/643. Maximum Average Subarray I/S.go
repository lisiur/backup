package alg

func findMaxAverage(nums []int, k int) float64 {
	var tmp = 0
	var sum = 0
	for i := 0; i < k; i++ {
		sum += nums[i]
	}
	tmp = sum
	for i := k; i < len(nums); i++ {
		tmp += nums[i] - nums[i-k]
		if tmp > sum {
			sum = tmp
		}
	}
	return float64(sum) / float64(k)
}
