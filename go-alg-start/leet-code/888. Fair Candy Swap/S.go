package main

func fairCandySwap(A []int, B []int) []int {
	var totalA, totalB int = 0, 0
	for _, v := range A {
		totalA += v
	}
	for _, v := range B {
		totalB += v
	}

	dict := make(map[int]int)
	dt := (totalA - totalB) / 2
	for i, v := range A {
		dict[v-dt] = i
	}
	for _, v := range B {
		if _, exist := dict[v]; exist {
			return []int{v + dt, v}
		}
	}
	return []int{-1, -1}
}

func main() {}
