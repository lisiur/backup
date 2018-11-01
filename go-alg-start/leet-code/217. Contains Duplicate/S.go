package main

func alg(nums []int) bool {
	var mp = make(map[int]bool)
	for i := 0; i < len(nums); i++ {
		if _, e := mp[nums[i]]; e {
			return true
		}
		mp[nums[i]] = true
	}
	return false
}

func main() {
}
