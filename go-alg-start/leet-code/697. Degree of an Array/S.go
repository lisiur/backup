package main

import "fmt"

type tmp struct {
	first int
	last  int
	num   int
}

func min(a int, b int) int {
	if a < b {
		return a
	}
	return b
}

func findShortestSubArray(nums []int) int {
	var mp = make(map[int]*tmp)
	for i := 0; i < len(nums); i++ {
		if v, e := mp[nums[i]]; e {
			v.last = i
			v.num++
		} else {
			mp[nums[i]] = &tmp{
				first: i,
				last:  i,
				num:   1,
			}
		}
	}
	var maxNum = 0
	var minLen = 50000
	for k := range mp {
		if mp[k].num > maxNum {
			maxNum = mp[k].num
			minLen = mp[k].last - mp[k].first + 1
		} else if mp[k].num == maxNum {
			minLen = min(minLen, mp[k].last-mp[k].first+1)
		} else {
			continue
		}
	}
	return minLen
}

func main() {
	fmt.Println(findShortestSubArray([]int{1, 2, 2, 3, 1}))
}
