package main

func majorityElement(nums []int) int {
	var m = make(map[int]int)
	for i := 0; i < len(nums); i++ {
		if _, e := m[nums[i]]; e {
			m[nums[i]]++
		} else {
			m[nums[i]] = 1
		}
		if m[nums[i]] >= (len(nums)+1)/2 {
			return nums[i]
		}
	}
	return 0
}

func main() {}
