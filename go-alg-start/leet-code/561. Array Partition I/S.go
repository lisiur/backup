package main

import (
	"fmt"
	"sort"
)

func arrayPairSum(nums []int) int {
	var rst = 0
	sort.Ints(nums)
	for i := 0; i < len(nums); i += 2 {
		rst += nums[i]
	}
	return rst

}

func main() {
	var input = []int{4, 3, 2, 1}
	fmt.Println(arrayPairSum(input))
}
