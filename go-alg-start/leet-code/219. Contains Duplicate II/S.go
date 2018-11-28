package alg

func containsNearbyDuplicate(nums []int, k int) bool {
	var tmp = make(map[int]int)
	for i := 0; i < len(nums); i++ {
		if v, e := tmp[nums[i]]; e {
			if i-v <= k {
				return true
			}
		}
		tmp[nums[i]] = i
	}
	return false
}
