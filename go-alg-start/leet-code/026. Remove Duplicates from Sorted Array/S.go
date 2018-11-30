package alg

func removeDuplicates(nums []int) int {
	var tmp = make(map[int]bool)
	var index = 0
	for i := 0; i < len(nums); i++ {
		if _, e := tmp[nums[i]]; !e {
			tmp[nums[i]] = true
			nums[index] = nums[i]
			index++
		}
	}
	return index
}
