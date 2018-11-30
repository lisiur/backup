package main

func removeElement(nums []int, val int) int {
	var i, j = 0, 0
	for {
		for i < len(nums) && nums[i] != val {
			i++
		}
		j = i + 1
		for j < len(nums) && nums[j] == val {
			j++
		}

		if i >= len(nums) || j >= len(nums) {
			break
		}
		nums[i], nums[j] = nums[j], nums[i]
		i++
		j++
	}
	return i
}

func main() {}
