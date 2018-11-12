package main

func generate(numRows int) [][]int {
	var rst = make([][]int, 0)
	if numRows == 0 {
		return rst
	}
	rst = append(rst, []int{1})
	for i := 1; i < numRows; i++ {
		row := make([]int, i+1)
		row[0] = 1
		row[i] = 1
		for j := 1; j < i; j++ {
			row[j] = rst[i-1][j-1] + rst[i-1][j]
		}
		rst = append(rst, row)
	}
	return rst
}

func main() {}
