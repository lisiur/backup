package alg

func findMaxAverage(nums []int, k int) float64 {
	var sum = -10000
	var tmp = 0
	for i := 0; i < len(nums)-k+1; i++ {
		if i == 0 {
			for j := 0; j < k; j++ {
				tmp += nums[j]
			}
		} else {
			tmp = tmp + nums[i+k-1] - nums[i-1]
		}
		if tmp > sum {
			sum = tmp
		}
	}
	return float64(sum) / float64(k)
}
