package main

func alg(S string) [][]int {
	var c byte
	var l = 0
	var rst = make([][]int, 0)
	var r = make([]int, 2)
	for i := 0; i < len(S); i++ {
		if S[i] != c {
			if r[1]-r[0] >= 2 {
				rst = append(rst, r)
				r = make([]int, 2)
			}
			c = S[i]
			l = 1
			r[0] = i
		} else {
			l++
			r[1] = i
			if i == len(S)-1 && r[1]-r[0] >= 2 {
				rst = append(rst, r)
				r = make([]int, 2)
			}
		}
	}
	return rst
}

func main() {
}
