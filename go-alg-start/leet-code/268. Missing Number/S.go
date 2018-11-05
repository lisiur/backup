package main

func alg(nums []int) int {
	var arr = make([]bool, len(nums)+1)
	for i := 0; i < len(nums); i++ {
		arr[nums[i]] = true
	}
	for i := 0; i < len(nums)+1; i++ {
		if !arr[i] {
			return i
		}
	}
	return -1
}

func main() {
}
